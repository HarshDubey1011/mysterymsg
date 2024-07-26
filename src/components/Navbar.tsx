"use client";

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import {User} from 'next-auth';
import { Button } from '@react-email/components';

const Navbar = () => {
  
  const {data:session} = useSession();
  const user: User = session?.user as User;


  return (
    <nav className="p-4 md:p-6 shadow-md bg-gray-900 text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <a href="#" className="text-xl font-bold mb-4 md:mb-0">Mystry Message</a>
            {
                session ? (
                <>
                 <span  className="mr-4">
                    Welcome, {user.username || user.email}
                    <Button className="w-full md:w-auto bg-slate-100 text-black" onClick={() => signOut()}>Logout</Button>
                 </span>
                </>
                ) : (
                    <Link href='/sign-in'>
                        <Button  className="w-full md:w-auto bg-slate-100 text-black">
                            Login
                        </Button>
                    </Link>
                )
            }
        </div>
    </nav>
  )
}

export default Navbar