"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const router = ['performance', 'reliablity', 'scale']
export default function Header() {
    const pathname = usePathname();
    return (
        <div className="absolute w-full z-10">
            <div className="flex justify-between container mx-auto text-white p-8 ">
                <Link href='/' className="text-3xl font-bold ">Home</Link>
                <div className="text-xl space-x-4">
                    {
                        router.map(v => <Link href={'/' + v} key={v} className={`${pathname === '/' + v && 'text-pink-300'}`}>
                            {v.replace(/^(?<a>[a-z])/, v[0].toLocaleUpperCase())}
                        </Link>)
                    }
                </div>
            </div>
        </div>
    )
}
