
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import {  SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import NavItem from './NavItem'
import MobileNav from './MobileNav'

function Header() {
  return (
    <div className='w-full border-b'>
        <div className='wrapper flex items-center justify-between'>
            <Link href='/' className='w-36'>
                <Image src='/assets/images/logo.svg'
                width={128} height={38}
                alt='Event Logo'/>
            </Link>
            <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItem />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">
                Login now
              </Link>
            </Button>
          </SignedOut>
        </div>
     
           </div>
    </div>
  )
}

export default Header