import Navbar from "@/app/dashboard/_components/Navbar";
import Image from "next/image";
import Link from "next/link";
import home from "../public/home.svg";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center py-12 md:py-24 gap-12 md:gap-24">
          <div className="w-full md:w-3/5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ace Your Next Interview with{" "}
              <span className="text-violet-800">NextMock AI</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-xl">
              Practice with our AI-powered mock interviews tailored to your industry, role, and experience level. Receive real-time feedback and improve your confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/upgrade" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-violet-800 hover:bg-violet-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  Start Practicing
                </button>
              </Link>
              <Link href="/working" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-white hover:bg-gray-100 text-violet-800 font-medium py-3 px-6 rounded-lg border border-violet-800 transition-colors">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-2/5 mt-12 md:mt-0 flex justify-center">
            <div className="relative w-64 h-56 sm:w-80 sm:h-72 md:w-full md:h-80">
              <Image
                src={home}
                alt="Mock Interview Illustration"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-12 md:py-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Features that Set Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-violet-800">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-powered Interviews</h3>
              <p className="text-gray-600">Realistic interview scenarios with our advanced AI that adapts to your responses in real-time.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-violet-800">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Feedback</h3>
              <p className="text-gray-600">Get detailed feedback on your answers, communication skills, and areas for improvement.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-violet-800">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
              <p className="text-gray-600">Monitor your improvement over time with comprehensive analytics and performance reports.</p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <section className="py-12 md:py-24 bg-white rounded-xl my-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
            {[
              {
                feedback:
                  "NextMock AI helped me prepare for my tech interview at a top company. The feedback was incredibly detailed and helped me identify weak points in my responses.",
                name: "Sahil Jain, Software Engineer",
              },
              {
                feedback:
                  "I was nervous about my upcoming interviews, but after practicing with NextMock AI, I felt much more confident and prepared. Highly recommend!",
                name: "Michael Smith, Product Manager",
              },
            ].map((testimony, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-xl">
                <p className="italic text-gray-600 mb-4">{testimony.feedback}</p>
                <p className="font-semibold">{testimony.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 md:py-24 px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Interview Skills?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of job seekers who have improved their interview performance and landed their dream jobs.
          </p>
          <Link href="/dashboard">
            <button className="bg-violet-800 hover:bg-violet-700 text-white font-medium py-3 px-8 rounded-lg text-base sm:text-lg transition-colors">
              Get Started Free
            </button>
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid text-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                heading: "NextMock AI",
                links: ["Revolutionizing interview preparation with AI technology."],
              },
              {
                heading: "Product",
                links: ["Features", "Pricing", "Working"],
              },
              {
                heading: "Resources",
                links: ["Blog", "Interview Guides", "FAQ"],
              },
              {
                heading: "Company",
                links: ["About Us", "Contact", "Careers"],
              },
            ].map((section, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-semibold mb-4">{section.heading}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      {idx === 0 ? (
                        <p className="text-gray-400">{link}</p>
                      ) : (
                        <Link href="/working" className="text-gray-400 hover:text-white">
                          {link}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} NextMock AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
