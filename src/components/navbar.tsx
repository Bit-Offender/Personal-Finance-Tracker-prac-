import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '@/app/themetoggle';

export default function NavBar() {
  return (
      <header className="sticky top-0 z-50 bg-green-700/70 dark:bg-neutral-800/30 backdrop-blur-lg dark:backdrop-blur-lg border-b-2 border-gray-700">
        <nav className="navbar flex justify-between pb-1">
          <ul className="main-nav flex items-center gap-7 mt-1">
            <li>
              <Link href='/'>
                <Image src='/logo.png' alt='logo' width={55} height={50}/>
              </Link>
            </li>
            <li>
                <Link href='/' className='tracking-wide text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group'>
                Home
                <span className="absolute bottom-[-3px] left-0 w-0 h-0.5 bg-gradient-to-r from-[#004D40] to-[#00796B] dark:bg-gradient-to-r dark:from-[#FFB300] dark:to-[#FFD54F] group-hover:w-full transition-all duration-300"/>
                </Link>
            </li>
            <li>
              <Link href='/about' className='tracking-wide text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group'>
                About Us
                <span className="absolute bottom-[-3px] left-0 w-0 h-0.5 bg-gradient-to-r from-[#004D40] to-[#00796B] dark:bg-gradient-to-r dark:from-[#FFB300] dark:to-[#FFD54F] group-hover:w-full transition-all duration-300"/>
                </Link>
            </li>
            <li>
              <Link href='/contacts' className='tracking-wide text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group'>
                Contact Us
                <span className="absolute bottom-[-3px] left-0 w-0 h-0.5 bg-gradient-to-r from-[#004D40] to-[#00796B] dark:bg-gradient-to-r dark:from-[#FFB300] dark:to-[#FFD54F] group-hover:w-full transition-all duration-300"/>
                </Link>
            </li>
          </ul>
          <ul className="sidenav flex items-center justify-center pr-4 mt-2">
            <li>
              <ThemeToggle/>
            </li>
          </ul>
        </nav>
      </header>
    );
}