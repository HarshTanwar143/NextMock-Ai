"use client";
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import { Textarea } from '@/components/ui/textarea';
import { chatSession } from '@/utils/GeminiAIModal';
import { LoaderCircle, X } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs';
import moment from 'moment/moment';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { useRouter } from 'next/navigation';

const AddNewInterview = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [interviewData, setInterviewData] = useState({
        job_position: "",
        job_description: "",
        job_experience: ""
    });
    const [loading, setLoading] = useState(false);
    const [jsonResponse, setJsonResponse] = useState([]);
    const { user } = useUser();
    const router = useRouter();

    const onsubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        const input_prompt = `Job position ${interviewData.job_position}. Job description ${interviewData.job_description}, Years of experience ${interviewData.job_experience}. Generate 5 questions with answers for interview in JSON format.`;

        try {
            const result = await chatSession.sendMessage(input_prompt);
            const responseText = await result.response.text();

            const match = responseText.match(/```json([\s\S]*?)```/);
            if (!match || !match[1]) throw new Error("Failed to extract JSON from the response.");

            const mockResult = JSON.parse(match[1].trim());
            setJsonResponse(mockResult);

            const resp = await db.insert(MockInterview).values({
                mockId: uuidv4(),
                jsonMockResp: JSON.stringify(mockResult),
                jobPosition: interviewData.job_position,
                jobDesc: interviewData.job_description,
                jobExperience: interviewData.job_experience,
                createdBy: user?.primaryEmailAddress?.emailAddress || 'Unknown',
                createdAt: moment().format("YYYY-MM-DD HH:mm:ss")
            }).returning({ mockId: MockInterview.mockId });

            if (resp) {
                setOpenDialog(false);
                setLoading(false);
                router.push('/dashboard/interview/' + resp[0]?.mockId);
            }

        } catch (error) {
            console.error("Error: ", error.message);
        }
        setLoading(false);
    }

    return (
        <>
            <div
                className='border p-6 md:p-10 rounded-lg shadow-md bg-secondary hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out cursor-pointer'
                onClick={() => setOpenDialog(true)}
            >
                <h1 className='text-center text-lg'>+ Add New</h1>
            </div>

            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent className='w-full max-w-3xl sm:rounded-xl px-4 py-6'>
                    <DialogHeader>
                        <div className='flex items-center justify-between'>
                            <DialogTitle className='text-xl sm:text-2xl font-bold'>
                                Tell us more about your job interview
                            </DialogTitle>
                            <button
                                onClick={() => setOpenDialog(false)}
                                className='text-gray-500 hover:text-gray-800 transition'
                                aria-label="Close dialog"
                            >
                                <X className='w-5 h-5' />
                            </button>
                        </div>
                        <DialogDescription>
                            <form onSubmit={onsubmit} className='mt-6 space-y-5'>
                                <div>
                                    <Label htmlFor='job_position' className='font-bold mb-2 block'>Job Role/Job Position</Label>
                                    <Input
                                        id='job_position'
                                        className='text-black'
                                        placeholder='Ex. Android Developer'
                                        onChange={(e) => setInterviewData({ ...interviewData, job_position: e.target.value })}
                                        required
                                    />
                                </div>

                                <div>
                                    <Label htmlFor='job_description' className='font-bold mb-2 block'>Job Description/Tech Stack (in short)</Label>
                                    <Textarea
                                        id='job_description'
                                        className='text-black'
                                        placeholder='Ex. React, Vue, MySql'
                                        onChange={(e) => setInterviewData({ ...interviewData, job_description: e.target.value })}
                                        required
                                    />
                                </div>

                                <div>
                                    <Label htmlFor='job_experience' className='font-bold mb-2 block'>Years of Experience</Label>
                                    <Input
                                        id='job_experience'
                                        className='text-black'
                                        type='number'
                                        placeholder='Ex. 4'
                                        min='0'
                                        max='100'
                                        onChange={(e) => setInterviewData({ ...interviewData, job_experience: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className='flex flex-col sm:flex-row justify-end sm:space-x-3 space-y-2 sm:space-y-0 pt-4'>
                                    <Button variant="ghost" type="button" onClick={() => setOpenDialog(false)}>Cancel</Button>
                                    <Button type="submit" disabled={loading} className='flex items-center gap-2'>
                                        {loading ? (
                                            <>
                                                <LoaderCircle className='animate-spin h-4 w-4' />
                                                Generating...
                                            </>
                                        ) : (
                                            "Start Interview"
                                        )}
                                    </Button>
                                </div>
                            </form>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default AddNewInterview;
