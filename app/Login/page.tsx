"use client"
import React from 'react'
import Head from 'next/head'
import LoginForm from './LoginForm'
import { useAppSelector } from '@/lib/store'


const Page = () => {
    const username = useAppSelector((state) => state.authReducer.value.username);
    return (
        <div className="w-full h-screen  flex items-center justify-center">
            <Head>
                <title>Login Page</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <LoginForm />
                <h1>UserName: {username}</h1>
            </main>
        </div>

    )
}

export default Page