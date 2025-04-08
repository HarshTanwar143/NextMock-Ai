"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import webcam from '../../../../../../public/cam.svg';
import { Button } from '@/components/ui/button';
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic, StopCircle } from 'lucide-react';
import { toast } from 'sonner';
import { chatSession } from '@/utils/GeminiAIModal';
import { db } from '@/utils/db';
import { UserAnswer } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';

const RecordAnswerSection = ({ questionData, activeIndex, interviewData, mediaEnabled }) => {
    const [userAnswer, setUserAnswer] = useState('');
    const { user } = useUser();
    const [loading, setLoading] = useState(false);
    const [hasPermissionAudio, setHasPermissionAudio] = useState(false);

    const {
        results,
        isRecording,
        startSpeechToText,
        stopSpeechToText,
        setResults
    } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
    });

    useEffect(() => {
        results.forEach(result => {
            setUserAnswer(prev => prev + result?.transcript + ' ');
        });
    }, [results]);

    useEffect(() => {
        const checkPermissions = async () => {
            try {
                const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
                setHasPermissionAudio(true);
                audioStream.getTracks().forEach(track => track.stop());
            } catch {
                setHasPermissionAudio(false);
            }
        };
        checkPermissions();
    }, []);

    const StartStopRecording = () => {
        if (isRecording) {
            stopSpeechToText();
        } else {
            setUserAnswer('');
            startSpeechToText();
        }
    };

    useEffect(() => {
        if (!isRecording && userAnswer.trim().length > 0) {
            const wordCount = userAnswer.trim().split(/\s+/).length;
            if (wordCount >= 5) {
                UpdateUserAnswer();
            } else {
                toast.error("Your response must be at least 5 words.");
                setUserAnswer('');
                setResults([]);
            }
        }
    }, [isRecording]); 

    const UpdateUserAnswer = async () => {
        setLoading(true);
        try {
            const feedbackPrompt = `Question: ${questionData[activeIndex]?.question}, User Answer: ${userAnswer}. Based on the question and user's answer, please give a rating and 3-5 lines of feedback for improvement in JSON format with 'rating' and 'feedback' fields.`;

            const result = await chatSession.sendMessage(feedbackPrompt);
            const mockJsonResp = (result.response.text()).replace('```json', '').replace('```', '');
            const jsonFeedbackResp = JSON.parse(mockJsonResp);

            await db.insert(UserAnswer).values({
                mockIdRef: interviewData?.mockId,
                question: questionData[activeIndex]?.question,
                correctAns: questionData[activeIndex]?.answer,
                userAns: userAnswer,
                feedback: jsonFeedbackResp?.feedback,
                rating: jsonFeedbackResp?.rating,
                userEmail: user?.primaryEmailAddress?.emailAddress,
                createdAt: moment().format('YYYY-MM-DD HH:mm:ss')
            });

            toast.success('Answer saved successfully!');
            setUserAnswer('');
            setResults([]);
        } catch (err) {
            toast.error('Something went wrong while saving the answer.');
        }
        setLoading(false);
    };

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center bg-black w-full h-full rounded-lg p-5 mt-20'>
                {mediaEnabled ? (
                    <Webcam
                        mirrored
                        style={{ height: 300, width: '100%', zIndex: 10 }}
                    />
                ) : (
                    <>
                        <Image src={webcam} className='rounded-lg' width={200} height={200} alt="webcam placeholder" />
                        <p className="text-white mt-2 text-sm text-center">
                            Webcam or Microphone permission denied.<br />
                            Please allow access from your browser settings.
                        </p>
                    </>
                )}
            </div>

            <Button variant='outline' className='my-10' onClick={StartStopRecording} disabled={loading || !hasPermissionAudio}>
                {isRecording ? (
                    <h2 className='flex gap-2 items-center text-red-600'>
                        <StopCircle /> Stop Recording
                    </h2>
                ) : (
                    <h2 className='text-violet-800 flex items-center gap-2'>
                        <Mic /> Record Answer
                    </h2>
                )}
            </Button>
        </div>
    );
};

export default RecordAnswerSection;
