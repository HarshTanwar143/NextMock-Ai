"use client";

import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const InterviewItemCard = ({ interview, onDelete }) => {
  const router = useRouter();

  const onStart = () => {
    router.push(`/dashboard/interview/${interview?.mockId}`);
  };

  const onFeedback = () => {
    router.push(`/dashboard/interview/${interview?.mockId}/feedback`);
  };

  return (
    <div className="border shadow-sm rounded-lg p-4 sm:p-5 flex flex-col justify-between h-full">
      {/* Header with title and delete button */}
      <div className="flex justify-between items-start gap-2">
        <h2 className="font-semibold text-base sm:text-lg text-violet-800 leading-tight">
          {interview?.jobPosition}
        </h2>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <X className="cursor-pointer size-5 text-violet-800" />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the interview and your answers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => onDelete(interview)}>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      {/* Experience and creation info */}
      <div className="mt-2">
        <p className="text-sm text-gray-600">
          {interview?.jobExperience} Years of Experience
        </p>
        <p className="text-xs text-gray-400 mt-1 break-words">
          Created At: {interview?.createdAt}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-stretch gap-3 mt-5">
        <Button
          variant="outline"
          size="sm"
          onClick={onFeedback}
          className="w-full sm:w-auto"
        >
          Feedback
        </Button>
        <Button
          size="sm"
          onClick={onStart}
          className="w-full sm:w-auto"
        >
          Start Interview
        </Button>
      </div>
    </div>
  );
};

export default InterviewItemCard;
