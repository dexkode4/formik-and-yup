/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef } from 'react'
import { RiEyeCloseLine, RiEye2Line } from 'react-icons/ri'

function Signup({
    touched,
    handleChange,
    handleSubmit,
    values,
    handleBlur,
    errors
}) {
    const [showPassword, setShowPassword] = useState(false);
    const passwordRef = useRef();

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
        if (passwordRef.current.type === 'password') {
            passwordRef.current.type = 'text'
        }
        else {
            passwordRef.current.type = 'password'
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 outline-none hover:border-gray-400"
                name="fullname"
                placeholder="Full Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullname} />
            {errors.fullname && touched.fullname && (
                <div className="text-red-400 text-xs mb-4">{errors.fullname}</div>
            )}

            <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 outline-none hover:border-gray-400"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email} />

            {errors.email && touched.email && (
                <div className="text-red-400 text-xs mb-4">{errors.email}</div>
            )}
            <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4 outline-none hover:border-gray-400"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                ref={passwordRef} />
            {errors.password && touched.password && (
                <div className="text-red-400 text-xs mb-4">{errors.password}</div>
            )}
            <div className="-mt-2 mb-4 cursor-pointer" onClick={handleShowPassword}>
                {
                    showPassword ? <>
                        <RiEyeCloseLine className="inline mr-2" />
                        <label className="text-gray-500 text-10">hide</label>
                    </>
                        : <>
                            <RiEye2Line className="inline mr-1" /> <label className="text-gray-500">show</label></>
                }

            </div>
            <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4 outline-none hover:border-gray-400"
                name="confirm_password"
                placeholder="Confirm Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirm_password}

            />
            {errors.confirm_password && touched.confirm_password && (
                <div className="text-red-400 text-xs mb-4">{errors.confirm_password}</div>
            )}

            <button
                type="submit"
                className="transform transition duration-2000 ease-in-out w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-500 focus:outline-none my-1"
            >Create Account</button>

            <div className="text-center text-sm text-grey-dark mt-4">
                By signing up, you agree to the
                    <a className="transform transition duration-2000 ease-in-out no-underline border-b border-grey-dark text-grey-dark ml-2 hover:border-gray-500" href="#">
                    Terms of Service
                    </a> and
                    <a className="transform transition duration-2000 ease-in-out no-underline border-b border-grey-dark text-grey-dark ml-2 hover:border-gray-500" href="#">
                    Privacy Policy
                    </a>
            </div>
        </form>
    )
}

export default Signup