'use client'

import { sidebarLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

export const LeftSidebar = () => {

  const pathName = usePathname();
  const router = useRouter();
  return (
    <section className='left_sidebar'>
        <nav className='flex flex-col gap-6'>
            <Link href={'/'} className='flex cursor-pointer items-center gap-1 pb-1'>
              <Image  src={'/icons/logo.svg'} 
                      alt='Logo image' 
                      width={23} 
                      height={27}
              />
              <h1 className='text-24 font-extralight text-white-1 max-lg:hidden'>AI Podscast</h1>
            </Link>

            {sidebarLinks.map(({ route, label, imgURL}) => {

              const isActive = pathName === route || pathName.startsWith('${route}/')
              return (
              <Link href={route} key={label}
                    className={`flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start 
                    ${isActive ? "bg-nav-focus border-r-4 border-orange-1": '' }`
                    }
              >
                <Image  src={imgURL} 
                        alt={`${label} image`}
                        width={24}
                        height={24}
                />
              </Link>
            )})}
        </nav>
    </section>
  )
}
