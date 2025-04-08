"use client";

import { db } from '@/utils/db';
import { MockInterview, UserAnswer } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import InterviewItemCard from './InterviewItemCard';
import Spinner from '@/components/ui/Spinner';

const InterviewList = () => {
  const { user } = useUser();
  const [interviewList, setInterviewList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    user && GetInterviewList();
  }, [user]);

  const GetInterviewList = async () => {
    setLoading(true);
    try {
      const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.createdBy, user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(MockInterview.id));
      setInterviewList(result);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleDelete = async (interview) => {
    try {
      await db.delete(UserAnswer).where(eq(UserAnswer.mockIdRef, interview.mockId));
      await db.delete(MockInterview).where(eq(MockInterview.id, interview.id));
      setInterviewList(prev => prev.filter(item => item.id !== interview.id));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  return (
    <>
      {!loading && interviewList ? (
        <div className="px-4 sm:px-6 lg:px-8 py-6 w-full">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center sm:text-left">
            Previous Mock Interviews
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {interviewList.map((interview, index) => (
              <InterviewItemCard key={index} interview={interview} onDelete={handleDelete} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center py-10">
          <Spinner />
        </div>
      )}
    </>
  );
};

export default InterviewList;
