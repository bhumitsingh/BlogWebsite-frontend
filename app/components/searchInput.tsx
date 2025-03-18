'use client';

import Image from "next/image";
import search from "@/public/search.svg";
import { useState, useEffect, use } from "react";

export default function SearchInput() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Set to true if screen width < 640px
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex items-center bg-[#F9F9F9] rounded-full shadow-lg transition-all duration-300">
      {isMobile ? (
        // Show only the search icon on mobile
        <Image src={search} alt="Search" width={40} height={40} />
      ) : (
        // Show full search bar on larger screens
        <div className="flex items-center w-[95%] px-4 py-2">
          <Image src={search} alt="Search" width={40} height={40} className="pr-3"/>
          <input
            type="text"
            placeholder="Search..."
            className="w-1/2 bg-transparent focus:outline-none ml-2"
          />
        </div>
      )}
    </div>
  );
}
