'use client';
import { db } from '@/utils/db';
import { UserAnswer } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Spinner from '@/components/ui/Spinner';


const Feedback = ({params}) => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [totalRating, setTotalRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    GetFeedback();
  },[])


  const GetFeedback = async () => {
    setLoading(true);
    try{
      const result = await db.select()
        .from(UserAnswer)
        .where(eq(UserAnswer.mockIdRef, params.interviewId))
        .orderBy(UserAnswer.id);
    
    
      if (result.length > 0) {
        const total = result.reduce((acc, item) => acc + parseInt(item.rating), 0);
        const avgOutOf5 = total / result.length;
        const overallOutOf10 = Math.round(avgOutOf5 * 2); 
        setTotalRating(overallOutOf10);
      }
    
      setFeedbackList(result);
    }catch(error){
      // console.log(error);
    }
    setLoading(false);
  };
  



  return (
    <>
      {
        (!loading && feedbackList) ? (
          <div className=' p-10'>
            {
              feedbackList?.length == 0 ? 
              <h2 className=' text-red-500 font-bold text-3xl mt-5'>No Feedback Record Found :(</h2> :
              <>
                <h2 className=' text-3xl font-bold text-green-500'>Congratulations!</h2>
                <h2 className=' font-bold text-2xl'>Here is your iterview feedback</h2>
                <h2 className=' text-violet-800 text-lg mt-3'>Your overall interview rating: <strong>{totalRating}/10</strong></h2>
                <p className=' text-md mb-10 font-bold text-gray-600 '>
                  {totalRating >= 8 ? "Excellent!" : totalRating >= 5 ? "Good effort, room to improve." : "Needs Improvement"}
                </p>


                <h2 className=' text-sm text-gray-500'>Find below interview question with correct answer, Your answer and feedback for improvement</h2>

                {
                  feedbackList&&feedbackList.map((item,index) => (
                    <Collapsible key={index} className=' mt-7'>
                      <CollapsibleTrigger className=' p-2 bg-secondary rounded-lg flex justify-between w-full gap-7 my-4  text-left'>{item.question} <ChevronsUpDown className=' h-5 w-5' /></CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className=' flex flex-col gap-2'>
                          <h2 className=' text-red-500 p-2 border rounded-lg'><strong>Rating: </strong>{item.rating}</h2>
                          <h2 className=' p-2 border rounded-lg bg-red-100 text-red-900 text-sm'><strong>Your Answer: </strong>{item.userAns}</h2>
                          <h2 className=' p-2 border rounded-lg bg-green-100 text-green-900 text-sm'><strong>Correct Answer: </strong>{item.correctAns}</h2>
                          <h2 className=' p-2 border rounded-lg bg-violet-100 text-violet-900 text-sm'><strong>Feedback: </strong>{item.feedback}</h2>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  ))
                }
              </>
            }

            <Button className='mt-5' onClick={()=>router.replace('/dashboard')}>Go Home</Button>
          </div>
        ):
        <Spinner />
      }
    </>
  )
}

export default Feedback;
