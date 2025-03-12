"use client"; // Enables event handlers
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import icon from '@/public/icon.svg';

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://127.0.01:8000/login",{ email, password })
            localStorage.setItem("token", response.data.access_token);
            router.push("/home");
        }catch(error) {
            alert("Login failed. Check your credentials.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <h1 className="absolute top-10 left-10 text-xl font-semibold"><Image src={icon} alt="Profile" width={50} height={50} className="rounded-full" /></h1>
            <div className="rounded-lg flex md:w-1/3 mt-20 gap-4">
                {/* Left Side - Login Form */}
                <div className="flex flex-col bg-gray-900 text-white shadow-lg items-left text-left w-full p-8 h-full gap-4">
                    <h2 className="mt-6 text-2xl">Welcome!</h2>
                    <div>
                        <h1 className="text-gray text-3xl">Sign in to Elementary</h1>
                        <p className="text-gray-600">Lorem Ipsum is simply</p>
                    </div>
                    <form onSubmit={handleLogin} className="mt-6 flex flex-col flex gap-4">
                        <div className="flex flex-col">
                            <label className="block text-sm font-medium">Username or Email</label>
                            <input 
                                type="email"
                                placeholder="Enter your user name"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="block mt-4 text-sm font-medium">Password</label>
                            <div className="relative w-full">
                                <input 
                                    type="password" 
                                    placeholder="Password" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required 
                                    className="w-full pr-10 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"><Image src="/Group.png" alt="Eye" width={21} height={18.13}></Image></span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" /> Remember me
                            </label>
                            <a href="#" className="text-blue-500 text-sm">Forgot Password?</a>
                        </div>
                        <button type="submit" className="w-full mt-4 bg-black text-white py-2 rounded-md hover:bg-gray-800">
                            Login
                        </button>
                            <p className="mt-4 text-center text-sm">
                                Don't have an account? <a onClick={() => router.push("/signup")} className="text-black hover:text-blue-500 font-semibold cursor-pointer">Register</a>
                            </p>
                    </form>
                </div>
            </div>
        </div>
    );
}