/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Formik } from "formik";
import { toast } from 'react-toastify';
import * as Yup from "yup";
import Signup from './Signup'

const password_regex = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])/

function SignupContainer() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <Formik
                        initialValues={{ fullname: "", email: "", password: "", confirm_password: "" }}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            toast.success("Signup successful")
                            resetForm({ values: "" });
                        }}
                        validationSchema={Yup.object().shape({
                            fullname: Yup.string().min(3).max(50).required("Required"),
                            email: Yup.string().email().required(),
                            password: Yup.string()
                                .required("No password provided")
                                .min(8, "Password too short should be atleast 8 characters long")
                                .matches(password_regex, "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),
                            confirm_password: Yup.string().when("password", {
                                is: val => (val && val.length > 0 ? true : false),
                                then: Yup.string().oneOf(
                                    [Yup.ref("password")],
                                    "password does not match"
                                )
                            })
                        })}
                    >
                        {(props) => {
                            return (<Signup {...props} />);
                        }}
                    </Formik>

                </div>
            </div>
        </div>
    )
}

export default SignupContainer
