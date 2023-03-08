import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <>
      <div>HomePage</div>
      <button><Link to="/stylists">Find Stylists</Link></button>
      <button><Link to="/post">Post as a Stylist</Link></button>

    </>
  )
}

export default HomePage