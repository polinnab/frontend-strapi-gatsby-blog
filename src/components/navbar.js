import { Link } from "gatsby"
import React from "react"

const Navbar = () => {
  return (
    <header className="bg-primary-200">
      <nav className="container flex flex-row items-baseline py-6">
        <Link to="/" className="text-xl font-medium nav-link">
          Home
        </Link>
        <Link to="/blog" className="text-xl font-medium nav-link">
          Blog
        </Link>
        <Link to="/information" className="text-xl font-medium nav-link">
          Information
        </Link>
        {/* <div className="flex flex-row items-baseline justify-end"> */}
          <Link className="text-xl font-medium nav-link" to="/about">
            About
          </Link>
        {/* </div> */}
      </nav>
    </header>
  )
}

export default Navbar