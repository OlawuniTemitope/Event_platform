import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className=' border-t'>
      <div className='flex-center flex-between 
      wrapper flex-col flex gap-4 p-5 text-center sm:flex-row'>
        <Link href='/'>
          <Image 
          src='assets/images/logo.svg'
          alt='logo'
          width={128}
          height={38}/>
        </Link>
        <p>{new Date().getFullYear()} Evently. just webhook All changed rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer 