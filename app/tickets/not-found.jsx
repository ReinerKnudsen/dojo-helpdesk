import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <main className='text-center'>
      <h2 className='text-3xl'>Couldn't find your ticket.</h2>
      <p>I could not find the ticket you are looking for.</p>
      <p>
        Go back to the <Link href='/tickets'>Tickets</Link>
      </p>
    </main>
  );
}
