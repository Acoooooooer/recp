"use client"
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";


export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [count, setCount] = useState(0)
    const pathname = usePathname();
    return (
        <div className="border-2 border-dashed border-white p-4 w-1/2 mx-auto mt-10 rounded-md">
            <div className="flex gap-4 font-bold text-lg mb-4 ">
                <Link href='/dashboard/about' className={`${pathname === '/dashboard/about' && 'text-purple-300'}`}>About</Link>
                <Link href='/dashboard/settings' className={`${pathname === '/dashboard/settings' && 'text-purple-300'}`}>Settings</Link>
            </div>
            <h2>Dashboard Layout {count}</h2>
            <button onClick={() => { setCount(count + 1) }} className="bg-white text-black p-2 my-2 rounded-md cursor-pointer">Increment</button>
            {children}
        </div>
    );
}
