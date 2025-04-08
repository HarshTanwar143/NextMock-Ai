import React from 'react'
import { Lightbulb, Volume2 } from 'lucide-react';

const QuestionsSection = ({questionData, activeIndex, setActiveIndex}) => {
    const textToSpeech = (text) => {
        if('speechSynthesis' in window){
            const speech = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(speech);
        }else{
            alert('Sorry! Your browser does not support text-to-speech.');
        }
    }


  return questionData && (
    <div className=' p-5 border rounded-lg my-10 shadow-2xl'>
        <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
                questionData && questionData.map((question, index) => {
                    return (
                        <h2 className={` p-2 bg-secondary rounded-full text-xs md:text-sm text-center cursor-pointer ${ activeIndex === index ? 'bg-violet-800 text-white' : ' text-black'}`} key={index} onClick={()=>setActiveIndex(index)} >
                            Question #{index + 1}
                        </h2>
                    )
                })
            }
        </div>

        <h2 className=' my-5 text-md md:text-lg'>
            {questionData[activeIndex]?.question}
        </h2>

        <Volume2 onClick={()=>textToSpeech(questionData[activeIndex]?.question)} className=' cursor-pointer hover:text-violet-900' />

        <div className='border rounded-lg p-5 bg-blue-100 mt-20'>
            <h2 className=' flex gap-2 items-center text-violet-800'>
                <Lightbulb/>
                <strong>Note:</strong>
            </h2>
            <h2 className=' text-sm text-violet-900 my-2'>{process.env.NEXT_PUBLIC_QUESTION_NOTE}</h2>
        </div>
    </div>
  )
}

export default QuestionsSection
