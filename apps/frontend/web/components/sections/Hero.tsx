"use client";

import { useTranslations } from "next-intl";
import CTA_BTN from "../ui/header/ctabtn";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("HomePage");
  const n = useTranslations("navlinks");

  return (
    <section className="w-full min-h-screen pt-40 pb-16 px-6 md:px-10">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-white dark:text-white flex flex-col gap-12 md:flex-row md:items-center md:justify-between">

          {/* Hero text */}

          <div className="w-full md:w-1/2 py-10 flex flex-col items-start text-left space-y-4 md:space-y-12">
            <div className="space-y-2">
             {/* Bitcoin Price Ticker Badge */}
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-xs md:text-sm font-medium backdrop-blur-sm mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e] animate-pulse" />
                <span className="text-neutral-400">BTC / MZN:</span>
                <span className="text-orange-400 font-bold">{`4 985 254,99`}</span>
                <span className="text-green-500 text-[10px] bg-green-500/10 px-1.5 py-0.5 rounded font-bold">
                  +10%
                </span>
              </div>
             
              <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight text-start">
                {t("first")}
              </h1>
              <h2 className="text-2xl md:text-5xl text-orange-500 font-bold text-start">
                {t("second")}
              </h2>
            </div>
            <p className="text-base md:text-lg text-neutral-400 max-w-xl leading-relaxed text-start">
              {t("call-atention")}
            </p>

            

            <div className="flex items-center gap-4">
                
              <CTA_BTN onlyPrimary={true} />

              <Link
                className="hidden transition-colors duration-200 hover:text-[#ff6a00c4] focus:text-[#FF6A00] focus:font-semibold md:flex gap-1 items-center border border-neutral-400 p-2 rounded-md"
                href="/#"
              >
                {n("howitworks")}
                <ArrowDown size={16} />
              </Link>
            </div>
          </div>

          {/*Hero Mockup */}

          <div className="w-full md:w-1/2 flex items-center justify-center relative">
            <div className="w-full max-w-125 md:max-w-none xl:max-w-162.5  relative">
              <Image
                src="/mockup-hero2.png"
                alt="Bit Txintxa P2P App Mockup"
                width={800}
                height={750}
                priority
                className="w-full h-auto max-h-[70vh] object-contain object-center drop-shadow-[0_10px_50px_rgba(255,106,0,0.15)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
