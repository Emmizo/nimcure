// app/page.tsx
"use client"; // Mark this as a Client Component
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import from next/navigation

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter(); // Initialize the router

 /*  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission
    router.push('./pages/dashboard'); 
  }; */

  return (
    <div className="flex min-h-screen overflow-y-auto">
      {/* Left side - Login Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 md:px-16 lg:px-24">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-12 top-0 items-center">
            <Image 
              src="/assets/logo.png" 
              alt="Logo" 
              width={50} 
              height={50} 
              className="mx-auto"
            />
          </div>
          
          {/* Sign in text */}
          <h1 className="text-2xl font-medium text-gray-800 mb-8">Sign in to continue</h1>
          
          {/* Login Form */}
          <form>
            {/* Email field */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-600 p-3  focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* Password field */}
            <div className="mb-6 relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full border border-gray-600 p-3  focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500 text-sm font-medium"
              >
                {showPassword ? "HIDE" : "SHOW"}
              </button>
            </div>
            
            {/* Remember me and Forgot Password */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="w-4 h-4 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                  Remember Me
                </label>
              </div>
              <Link href="/forgot-password" className="text-sm text-blue-600 font-medium">
                Forgot Password?
              </Link>
            </div>
            
            {/* Login button */}
            <button
  type="button" // Change type to "button" to prevent form submission
  onClick={() => router.push('patients')} // Use absolute path
  className="w-full bg-blue-600 text-white py-3 rounded font-medium text-lg hover:bg-blue-700 transition-colors"
>
  Login
</button>
          </form>
          <div className='mt-45'><Image 
              src="/assets/powered.png" 
              alt="Powered" 
              width={200} 
              height={100} 
              className="mx-auto"
            /></div>
        </div>
      </div>
      
      {/* Right side - Illustration */}
      <div className="hidden md:block md:w-1/2 bg-blue-600 relative overflow-hidden">
        {/* City skyline illustration */}
        <div className="absolute top-0 left-0 right-0">
          <Image 
            src="/assets/bg.png" 
            alt="City Skyline"
            width={800}
            height={400}
            className="w-full"
          />
        </div>
        
        {/* Green clouds/shapes */}
        <div className="absolute top-10 w-[90vw] z-3 left-10">
          <Image 
            src="/assets/cloud.png" 
            alt="Shape"
            width={300}
            height={200}
            className="w-150"
          />
        </div>

        {/* Fixed bottom-right shape */}
        <div className="fixed bottom-0 right-0 z-1 w-[54vw] h-[85vh]">
          <Image 
            src="/assets/Group.png" 
            alt="Shape"
            width={200}
            height={200}
            className="w-full h-full"
          />
        </div>
        
        {/* Delivery person image */}
        <div className="absolute bottom-50 right-1/4 z-2">
          <Image 
            src="/assets/driver.png" 
            alt="Delivery Person"
            width={300}
            height={300}
            className="w-96"
          />
        </div>
        
        {/* Navigation dots and text */}
        <div className="absolute bottom-0 z-4 left-10 w-[90vw] h-35">
          <div className="absolute">
            <p className="text-[28px] font-semibold text-white text-justify bg-transparent rounded-lg mx-auto">
              Serving Patients During a Pandemic<br />
              <span className="text-base font-normal text-white">
                Delivering essential medication to NIMR patients with adherence<br /> to quality of service, care and confidentiality.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}