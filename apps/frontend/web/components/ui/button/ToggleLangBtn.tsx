"use client";

import {Languages} from "lucide-react";
import {useLocale} from "next-intl";
import {createNavigation} from "next-intl/navigation";

const {useRouter, usePathname} = createNavigation();

export default function ToggleLangBtn() {

    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const nextLocale = locale === "pt" ? "en" : "pt";


    return(


            <button 
                onClick={() => router.replace(pathname, { locale: nextLocale })}
                className="border-none rounded-sm ml-5 md:ml-0 flex items-center justify-around gap-1 p-2 cursor-pointer  bg-[linear-gradient(135deg,#f7931a,#e85d00)] transition"
                style={{background:'',color:'#fff',cursor:'pointer',fontSize:12,fontWeight:700,letterSpacing:2}}>
                <Languages size={18} />
                {locale.toUpperCase()}
            </button>


    );
}

