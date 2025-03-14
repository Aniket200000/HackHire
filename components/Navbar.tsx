"use client"

import React from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { CodeIcon } from "lucide-react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import DashboardBtn from "./DashboardBtn";

import { useState, useEffect } from "react";

function Navbar() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        // Logic to determine if the theme is dark
        const darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setIsDarkTheme(darkTheme);
    }, []);
    return (
        <nav className="border-b">
            <div className="flex h-16 items-center px-4 container mx-auto">

        {/* Left Side - Logo */}

        <Link
    href="/"
    className="flex h-16 items-center gap-2 font-semibold text-2xl mr-6 font-mono hover:opacity-80 transition-opacity"
>
    <CodeIcon className="size-8 text-emerald-500" />
    <span className={`bg-gradient-to-r bg-clip-text ${
        isDarkTheme 
            ? 'from-cyan-400 to-green-400'  // Cool cyberpunk-style colors
            : 'from-emerald-600 to-teal-600' // Professional dark accents
    } font-semibold tracking-wide transition-colors duration-300`}>
        HackHire
    </span>
</Link>

        {/* Right Side - Actions */}

                <SignedIn>
                    <div className= "flex items-center space-x-4 ml-auto" >
                        <DashboardBtn/>
                        <ModeToggle/>
                        <UserButton/>
                    </div>
                </SignedIn>
            </div>
        </nav>
    );
}

export default Navbar;
