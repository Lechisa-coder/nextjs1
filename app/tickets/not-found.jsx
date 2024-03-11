import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <main className='text-center'>
        <h2 className='text-3x1'>We Hit Brick Wall</h2>
        <p>we could not found the tickets  you were looking for!!!</p>
        <p>Please Back to all <Link href="/tickets">Tickets</Link></p>
      
    </main>
  )
}
