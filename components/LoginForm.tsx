"use client"
import React from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik';

interface Values {
    username: string;
    password: string;
}

const LoginForm = () => {
    return (
        <div className='w-[340px] lg:w-[500px] bg-[#fff] p-3'>
            <h1 className="text-2xl font-bold mb-3">Login</h1>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}

                onSubmit={(
                    values: Values,
                    { setSubmitting }: FormikHelpers<Values>
                ) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);
                }}

            >
                <Form>
                    <div className="mb-3 w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 ">
                        <Field className="form-control"
                            id="username"
                            name="username"
                            placeholder="Username"
                            aria-describedby="usernameHelp" />
                    </div>

                    <div className="mb-3 w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500">
                        <Field
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="Password"
                            type="password" />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        Login
                    </button>
                </Form>
            </Formik>
        </div>
    )
}

export default LoginForm