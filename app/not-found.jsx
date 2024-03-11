import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <main className='text-center'>
        <h2 className='text-3x1'>There were Problem</h2>
        <p>we could not gound the page you were looking for!!!</p>
        <p>Please Back To <Link href="/">Dashboard</Link></p>
      
    </main>
  )
}
