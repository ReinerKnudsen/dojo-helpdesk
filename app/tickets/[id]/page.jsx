//export const dynamicParams = false;
// Handle the case where no pre-rendered page exists for a requested ID
// Provides a 404 page

import { notFound } from 'next/navigation';

export const dynamicParams = true;
// In this case NextJS tries to render a page for the requested ID if that does not exist yet

export async function generateStaticParams() {
  const res = await fetch('http://localhost:4000/tickets');
  const tickets = await res.json();
  return tickets.map((ticket) => ({
    id: ticket.id,
  }));
}

async function getTicket(id) {
  await new Promise((res) => setTimeout(res, 3000)); // imitade delay
  const res = await fetch('http://localhost:4000/tickets/' + id, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    // displays a 404 page
    notFound();
  }

  return res.json();
}

export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id);

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className='card'>
        <h3>{ticket.title}</h3>
        <small>by: {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
      </div>
    </main>
  );
}
