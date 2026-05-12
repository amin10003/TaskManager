import React from 'react'

function Navbar() {
  return (
    <>
    <nav className="bg-black text-white p-4 flex gap-6">
       < Link to ="/">Home</Link>
       < Link to ="/cart">Cart</Link>
      <Link to ="/login">Login</Link>

    </nav>
    </>
  )
}

export default Navbar