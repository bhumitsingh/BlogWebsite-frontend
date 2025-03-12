"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import icon from '@/public/icon.svg';

export default function SignupPage() {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post("http://127.0.0.1:8000/signup", { first_name, last_name, email, password });
            router.push("/login");
        } catch (error) {
            alert("Signup failed. Try again.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <h1 className="absolute top-10 left-10 text-xl font-semibold"><Image src={icon} alt="Profile" width={50} height={50} className="rounded-full" /></h1>
            <div className="rounded-lg flex md:w-1/3 mt-20 gap-4">
                {/* Left Side - Login Form */}
                <div className="flex flex-col bg-white shadow-lg items-left text-left w-full p-8 h-full gap-4">
                <h1 className="text-2xl font-semibold text-center mb-6">Signup</h1>
                    <form onSubmit={handleSignup} className="flex flex-col space-y-4">
                        <div className="flex flex-col">
                            <label className="block text-sm font-medium">First Name</label>
                            <input 
                                type="first_name" 
                                placeholder="First Name" 
                                value={first_name} 
                                onChange={(e) => setFirstName(e.target.value)} 
                                required 
                                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="block text-sm font-medium">Last Name</label>
                            <input 
                                type="last_name" 
                                placeholder="Last_Name" 
                                value={last_name} 
                                onChange={(e) => setLastName(e.target.value)} 
                                required 
                                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="block text-sm font-medium">Username or Email</label>
                            <input 
                                type="email" 
                                placeholder="Email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="block text-sm font-medium">Password</label>
                            <div className="relative w-full">
                                <input 
                                    type="password" 
                                    placeholder="Password" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required 
                                    className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <span className="absolute right-3 top-4 cursor-pointer"><Image src="/Group.png" alt="Eye" width={21} height={18.13}></Image></span>
                            </div>
                        </div>
                        <button type="submit" className="w-full mt-4 bg-black text-white py-2 rounded-md hover:bg-gray-800">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
}