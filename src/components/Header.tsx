import Image from 'next/image';
import Logo from '@/assets/logo.svg';

export function Header() {
  return (
    <header className="flex ">
      <div>
        <nav>
          <ul className="flex">
            <li>
              <a href="/">Home</a>
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
      <div className='flex'>
        <nav>
          <ul className='flex'>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
      </div>
       
    </header>
  );
}