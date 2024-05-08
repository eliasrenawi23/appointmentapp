"use client"

import Image from 'next/image'
import Logo from '../public/renawi_logo.png'
import React, { useState } from 'react'
import Link from 'next/link'
import {
    AiOutlineMenu,
    AiOutlineClose,
    AiOutlineInstagram,
    AiOutlineFacebook,
    AiOutlineTikTok
} from 'react-icons/ai'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const handleNave = () => {
        setMenuOpen(!menuOpen);

    }
    return (
        <nav className='navbar fixed w-full h-24 shadow-xl bg-white'>
            <div className='flex justify-between items-center h-full w-ful px-4 2xl:px-16'>
                <Link href='/'>
                    <Image src={Logo}
                        alt='Logo'
                        width='75'
                        height='75'
                        className='cursor-pointer rounded-full' />
                </Link>

                <div className='hidden sm:flex'>
                    <ul className='hidden sm:flex'>
                        <Link href='/about'>
                            <li className='ml-10 uppercase hover:border-b text-xl'>Why Us</li>
                        </Link>
                        <Link href='/contact'>
                            <li className='ml-10 uppercase hover:border-b text-xl'>Contact Us</li>
                        </Link>
                        <Link href='/services'>
                            <li className='ml-10 uppercase hover:border-b text-xl'>Our Services</li>
                        </Link>
                        <Link href='/blog'>
                            <li className='ml-10 uppercase hover:border-b text-xl'>Blog</li>
                        </Link>
                    </ul>
                </div>
                <div onClick={handleNave} className='sm:hidden cursor-pointer pl-24'>
                    <AiOutlineMenu size={25} />
                </div>
            </div>

            <div className={menuOpen ?
                'fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>

                <div className='flex w-full items-center justify-end'>
                    <div onClick={handleNave} className='cursor-pointer pl-24'>
                        <AiOutlineClose size={25} />
                    </div>
                </div>
                <div className='flex-col py-4'>
                    <ul>
                        <Link href='/about'>
                            <li
                                onClick={() => setMenuOpen(false)}
                                className='py-4 hover:border-b cursor-pointer'>Why Us</li>
                        </Link>
                        <Link href='/contact'>
                            <li
                                onClick={() => setMenuOpen(false)}
                                className='py-4 hover:border-b cursor-pointer'>Contact Us</li>
                        </Link>
                        <Link href='/services'>
                            <li
                                onClick={() => setMenuOpen(false)}
                                className='py-4 hover:border-b cursor-pointer'>Our Services</li>
                        </Link>
                        <Link href='/blog'>
                            <li
                                onClick={() => setMenuOpen(false)}
                                className='py-4 hover:border-b cursor-pointer'>Blog</li>
                        </Link>
                    </ul>
                </div>
                <div className='flex flex-row justify-around pt-10 items-center'>
                    <AiOutlineInstagram size={30} className='cursor-pointer' />
                    <AiOutlineFacebook size={30} className='cursor-pointer' />
                    <AiOutlineTikTok size={30} className='cursor-pointer' />
                </div>
                <Link href='/'>
                    <Image src={Logo}
                        alt='Logo'
                        width='75'
                        height='75'
                        className='cursor-pointer rounded-full mt-10' />
                </Link>
            </div>

        </nav>
    )
}

export default Navbar