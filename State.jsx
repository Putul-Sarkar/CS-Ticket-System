import React from 'react'

function State({ inProgressCount, resolvedCount }) {
  return (
    <section className="grid grid-cols-2 gap-6 px-10 pt-24 mt-10">
      
      {/* In Progress Card */}
      <div className="card bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg h-44 relative overflow-hidden">
    
        <img 
          src="/vector1.png" 
          className="absolute left-0 top-0 h-full w-1/2 object-cover opacity-100mix-blend-overlay pointer-events-none" 
          alt="" 
        />
    
        <img 
          src="/vector1.png" 
          className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-100 mix-blend-overlay pointer-events-none scale-x-[-1]" 
          alt="" 
        />
        
        <div className="card-body text-center flex flex-col justify-center relative z-10">
          <h2 className="text-lg font-medium opacity-90">In-Progress</h2>
          <p className="text-5xl font-bold">{inProgressCount}</p>
        </div>
      </div>

      {/* Resolved Card */}
      <div className="card bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg h-44 relative overflow-hidden">
   
        <img 
          src="/vector1.png" 
          className="absolute left-0 top-0 h-full w-1/2 object-cover opacity-100mix-blend-overlay pointer-events-none" 
          alt="" 
        />
      
        <img 
          src="/vector1.png" 
          className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-100 mix-blend-overlay pointer-events-none scale-x-[-1]" 
          alt="" 
        />
        
        <div className="card-body text-center flex flex-col justify-center relative z-10">
          <h2 className="text-lg font-medium opacity-90">Resolved</h2>
          <p className="text-5xl font-bold">{resolvedCount}</p>
        </div>
      </div>

    </section>
  );
}

export default State;
