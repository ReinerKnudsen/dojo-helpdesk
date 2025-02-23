async function getTickets() {
  const res = await fetch('http://localhost:4000/tickets', {
    next: {
      // this caches the data for 30 seconds and revalidates it afterwards
      // there won't be another call to the API for 30 seconds
      // revalidate: 30,
      revalidate: 0, // opts out of caching completely
    },
  });
  return res.json();
}

export default async function TicketsList() {
  const tickets = await getTickets();
  return (
    <>
      {tickets.map((ticket) => (
        <div className='card my-5' key={ticket.id}>
          <h3>{ticket.title}</h3>
          <p>{ticket.body.slice(0, 200)}...</p>
          <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
        </div>
      ))}
      {tickets.length === 0 && <p className='text-center'>There are no open tickets.</p>}
    </>
  );
}
