import React, { use } from 'react'
import TicketCard from '../TicketCard/TicketCard';

function TicketBox({ ticketPromise, handleAddToProgress, inProgressTasks, 
  handleComplete, resolvedTasks }) {
  const ticketData = use(ticketPromise);

  return (

    <section className="px-2 md:px-10 mt-6 md:mt-10 flex flex-row gap-4 md:gap-8 items-start">
      
  
      <div className="flex-1">
        <h2 className="font-semibold mb-4 text-sm md:text-base">Customer Tickets</h2>
        
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {ticketData.map(ticket => (
            <div key={ticket.id} onClick={() => handleAddToProgress(ticket)} className="cursor-pointer">
              <TicketCard ticket={ticket} />
            </div>
          ))}
        </div>
      </div>

  
      <div className="w-[120px] sm:w-[200px] md:w-[300px] flex-none">
        <h2 className="font-semibold mb-4 text-sm md:text-base text-center md:text-left">Task Status</h2>
        <div className="bg-white p-2 md:p-4 shadow rounded space-y-3 sticky top-24">
          {inProgressTasks.length === 0 && (
            <p className="text-[10px] md:text-sm text-gray-500 text-center"> No tasks</p>
          )}
          
         {inProgressTasks.map(task => (
  <div 
    key={task.id} 
    className="bg-white mx-2 p-3 rounded-lg shadow-sm border"
  >
    <p className="font-medium text-sm mb-2 break-words">
      {task.title}
    </p>

    <button 
      onClick={() =>{

  alert("Task Completed!"); 
         handleComplete(task.id);
        }}
      className="btn btn-xs btn-success w-full"
    >
      Complete
    </button>
  </div>
          ))}
        </div>


  

<h2 className="font-semibold mb-4 mt-10 text-sm md:text-base text-center md:text-left">
  Resolved Status
</h2>

<div className="bg-white p-2 md:p-4 shadow rounded space-y-3 mt-4">
  {resolvedTasks.length === 0 && (
    <p className="text-[10px] md:text-sm text-gray-500 text-center">
      No resolved tasks
    </p>
  )}

  {resolvedTasks.map(task => (
    <div 
      key={task.id} 
      className="bg-white mx-2 p-3 rounded-lg shadow-sm border"
    >
      <p className="font-medium text-sm break-words">
        {task.title}
      </p>
    </div>
  ))}
</div>
         
   





         </div>
    </section>
  );
}

export default TicketBox;
