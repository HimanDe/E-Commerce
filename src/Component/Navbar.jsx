import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import logo1 from './logo1.png'
import cartConstext from '../ContextApi/CartContext'

const Navbar = () => {
  let cartCtx = useContext(cartConstext)
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white fixed-top" >
        <div className="container-fluid">
          <img src={logo} style={{width:'70px'}} alt="Logo" />
          <img src={logo1} style={{width:'70px'}} alt="Logo" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex m-md-auto" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-dark" type="submit">Search</button>
            </form>
            <div className='col-6.5'>
            <ul className="navbar-nav me-md-2 gap-3" >
              <li className="nav-item">
                <Link className="nav-link active" style={{color:'black', fontWeight:600}} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" style={{color:'black', fontWeight:600}} aria-current="page" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" style={{color:'black', fontWeight:600}} aria-current="page" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" style={{color:'black', fontWeight:600}} aria-current="page" to="/cart">Cart🛒<sup>{cartCtx.cartArr.length}</sup></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" style={{color:'black', fontWeight:600}} aria-current="page" to="/service">Service</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" style={{color:'black', fontWeight:600}} aria-current="page" to="/logIn">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" style={{color:'black', fontWeight:600}} aria-current="page" to="/logOut">Logout</Link>
              </li>
              
            </ul>
            </div>
          </div>
        </div>
      </nav>

    </div>


  )
}

export default Navbar
