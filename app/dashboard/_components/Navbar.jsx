"use client";

import React from 'react';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import Image from 'next/image';
import logo from '../../../public/logo.svg';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from '@/components/ui/drawer'; 

const Navbar = () => {
  const path = usePathname();

  return (
    <nav className="flex justify-between items-center px-4 py-2 bg-secondary shadow-lg">
      {/* Logo */}
      <Link href={'/'} className='cursor-pointer'>
        <Image src={logo} alt="logo" />
      </Link>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex space-x-4'>
        <Link href={'/dashboard'}>
          <li className={`hover:text-violet-800 hover:bg-gray-200 hover:rounded-sm p-1 cursor-pointer hover:shadow-2xl duration-200 ${path === '/dashboard' && 'text-violet-800 hover:bg-secondary rounded-none shadow-none font-bold'}`}>Dashboard</li>
        </Link>
        <Link href={'/upgrade'}>
          <li className={`hover:text-violet-800 hover:bg-gray-200 hover:rounded-sm p-1 cursor-pointer hover:shadow-2xl duration-200 ${path === '/dashboard/upgrade' && 'text-violet-800 hover:bg-secondary rounded-none shadow-none'}`}>Upgrade</li>
        </Link>
        <Link href={'/working'}>
          <li className={`hover:text-violet-800 hover:bg-gray-200 hover:rounded-sm p-1 cursor-pointer hover:shadow-2xl duration-200 ${path === '/dashboard/working' && 'text-violet-800 hover:bg-secondary rounded-none shadow-none'}`}>How it Work?</li>
        </Link>
      </ul>

      {/* Auth Buttons / UserButton */}
      <div className='space-x-4 hidden md:flex'>
        <SignedOut>
          <SignInButton>
            <button className='bg-violet-800 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-lg duration-200 cursor-pointer'>
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className='bg-white text-black hover:bg-gray-200 font-bold py-2 px-4 rounded-lg duration-200 cursor-pointer'>
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <div className='py-2 px-4'>
            <UserButton />
          </div>
        </SignedIn>
      </div>

{/* Mobile Drawer (only visible on small screens) */}
<div className="md:hidden">
  <Drawer direction="right">
    <DrawerTrigger asChild>
      <button className="p-2 rounded-md hover:bg-gray-100 shadow-sm transition-all">
        <Menu className="w-6 h-6 text-violet-800" />
      </button>
    </DrawerTrigger>

    <DrawerContent className="p-6 space-y-6 bg-white shadow-lg rounded-tl-xl rounded-bl-xl">
      {/* Navigation Links */}
      <ul className="space-y-4 text-base font-medium">
        <li>
          <Link
            href="/dashboard"
            className={`block px-4 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md hover:bg-gray-100 ${
              path === '/dashboard'
                ? 'bg-gray-100 text-violet-800 font-bold shadow-md'
                : 'text-gray-800'
            }`}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/upgrade"
            className={`block px-4 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md hover:bg-gray-100 ${
              path === '/upgrade'
                ? 'bg-gray-100 text-violet-800 font-bold shadow-md'
                : 'text-gray-800'
            }`}
          >
            Upgrade
          </Link>
        </li>
        <li>
          <Link
            href="/working"
            className={`block px-4 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md hover:bg-gray-100 ${
              path === '/working'
                ? 'bg-gray-100 text-violet-800 font-bold shadow-md'
                : 'text-gray-800'
            }`}
          >
            How it Work?
          </Link>
        </li>
      </ul>

      {/* Auth Buttons */}
      <div className="pt-4 space-y-3">
        <SignedOut>
          <SignInButton>
            <button className="w-full bg-violet-800 hover:bg-violet-700 text-white font-semibold py-2 px-4 rounded-lg transition-all shadow-md hover:shadow-lg">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="w-full bg-white text-black hover:bg-gray-200 font-semibold py-2 px-4 rounded-lg transition-all shadow border hover:shadow-lg">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <div className="flex justify-start">
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>
      </div>
    </DrawerContent>
  </Drawer>
</div>



    </nav>
  );
};

export default Navbar;
