'use client'
import Navbar from '../NavBar/NavBar'

const Header = () => {
  return (
    <div className='sticky-header'>
      <Navbar />
      <style jsx>{`
        .sticky-header {
          position: -webkit-sticky; /* For Safari */
          position: sticky;
        
          top: 0;
          z-index: 1000; /* Adjust as necessary */
          background-color: white; /* Adjust to match your design */
          padding: 1rem; /* Adjust padding as necessary */
          box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Optional: Add a shadow for better visibility */
        }
      `}</style>
    </div>
  )
}

export default Header
