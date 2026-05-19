"use client";

import Hero from "../sections/Hero";

export default function Home() {

  return (
    <main className="min-h-screen bg-[#f3efeb] dark:bg-black transition-colors duration-500 relative overflow-hidden">
      
        <div className=" absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#ff6a0020,transparent_30%),radial-gradient(circle_at_top_right,#ff6a0020,transparent_25%)] dark:bg-[radial-gradient(circle_at_bottom_left,#ff6a0045,transparent_30%),radial-gradient(circle_at_top_right,#ff6a0020,transparent_25%)]" />
        <div className="pointer-events-none absolute inset-0 rounded-[36px] bg-[radial-gradient(circle_at_center,#ff6a0018,transparent_55%)] dark:bg-[radial-gradient(circle_at_center,#ff6a0030,transparent_60%)]" />

        <div className="w-full relative z-10">
          <Hero/>
          
        </div>
    </main>
  );
}
