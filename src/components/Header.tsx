import Image from 'next/image';
import Logo from '@/assets/logo.svg';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Header() {
  return (
    <header className="flex justify-between max-w-width-header h-32 items-center">
      <div className='max-w-sm'>
        <nav>
          <ul className="flex gap-14 text-lg font-normal">
            <li>
              <a href="/">Home</a>
              <span className='w-8 bg-line h-1'></span>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/about">About</a> 
            </li>
          </ul>
        </nav>
      </div>
      <Image src={Logo} alt="Logo" width={100} height={100} />
      <div >
        <nav>
          <ul className='flex gap-8'>
            <li>
              <a href="/contact"><Instagram /></a>
            </li>
            <li>
              <a href="/login"><Facebook /></a>
            </li>
            <li>
              <a href="/contact"><Twitter /></a>
            </li>
            <li>
              <a href="/login"><Linkedin /></a>
            </li>
          </ul>
        </nav>
      </div>
       
    </header>
  );
}