import React from 'react';
import Navbar from '../dashboard/_components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import first from '../../public/first.jpg';
import second from '../../public/second.jpg';
import third from '../../public/third.jpg';
import four from '../../public/four.jpg';
import five from '../../public/five.png'

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-violet-100">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-violet-800 mb-4">
            How NextMock AI Works
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform makes interview preparation simple, effective, and tailored to your specific needs. Follow these easy steps to get started.
          </p>
        </div>

        {/* Step by Step Process */}
        <div className="space-y-24 mb-16">
          {/* Step 1 */}
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 lg:pr-12 order-1 lg:order-1">
              <div className="flex items-center mb-4">
                <div className="bg-violet-800 text-white text-xl font-bold h-10 w-10 rounded-full flex items-center justify-center mr-4">
                  1
                </div>
                <h2 className="text-2xl font-bold text-violet-800">Create an Account</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Start by signing up for an account on NextMock AI. The registration process is quick and straightforward. If you already have an account, simply log in to access your dashboard.
              </p>
              <Link href="/dashboard">
                <button className="bg-violet-800 hover:bg-violet-900 cursor-pointer text-white font-medium py-2 px-6 rounded-lg transition-colors">
                  Sign Up Now
                </button>
              </Link>
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 order-2 lg:order-2">
              <div className="bg-white rounded-xl shadow-md">
                <div className="aspect-w-16 aspect-h-9 relative h-[25rem]">
                  <Image
                    src={first}
                    alt="Sign Up Screen"
                    fill
                    className="w-full h-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 lg:pl-12 order-1 lg:order-2">
              <div className="flex items-center mb-4">
                <div className="bg-violet-800 text-white text-xl font-bold h-10 w-10 rounded-full flex items-center justify-center mr-4">
                  2
                </div>
                <h2 className="text-2xl font-bold text-violet-800">Access Your Dashboard</h2>
              </div>
              <p className="text-gray-600 mb-6">
                After logging in, you`ll be directed to your personalized dashboard. Here you`ll find options to create new interview sessions and review your previous interviews. Your interview history helps you track your progress over time.
              </p>
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 order-2 lg:order-1">
              <div className="bg-white rounded-xl shadow-md">
                <div className="aspect-w-16 aspect-h-9 relative h-[25rem]">
                  <Image
                    src={second}
                    alt="Dashboard Screen"
                    fill
                    className="w-full h-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 lg:pr-12 order-1 lg:order-1">
              <div className="flex items-center mb-4">
                <div className="bg-violet-800 text-white text-xl font-bold h-10 w-10 rounded-full flex items-center justify-center mr-4">
                  3
                </div>
                <h2 className="text-2xl font-bold text-violet-800">Create a New Interview</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Click on &quot;Create Interview&quot; to start a new session. You`ll be prompted to provide important details that help our AI tailor the interview to your needs:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-violet-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Job Position: The specific role you`re applying for</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-violet-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Job Description: Copy and paste the actual job listing for best results</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-violet-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Years of Experience: Your level of experience in the field</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 order-2 lg:order-2">
              <div className="bg-white rounded-xl shadow-md">
                <div className="aspect-w-16 aspect-h-9 relative h-[25rem]">
                  <Image
                    src={third}
                    alt="Create Interview Screen"
                    fill
                    className="w-full h-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 lg:pl-12 order-1 lg:order-2">
              <div className="flex items-center mb-4">
                <div className="bg-violet-800 text-white text-xl font-bold h-10 w-10 rounded-full flex items-center justify-center mr-4">
                  4
                </div>
                <h2 className="text-2xl font-bold text-violet-800">Complete the Interview</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Once you`ve provided the necessary information, you`ll be directed to the interview page. Our AI interviewer will ask you relevant questions based on the job description and your experience level. You`ll respond to each question just as you would in a real interview.
              </p>
              <p className="text-gray-600">
                The interview typically consists of a mix of technical questions, behavioral questions, and scenario-based problems specifically tailored to the position you`re applying for.
              </p>
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 order-2 lg:order-1">
              <div className="bg-white rounded-xl shadow-md">
                <div className="aspect-w-16 aspect-h-9 relative h-[25rem]">
                  <Image
                    src={four}
                    alt="Interview Process Screen"
                    fill
                    className="w-full h-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 lg:pr-12 order-1 lg:order-1">
              <div className="flex items-center mb-4">
                <div className="bg-violet-800 text-white text-xl font-bold h-10 w-10 rounded-full flex items-center justify-center mr-4">
                  5
                </div>
                <h2 className="text-2xl font-bold text-violet-800">Receive Detailed Feedback</h2>
              </div>
              <p className="text-gray-600 mb-6">
                After completing the interview, our AI will analyze your responses and provide comprehensive feedback, including:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-violet-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Overall performance rating</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-violet-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Question-by-question analysis</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-violet-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Comparison between your answers and ideal responses</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-violet-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Specific areas for improvement</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 order-2 lg:order-2">
              <div className="bg-white rounded-xl shadow-md">
                <div className="aspect-w-16 aspect-h-9 relative h-[25rem]">
                  <Image
                    src={five}
                    alt="Feedback Screen"
                    fill
                    className="w-full h-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-xl p-8 shadow-md mb-16">
          <h2 className="text-3xl font-bold text-center text-violet-800 mb-12">
            Why Use NextMock AI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-violet-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-violet-800 mb-2">Practice Makes Perfect</h3>
              <p className="text-gray-600">
                Take unlimited practice interviews to build your confidence and refine your answers.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-violet-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-violet-800 mb-2">Real-time Feedback</h3>
              <p className="text-gray-600">
                Get immediate insights on your performance without waiting for human feedback.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-violet-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-violet-800 mb-2">Save Time</h3>
              <p className="text-gray-600">
                Practice on your own schedule without coordinating with other people.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-violet-800 text-white rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Ace Your Next Interview?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Start practicing today and gain the confidence and skills you need to succeed in your job interviews.
          </p>
          <Link href="/signup">
            <button className="bg-white text-violet-800 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg text-lg transition-colors">
              Get Started Now
            </button>
          </Link>
        </div>
      </main>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center text-violet-800 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-violet-800 mb-2">How long does each interview take?</h3>
            <p className="text-gray-600">
              Interviews typically last between 20-30 minutes, depending on the complexity of the role and your response times.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-violet-800 mb-2">Can I practice for technical interviews?</h3>
            <p className="text-gray-600">
              Yes! Our AI is trained to conduct technical interviews across various fields including software development, data science, finance, and more.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-violet-800 mb-2">How accurate is the AI feedback?</h3>
            <p className="text-gray-600">
              Our AI provides feedback based on industry standards and best practices. While not perfect, it`s designed to identify strengths and weaknesses in your responses accurately.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-violet-800 mb-2">Can I access my previous interviews?</h3>
            <p className="text-gray-600">
              Yes, all your previous interviews are stored in your dashboard, allowing you to review your progress and feedback anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} NextMock AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HowItWorksPage;