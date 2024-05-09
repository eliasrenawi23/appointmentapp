import React from 'react'
import Head from 'next/head'
import LoginForm from '@/components/LoginForm'


const page = () => {
    return (
        <div className="w-full h-screen  flex items-center justify-center">
            <Head>
                <title>Login Page</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <LoginForm />
            </main>
        </div>

    )
}

export default page