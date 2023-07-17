import { NavLinks } from '@/Constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Authprovider from './Authprovider'

const Navbar = () => {
    const session={}
  return (
    <nav className='flexBetween navbar'>
      <div className='flex-1 flexStart '>
       <Link href='/'>
         <Image
          src='/logo.svg'
          width={115}
          height={43}
         />
       </Link>
       <ul className='xl:flex hidden text-small gap-10'>
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.text}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className='flexCenter gap-4'>
         {
            session?
            <>
            Userphoto
            <Link href='/sharework'>
             Share Work
            </Link>
            </>:(
                <Authprovider/>
            )
         }
      </div>
    </nav>
  )
}

export default Navbar
