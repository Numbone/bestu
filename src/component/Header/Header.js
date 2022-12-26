import React, { useState } from 'react'
import "../Header/Header.css"
import logo from "../../img/logo.svg"
import search from "../../img/icon-search.svg"
import cabinet from "../../img/icon-user.svg"
import cart from "../../img/icon-cart.svg"
import { Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom'
import Modal from '../Modal/Modal'
import { Context } from '../..'
import { useContext } from 'react'
import { observer } from 'mobx-react-lite'
const Header = () => {
  const navigation = useLocation()
  const { basket } = useContext(Context)

  const [modal, setModal] = useState(false)
  const navigate = useNavigate()
  const [search1, setSeacrh1] = useState("")
  return (
    <div>
      {
        navigation.pathname !== "/login" && navigation.pathname !== "/reset" ?
          <header className="header d-flex align-items-center" >
            <div className="container container-xxl">
              <div className=' d-flex justify-content-between align-items-center'>
                <div className='header-mobile header__column header__column--first'>
                  <button style={{ backgroundColor: 'transparent' }} onClick={() => setModal(true)}>
                    <img alt='props' src={search} >
                    </img>
                  </button>
                </div>
                <div className='header_computer header__column header__column--first'>
                  <div className='header__subtitle' data-da="header__column--center,last,768" data-da-index="0">
                    Косметика <br></br> из натуральных масел
                  </div>
                </div>
                <div className='header-mobile  header__column header__column--center text-center'>
                  <NavLink to='/' className='header__logo img' >
                    <img alt='props' src={logo}></img>
                  </NavLink>
                  <div className='header__subtitle' data-da="header__column--center,last,768" data-da-index="0">
                    Косметика  из натуральных масел
                  </div>
                </div>
                <div className='header_computer header__column header__column--center text-center'>
                  <NavLink to='/' className='header__logo img' >
                    <img alt='props' src={logo}></img>
                  </NavLink>
                </div>
                <div className='header-mobile header__column'>
                  <div className='header__buttons d-flex justify-content-end'>
                    <div className='cabinet-button'>
                      <NavLink to='/login'>
                        <img alt='props' src={cabinet}>
                        </img>
                      </NavLink>
                    </div>
                    <div className='cart-button'>
                      <NavLink to='/order' style={{ display: 'flex', alignItems: "flex-end" }}>
                        <img alt='props' src={cart}>
                        </img>
                        {basket.Basket.length > 0
                          ? <div className='box-order'>
                            {basket?.Basket?.length}
                          </div>
                          : null
                        }

                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className='header_computer header__column'>
                  <div className='header__buttons d-flex justify-content-end'>
                    <div className='search-button' data-da="header__column--first,first,768" data-da-index="1">
                      <button style={{ backgroundColor: 'transparent' }} onClick={() => setModal(true)}>
                        <img alt='props' src={search} >
                        </img>
                      </button>
                    </div>
                    <div className='cabinet-button'>
                      <NavLink to='/login'>
                        <img alt='props' src={cabinet}>
                        </img>
                      </NavLink>
                    </div>
                    <div className='cart-button'>
                      <NavLink to='/order' style={{ display: 'flex', alignItems: "flex-end" }}>
                        <img alt='props' src={cart}>
                        </img>
                        {basket.Basket.length > 0
                          ? <div className='box-order'>
                            {basket?.Basket?.length}
                          </div>
                          : null
                        }

                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>


              <Modal active={modal} setActive={setModal}>
                <div className='fancybox__content'>
                  <form >
                    <div className='form-field position-relative'>
                      <input type='text' placeholder="Введите слово для поиска" onChange={(e) => setSeacrh1(e.target.value)}>
                      </input>
                      <NavLink to={"/search"} state={search1}  >
                        <button className='btn-search' onClick={()=>setModal(false)}>
                          <img alt='props' src={search}></img>
                        </button>
                        {/* onClick={()=>navigate(`search?wolrd=${search1}`)} */}

                      </NavLink>
                    </div>
                  </form>
                  <button className='carousel__button is-close'
                  onClick={()=>setModal(false)}
                    style={{
                      fontSize: '34px',
                      color: 'white',
                      position: 'absolute',
                      top: '-50px',
                      right: '20px',
                      backgroundColor: ' rgba(0, 0, 0, 0)'
                    }} >
                    X
                  </button>
                </div>
              </Modal>
            </div>

          </header>
          :
          <div>

          </div>
      }
    </div>
  )
}

export default observer(Header) 