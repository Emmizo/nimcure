// components/Header.tsx
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname?.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src="/assets/logo-admin.png" alt="Logo" width={32} height={32} className="text-green-600" />
          </Link>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <Link 
            href="/" 
            className={`${isActive('/') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400 hover:text-gray-600'} px-3 py-2 text-sm font-medium`}
          >
            <span className="flex items-center">
              <svg className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Overview
            </span>
          </Link>
          
          <Link 
            href="/deliveries" 
            className={`${isActive('/deliveries') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400 hover:text-gray-600'} px-3 py-2 text-sm font-medium`}
          >
            <span className="flex items-center">
              <svg className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H11a1 1 0 001-1v-5h2.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1V8a1 1 0 00-.293-.707l-2-2A1 1 0 0017 5h-5V4a1 1 0 00-1-1H3z" />
              </svg>
              Deliveries
            </span>
          </Link>
          
          <Link 
            href="/patients" 
            className={`${isActive('/patients') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400 hover:text-gray-600'} px-3 py-2 text-sm font-medium`}
          >
            <span className="flex items-center">
              <svg className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              Patients
            </span>
          </Link>
          
          <Link 
            href="/dispatch" 
            className={`${isActive('/dispatch') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400 hover:text-gray-600'} px-3 py-2 text-sm font-medium`}
          >
            <span className="flex items-center">
              <svg className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Dispatch Riders
            </span>
          </Link>
          
          <Link 
            href="/admin" 
            className={`${isActive('/admin') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400 hover:text-gray-600'} px-3 py-2 text-sm font-medium`}
          >
            <span className="flex items-center">
              <svg className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              Admin
            </span>
          </Link>
        </nav>
        
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Image 
                src="/assets/profile.png" 
                alt="Profile" 
                width={32} 
                height={32} 
                className="rounded-full" 
              />
            </div>
            <div className="hidden md:block">
              <span className="text-sm font-medium">Emmanuel Adigwe</span>
              <svg className="h-4 w-4 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;