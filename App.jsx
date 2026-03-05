import { useState, Suspense } from 'react'
// import './App.css'
import Navbar from './Navbar/Navbar'
import State from './State/State'
import TicketBox from './TicketBox/TicketBox'
import Footer from './Footer/Footer'

// ১. এই ফাংশনটি অবশ্যই App ফাংশনের বাইরে থাকতে হবে
const fetchTicket = async () => {
  const res = await fetch("/Data.json") // public ফোল্ডারে থাকলে path ঠিক করুন
  return res.json()
}

// ২. প্রমিজটি App এর বাইরে ডিক্লেয়ার করা ভালো যাতে প্রতি রেন্ডারে ফেচ না হয়
const ticketPromise = fetchTicket();

function App() {
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [resolvedCount, setResolvedCount] = useState(0);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  const handleAddToProgress = (ticket) => {
    if (!inProgressTasks.find(t => t.id === ticket.id)) {
      setInProgressTasks([...inProgressTasks, ticket]);
    }
  }

 const handleComplete = (id) => {
  const completedTask = inProgressTasks.find(task => task.id === id);

  // InProgress থেকে remove
  setInProgressTasks(prev => prev.filter(task => task.id !== id));

  // Resolved list এ add
  setResolvedTasks(prev => [...prev, completedTask]);

  // Counter বাড়াও
  setResolvedCount(prev => prev + 1);
}

  return (
    <>
    <div>
      <Navbar />
      <State inProgressCount={inProgressTasks.length} resolvedCount={resolvedCount} />
      <Suspense fallback={<span className="loading loading-spinner"></span>}>
        <TicketBox 
          ticketPromise={ticketPromise} 
          handleAddToProgress={handleAddToProgress}
          inProgressTasks={inProgressTasks}
            resolvedTasks={resolvedTasks}
          handleComplete={handleComplete}
        />
      </Suspense>
    
      </div>
        <Footer />
    </>
    
  )
}

export default App
