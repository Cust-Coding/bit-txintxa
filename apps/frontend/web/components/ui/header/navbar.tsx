"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import CTA_BTN from "./ctabtn";
import ToggleLangBtn from "../button/ToggleLangBtn";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("navlinks");

  return (
    <nav className=" ">
      <div className="hidden md:flex items-center gap-8  text-neutral-400">
        <Link
          className="transition-colors duration-200 hover:text-[#ff6a00c4] focus:text-[#FF6A00] focus:font-semibold"
          href="/#"
        >
          {t("howitworks")}
        </Link>

        <Link
          className="transition-colors duration-200 hover:text-[#ff6a00c4] focus:text-[#FF6A00] focus:font-semibold"
          href="/#"
        >
          {t("security")}
        </Link>

        <Link
          className="transition-colors duration-200 hover:text-[#ff6a00c4] focus:text-[#FF6A00] focus:font-semibold"
          href="/#"
        >
          {t("gitHub")}
        </Link>
      </div>

      <button
        className="md:hidden toggleMenu cursor-pointer p-2 text-white/80 hover:text-orange-500 hover:bg-white/5 active:scale-95 rounded-xl transition-all duration-200 flex items-center justify-center border border-transparent active:border-white/10"
        onClick={() => setOpen(true)}
      >
        <Menu size={24} strokeWidth={1.5} />
      </button>

      <div
        onClick={() => setOpen(false)}
        className={`absolute huburgerMenu bg-gray-600/50 right-0 transition-opacity duration-500 top-0 bottom-0 w-screen h-screen flex justify-end items-end md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="w-[75%] h-full bg-black">
          <div className="relative w-full border-b cursor-pointer px-2 py-6 flex items-center justify-between ">
            <ToggleLangBtn />
            <X className="text-neutral-300 hover:bg-neutral-900 rounded-md cursor-pointer " />
          </div>

          <div className="items-center space-y-10 mt-8 py-4 px-4 text-md text-neutral-400 flex flex-col">
            {/* <Link
            className="transition hover:text-[#ff6a00c4] focus:text-[#FF6A00] focus:font-semibold"
            href="/sell-btc"
          >
            {t('sellbtc')}
          </Link>

          <Link
            className="transition hover:text-[#ff6a00c4] focus:text-[#FF6A00] focus:font-semibold"
            href="/buy-btc"
          >
            {t('buybtc')}
          </Link> */}

            <Link
              className="transition-colors duration-200 hover:text-[#ff6a00c4] focus:text-[#FF6A00] focus:font-semibold"
              href="/#"
            >
              {t("howitworks")}
            </Link>

            <Link
              className="transition-colors duration-200 hover:text-[#ff6a00c4] focus:text-[#FF6A00] focus:font-semibold"
              href="/#"
            >
              {t("security")}
            </Link>

            <Link
              className="transition-colors duration-200 hover:text-[#ff6a00c4] focus:text-[#FF6A00] focus:font-semibold"
              href="/#"
            >
              {t("gitHub")}
            </Link>
          </div>

          <CTA_BTN />
        </div>
      </div>
    </nav>
  );
}
