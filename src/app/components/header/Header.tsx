'use client'
import Navbar from '../NavBar/NavBar'

const Header = () => {
  return (
    <div className='sticky-header' style={{ background: "#020223" }}>
      <Navbar />
      <style jsx>{`
        .sticky-header {
          position: -webkit-sticky; /* For Safari */
          position: sticky;
          top: 0;
          z-index: 1000; /* Adjust as necessary */
          background-color: #84E1BC;  /* Adjust to match your design */
          padding: 1rem; /* Adjust padding as necessary */
         box-shadow: 0 4px 8px rgba(0, 0, 139, 0.3)
        }
      `}</style>
    </div>
  )
}

export default Header
