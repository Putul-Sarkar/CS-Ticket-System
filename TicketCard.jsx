import React from 'react'

function TicketCard({ticket}) {
  return (
    <div>
      <div className="card bg-white shadow hover:shadow-lg transition">
  <div className="card-body">

    <div className="flex justify-between items-start">
      <h2 className="card-title text-sm">{ticket.title}</h2>
      
      <span className="badge badge-success badge-sm">{ticket.status}</span>
    </div>

    <p className="text-xs text-gray-500 mt-2">
   {ticket.description}
    </p>

    <div className="mt-4 text-xs text-gray-400">

  {/* Top Row */}
  <div className="flex justify-between items-center mb-2">
    <div className="flex gap-2">
      <span>{ticket.id}</span>
      <span>{ticket.priority}</span>
    </div>

  {/* Bottom Row */}
  <div className="flex gap-2">
    <span>{ticket.customerName}</span>
    <i class="fa-regular fa-calendar-days"></i>
    <span>{ticket.date}</span>
  </div>

</div>
       

  </div>
</div>
    </div>
        </div>
  )
}

export default TicketCard
