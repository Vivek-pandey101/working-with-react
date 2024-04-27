import React from 'react'
import { NavLink} from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <header>
        <nav>
            <div className='container'>
              <h2>MyLogo</h2>
              <div className="links">
               <NavLink to='/' activeclassname = 'active'>Home</NavLink>
               <NavLink to='/projects' activeclassname = 'active'>Project</NavLink>
               <NavLink to='/about' activeclassname = 'active'>About</NavLink>
              </div>
               <div className="input">
                <input type="search" placeholder='Search here...'/>
                <button>Search</button>
               </div>
            </div>
        </nav>
    </header>
  )
}

export default Header