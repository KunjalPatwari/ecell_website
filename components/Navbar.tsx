import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="bg-black flex justify-between items-center px-4">
        <div>
            <Image src="/assets/ecell_icon.png" width={100} height={70} alt="logo" />
        </div>
        <div className="text-white flex gap-10">
            <Link href="/">HOME</Link>
            <Link href="/about">ABOUT US</Link>
            <Link href="/ventures">VENTURES</Link>
            <Link href="/events">EVENTS</Link>
            <Link href="/team">TEAM</Link>
            <Link href="/contact">CONTACT US</Link>
        </div>
    </div>
  )
}

export default Navbar