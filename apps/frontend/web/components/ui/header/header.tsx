import {useTranslations} from 'next-intl';

import Navbar from './navbar';
import CTA_BTN from './ctabtn';
import ToggleLangBtn from '../button/ToggleLangBtn';

export default function Header(){

    const t = useTranslations('navlinks');
    

    return(
    
            <header className="bg-black/10 backdrop-blur-sm fixed w-screen z-20 flex items-center justify-between px-8 py-7 md:px-12 border-b">
              
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF6A00] shadow-[0_0_30px_rgba(255,106,0,0.7)]">
                  <div className="h-4 w-4 rounded-full border-[3px] border-black dark:border-black" />
                </div>
                <div className="flex px-1 flex-col">
                    <span className="text-lg text-white font-semibold tracking-wide">
                        BIT TXINTXA 
                    </span>
                    <span className='text-xs text-white/60'>{t('sub-title')}</span>
                </div>
                
              </div>

              <Navbar/>

              
              <div className="space-x-12 hidden md:flex">
                <CTA_BTN/>
                <ToggleLangBtn/>
              </div>
              

            </header>
    );
}