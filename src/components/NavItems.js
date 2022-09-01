import React from 'react'
import './NavItems.css'
const NavItems = () => {
  return (
    <div className="navbar">
        <div className="navbar-items">
            <ul>
               <li><a href="https://www.tiktok.com/@queriaprogramar" target="_blank"><i class="fa-brands fa-tiktok"></i></a></li>
               <li><a href="https://github.com/DaviProgramming" target="_blank"><i class="fa-brands fa-github"></i></a></li>
               <li><a href="https://www.instagram.com/asdavidoliveira/" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
               <li><a href="https://www.linkedin.com/in/david-oliveira-077a77212/" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
            </ul>
        </div>
    </div>
  )
}

export default NavItems