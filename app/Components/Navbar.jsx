import React from "react";
import Link from "next/link";
import Logo from './logo.jpg'
import Image from 'next/image'
export default function Navbar() {
  return (
    <div>
      
      <nav>
      <Image
        src={Logo}
        alt='Dojo Helpdesk logo'
        width={70}
        placeholder='blur'
        quality={100}
      />
      <h1> Navbar pages </h1>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
        <Link href="/tickets/create">Add New Ticket</Link>
        
      </nav>
    </div>
  );
}
