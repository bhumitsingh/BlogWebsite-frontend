'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import profilePic from '@/public/profile-pic.svg';

export default function SidebarProfile({ expanded }: { expanded: boolean }) {
    const router = useRouter();
    const [user, setUser] = useState<{ name: string; email: string } | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token'); // Use 'token' instead of 'access_token'
            if (!token) return;
    
            try {
                const res = await fetch('http://localhost:8000/user', {  // Ensure this matches backend
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    credentials: 'include',
                });
    
                if (!res.ok) {
                    const errorText = await res.text();
                    console.error('Failed to fetch user:', errorText);
                    return;
                }
    
                const data = await res.json();
                console.log('Fetched user:', data); // Debug log
                setUser(data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };
    
        fetchUser();
    }, []);

    const handleAuth = () => {
        if (user) {
        localStorage.removeItem('token');
        setUser(null);
        router.push('/'); // Redirect to home or refresh
        } else {
        router.push('/login');
        }
    };

    return (
        <button
        onClick={handleAuth}
        className="flex items-center gap-2 mt-4 p-2 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 w-full"
        >
        <Image src={profilePic} alt="Profile" width={32} height={32} className="rounded-full" />
        {expanded && (
            <div className='text-left'>
            {user ? (
                <>
                <p className="text-sm font-semibold">{user.name || 'User'}</p>
                <p className="text-xs text-gray-400">{user.email}</p>
                <p className="text-xs text-red-400 mt-1">Click to Logout</p>
                </>
            ) : (
                <p className="text-sm font-medium text-white">Login</p>
            )}
            </div>
        )}
        </button>
    );
}
