'use client'
import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavItem() {
  const pathName = usePathname()

  return (
    <ul className=' md:flex-between 
    flex w-full flex-col items-start gap-5 md:flex-row'>
      {headerLinks.map((links)=>
      {  const isActive =pathName === links.route
      return( <li key={links.route} 
      className={`${isActive &&' text-primary-500'}
       flex-center p-medium-16 whitespace-nowrap`}>
        <Link href={links.route}>{links.label}</Link>
      </li>)})}
    </ul>
  )
}
