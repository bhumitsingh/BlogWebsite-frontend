'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import bell from '@/public/bell.svg';
import icon from '@/public/icon.svg';
import write from '@/public/write.svg';
import SearchInput from '@/app/components/searchInput';
import SidebarProfile from '@/app/components//ui/sidebar_profile';

export default function Nav() {
    const [expanded, setExpanded] = useState(false);
    const router = useRouter();

    return (
        // Navbar
        <div className='p-4 rounded-lg'>
            <div className='flex flex-row items-center justify-between p-4 w-full h-24 bg-linear-65 from-purple-500 to-pink-500 rounded-4xl'>
                <div className='flex flex-row items-center w-1/2'>
                    <div><Image src={icon} alt="logo" height={60} width={60} /></div>
                    <div className='pl-8'><SearchInput /></div>
                </div>
                <div className='flex flex-row justify-end items-center gap-5 w-1/2'>
                    <button onClick={() => router.push('/write')}><Image src={write} alt="write" height={40} width={40} /></button>
                    <div><Image src={bell} alt="bell" height={40} width={40} /></div>
                    <SidebarProfile expanded={expanded}/>
                </div>
            </div>
        </div>
    );
}