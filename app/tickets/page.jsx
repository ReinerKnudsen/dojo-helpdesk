import React from 'react';
import TicketsList from './TicketsList';

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets.</small>
          </p>
        </div>
      </nav>
      <TicketsList />
    </main>
  );
}
