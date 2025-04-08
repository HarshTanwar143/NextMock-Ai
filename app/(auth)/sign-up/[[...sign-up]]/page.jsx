import { SignUp } from '@clerk/nextjs';
import signup from '../../../../assets/signup.svg';
import Image from 'next/image';

export default function Page() {
   return (
      <div className="min-h-screen flex flex-col md:flex-row bg-[#F7F0ED] md:bg-white">
  
        {/* Left Section - Image (Hidden on small screens) */}
        <div className="hidden md:flex w-1/2 bg-[#F7F0ED] items-center justify-center p-6">
          <Image 
            src={signup} 
            alt="Sign In Illustration"
            className="w-full max-w-md lg:max-w-lg"
            priority
          />
        </div>
  
        {/* Right Section - SignIn Form (Full width and centered on mobile) */}
        <div className="w-full md:w-1/2 flex items-center justify-center min-h-screen p-4 shadow-2xl shadow-violet-700">
          <SignUp 
            appearance={{ 
              variables: { colorPrimary: '#6b21a8' } 
            }} 
          />
        </div>
  
      </div>
    );
}
