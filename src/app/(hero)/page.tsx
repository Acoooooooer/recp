import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home',
}


function Home() {
  return (
    <>
      <div className="bg-gray-900 h-screen">Home</div>
    </>

  )
}

export default Home