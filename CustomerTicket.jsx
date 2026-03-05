import React from 'react'

function CustomerTicket() {
  return (
    <div>
      <section className="px-10 mt-10 grid grid-cols-3 gap-8">

  {/* <!-- Left Side --> */}
  <div className="col-span-2">
    <h2 className="font-semibold mb-4">Customer Tickets</h2>

    <div className="grid grid-cols-2 gap-4">
      {/* <!-- TicketCard multiple here --> */}
    </div>
  </div>

  {/* <!-- Right Side --> */}
  <div>
    <h2 className="font-semibold mb-4">Task Status</h2>

    <div className="bg-white p-4 shadow rounded">
      <h3 className="font-semibold">Resolved Task</h3>
      <p className="text-sm text-gray-500 mt-2">
        No resolved tasks yet.
      </p>
    </div>
  </div>

</section>
    </div>
  )
}

export default CustomerTicket
