"use client";
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { Lightbulb, WebcamIcon } from 'lucide-react';
import ReactWebcam from 'react-webcam';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Spinner from '@/components/ui/Spinner';

const Interview = ({ params }) => {
  const [interviewData, setInterviewData] = useState();
  const [webCamEnabled, setWebCamEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const webcamRef = useRef(null);

  useEffect(() => {
    GetInterviewDetails();
    checkPermissionsAndEnable();
  }, []);

  const GetInterviewDetails = async () => {
    setLoading(true);
    try {
      const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.mockId, params.interviewId));
      setInterviewData(result[0]);
    } catch (error) {
      // console.log('error : ', error);
      setInterviewData(null);
    }
    setLoading(false);
  };

  const checkPermissionsAndEnable = async () => {
    try {
      const camPerm = await navigator.permissions.query({ name: 'camera' });
      const micPerm = await navigator.permissions.query({ name: 'microphone' });

      if (camPerm.state === 'granted' && micPerm.state === 'granted') {
        setWebCamEnabled(true);
        localStorage.setItem("mediaPermissions", "enabled");
      }

      camPerm.onchange = () => {
        if (camPerm.state !== 'granted') disableWebcam();
      };
      micPerm.onchange = () => {
        if (micPerm.state !== 'granted') disableWebcam();
      };
    } catch (err) {
      console.error("Permissions API error:", err);
    }
  };

  const enableWebcam = () => {
    setWebCamEnabled(true);
    localStorage.setItem("mediaPermissions", "enabled");
  };

  const disableWebcam = () => {
    if (webcamRef.current && webcamRef.current.stream) {
      webcamRef.current.stream.getTracks().forEach((track) => track.stop());
    }
    setWebCamEnabled(false);
    localStorage.setItem("mediaPermissions", "disabled");
  };

  return (
    <>
      {!loading && interviewData ? (
        <div className='my-10 flex flex-col items-center justify-center'>
          <h2 className='font-bold text-2xl'>Let`s Get Started</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div className='flex flex-col my-5 gap-5 '>
              <div className='flex flex-col p-5 rounded-lg border gap-5'>
                <h2 className='capitalize text-lg'>
                  <strong>Job Role/Job Position: </strong>{interviewData?.jobPosition}
                </h2>
                <h2 className='capitalize text-lg'>
                  <strong>Job Description/Tech stack: </strong>{interviewData?.jobDesc}
                </h2>
                <h2 className='capitalize text-lg'>
                  <strong>Years of Experience: </strong>{interviewData?.jobExperience}
                </h2>
              </div>

              <div className='p-5 border rounded-lg border-yellow-300 bg-yellow-100'>
                <h2 className='flex gap-2 items-center text-yellow-500'>
                  <Lightbulb /> <strong>Information</strong>
                </h2>
                <h2 className='mt-3 text-yellow-500'>{process.env.NEXT_PUBLIC_INFORMATION}</h2>
              </div>
            </div>

            <div className='flex flex-col items-center justify-center'>
              {webCamEnabled ? (
                <>
                  <ReactWebcam
                    ref={webcamRef}
                    audio={true}
                    videoConstraints={{
                      width: 300,
                      height: 300,
                      facingMode: "user"
                    }}
                    mirrored={true}
                    style={{ height: 300, width: 300 }}
                  />
                  <Button
                    variant="destructive"
                    className='w-full mt-3'
                    onClick={disableWebcam}
                  >
                    Disable Webcam and Microphone
                  </Button>
                </>
              ) : (
                <>
                  <WebcamIcon className='h-72 w-full my-7 p-20 bg-secondary rounded-lg border' />
                  <Button
                    variant="secondary"
                    className='w-full hover:bg-gray-200 bg-gray-300'
                    onClick={enableWebcam}
                  >
                    Enable Webcam and Microphone
                  </Button>
                </>
              )}

              <div className='mt-3 w-full bg-green-300'>
                <Link href={`/dashboard/interview/${params?.interviewId}/start`}>
                  <Button className='w-full'>Start</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Interview;
