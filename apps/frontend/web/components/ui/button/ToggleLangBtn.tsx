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
                className="text-neutral-300 border border-neutral-700 hover:bg-neutral-900 rounded-md md:ml-0 flex items-center justify-around gap-1 p-2 cursor-pointer   transition"
                style={{background:'',cursor:'pointer',fontSize:12,fontWeight:700,letterSpacing:2}}>
                <Languages size={18} />
                {locale.toUpperCase()}
            </button>


    );
}

