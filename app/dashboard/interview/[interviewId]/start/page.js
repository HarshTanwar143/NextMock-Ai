"use client";
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import QuestionsSection from './_components/QuestionsSection';
import RecordAnswerSection from './_components/RecordAnswerSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Spinner from '@/components/ui/Spinner';

const InterviewQuestions = ({ params }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [interviewData, setInterviewData] = useState();
  const [questionData, setQuestionData] = useState();
  const [loading, setLoading] = useState(false);
  const [mediaEnabled, setMediaEnabled] = useState(false);

  useEffect(() => {
    getMockData();

    const savedPermission = localStorage.getItem("mediaPermissions");
    if (savedPermission === "enabled") {
      setMediaEnabled(true);
    }
  }, []);

  const getMockData = async () => {
    setLoading(true);
    try {
      const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.mockId, params.interviewId));

      setInterviewData(result[0]);
      const questions = JSON.parse(result[0].jsonMockResp);
      setQuestionData(questions);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <>
      {
        (!loading && interviewData && questionData) ? (
          <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
              {/* Questions */}
              <QuestionsSection
                questionData={questionData}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />

              {/* Video/Audio Recording */}
              <RecordAnswerSection
                questionData={questionData}
                activeIndex={activeIndex}
                interviewData={interviewData}
                mediaEnabled={mediaEnabled}
              />
            </div>

            <div className='flex justify-end gap-4 mb-10'>
              {activeIndex > 0 && (
                <Button onClick={() => setActiveIndex(activeIndex - 1)}>
                  Previous Question
                </Button>
              )}
              {(activeIndex !== questionData?.length - 1) && (
                <Button onClick={() => setActiveIndex(activeIndex + 1)}>
                  Next Question
                </Button>
              )}
              {(activeIndex === questionData?.length - 1) && (
                <Link href={`/dashboard/interview/${interviewData?.mockId}/feedback`}>
                  <Button>End Interview</Button>
                </Link>
              )}
            </div>
          </div>
        ) : (
          <Spinner />
        )
      }
    </>
  );
};

export default InterviewQuestions;
