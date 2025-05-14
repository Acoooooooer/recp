"use client"
import { useState } from "react";


export default function Template({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [count, setCount] = useState(0)

    
    return (
        <div className="border-2 border-dashed border-white p-4 w-1/2 mx-auto mt-10 rounded-md">
            <h2>Dashboard Layout {count}</h2>
            <button onClick={() => { setCount(count + 1) }} className="bg-white text-black p-2 my-2 rounded-md cursor-pointer">Increment</button>
            {children}
        </div>
    );
}
