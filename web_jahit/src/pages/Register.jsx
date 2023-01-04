import React from "react";
import Navbar from "../components/Navbar";
import logo from '../img/logo web jahit.jpeg'
export const image = 'https://i1.wp.com/kadudampit.sukabumikab.go.id/wp-content/uploads/2018/10/background-putih-batik-1.png?ssl=1'
export default function Login() {
    return (
        <>
        <div className="sticky-top">
        <Navbar />
        </div>
            <div className="bg-contain flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8" style={{backgroundImage: `url(${image})`, backgroundSize: 'cover'}}>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md ">

                    <div className="bg-[#A3BB98] py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <div className="sm:mx-auto sm:w-full sm:max-w-md">
                            <img
                                className="mx-auto h-12 w-auto"
                                src={logo}
                                alt="Your Company"
                            />
                            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                                Register your account
                            </h2>
                        </div>
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mt-6">
                                    Name
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text" 
                                        name="name" 
                                        id="name"
                                        autoComplete="name"
                                        required
                                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="">
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 my-10">
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
