import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
<h1 className="text-xl font-bold">
    E-commerce
</h1>
<div className="flex gap-4 text-2xl text-white">
<Link to ="/" Home>Home</Link>
<Link to ="/cart" Cart>Cart</Link>
<Link to ="/login" Login>login</Link>
</div>
    </nav>
  )
}

export default Navbar