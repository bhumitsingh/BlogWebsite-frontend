'use client';

import { useState } from 'react';
import { Home, LayoutDashboard, ClipboardList, BarChart, Bell, HelpCircle, Settings, Layers, Search } from 'lucide-react';
import Image from 'next/image';
import profilePic from '@/public/profile-pic.svg';
import icon from '@/public/icon.svg';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`absolute h-screen bg-gray-900 text-white flex flex-col justify-between p-4 transition-all duration-300 ease-in-out ${expanded ? 'w-64' : 'w-18'}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* Top Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-purple-400 text-2xl"><Image src={icon} alt="Profile" width={32} height={32} className="rounded-full" /></span>
          {expanded && <span className="text-lg font-semibold">Elementary</span>}
        </div>
        {/* Search Input */}
        <div className="mb-4 ml-1 pt-4">
          {expanded ? (
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none"
            />
          ) : (
            <Search size={25} className="text-gray-400" />
          )}
        </div>
        <div className="space-y-4">
          <SidebarItem icon={<Home size={20} />} text="Home" expanded={expanded} />
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Categories" expanded={expanded} />
          <SidebarItem icon={<ClipboardList size={20} />} text="Projects" expanded={expanded} />
          <SidebarItem icon={<Layers size={20} />} text="Tools" expanded={expanded} />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="space-y-4">
        <SidebarItem icon={<Bell size={20} />} text="Notifications" expanded={expanded} badge={12} />
        <SidebarItem icon={<HelpCircle size={20} />} text="Support" expanded={expanded} />
        <SidebarItem icon={<Settings size={20} />} text="Settings" expanded={expanded} />
        <div className="flex items-center gap-2 mt-4 p-2 bg-gray-800 rounded-lg cursor-pointer">
          <Image src={profilePic} alt="Profile" width={32} height={32} className="rounded-full" />
          {expanded && (
            <div>
              <p className="text-sm font-semibold">Brooklyn Simmons</p>
              <p className="text-xs text-gray-400">brooklyn@simmons.com</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text, expanded, badge }: { icon: React.ReactNode; text: string; expanded: boolean; badge?: number }) => {
  return (
    <div className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-gray-800 relative">
      {icon}
      {expanded && <span className="text-sm font-medium">{text}</span>}
      {badge && expanded && <span className="ml-auto bg-purple-500 text-xs text-white px-2 py-1 rounded-full">{badge}</span>}
    </div>
  );
};

export default Sidebar;
