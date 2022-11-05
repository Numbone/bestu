import React from 'react'
import "../Header/Header.css"
import logo from "../../img/logo.svg"
import search from "../../img/icon-search.svg"
import cabinet from "../../img/icon-user.svg"
import cart from "../../img/icon-cart.svg"
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <header className="header d-flex align-items-center">
      <div className="container container-xxl">
        <div className='d-flex justify-content-between align-items-center'>
          <div className='header__column header__column--first'>
            <div className='header__subtitle' data-da="header__column--center,last,768" data-da-index="0">
              Косметика <br></br> из натуральных масел
            </div>
          </div>
          <div className='header__column header__column--center text-center'>
            <NavLink to='/' className='header__logo img' >
              <img src={logo}></img>
            </NavLink>
          </div>
          <div className='header__column'>
            <div className='header__buttons d-flex justify-content-end'>
              <div className='search-button' data-da="header__column--first,first,768" data-da-index="1">
                <a href='#'>
                  <img src={search} >
                  </img>
                </a>
              </div>
              <div className='cabinet-button'>
                <a href='#'>
                  <img src={cabinet}>
                  </img>
                </a>
              </div>
              <div className='cart-button'>
                <a href='#'>
                  <img src={cart}>
                  </img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header