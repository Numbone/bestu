import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from '..';
import { authSignin } from '../api/auth';
import './css/Login.css'
import { observer } from 'mobx-react-lite';
const Login = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const [username, setUser] = useState()
  const [password, setPassword] = useState()
  const [data, setData] = useState({})
  const { user } = useContext(Context)
  const getToken = async () => {
    const data = await authSignin(username, password)
    setData(data)
  }
  // useEffect(()=>{
  //   getToken()
  // },[])
  console.log(data);
  return (
    <>
      <nav className='main-header navbar navbar-expand-md navbar-light navbar-white' style={{ minHeight: '100%' }}>
        <div className='container-fluid'>
          <button
            onClick={handleOpen}
            className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="true" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className='navbar-collapse order-3 collapse'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink to='/' className='nav-link'>
                  Магазин
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {
          open
            ? <div>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <NavLink to='/' className='nav-link'>
                    Магазин
                  </NavLink>
                </li>
              </ul>
            </div>
            : null
        }

      </nav>



      <div className='content-wrapper'>
        <div className='content-header'>
          <div className='container-fluid'>
            <div className='row mb-2'>
              <div className='col-sm-6'>
                <div className='m-0'>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='content'>
          <div className='container-fluid'>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-md-8'>
                  <div className='card'>
                    <div className='card-header'>
                      Вход в кабинет
                    </div>
                    <div className='card-body'>
                      <p className='text-center mt-3'>
                        Данные для входа были отправлены на ваш email, после оформления заказа
                      </p>
                      <form>
                        <div className='form-group row'>
                          <label htmlFor="email" classname="col-md-4 col-form-label text-md-right">
                            Email
                          </label>

                          <div className='col-md-6'>
                            <input className='form-control '
                              id='email'
                              type='email'
                              onChange={(e) => setUser(e.target.value)}></input>
                          </div>
                        </div>
                        <div className='form-group row'>
                          <label htmlFor="password" classname="col-md-4 col-form-label text-md-right">
                            Пароль
                          </label>

                          <div className='col-md-6'>
                            <input className='form-control '
                              id='password'
                              type='password'
                              onChange={(e) => setPassword(e.target.value)}></input>
                          </div>
                        </div>
                        <div className='form-group row mb-0'>
                          <div className='col-md-8 offset-md-4'>
                            <div onClick={getToken} className='btn2 btn-primary'>
                              Войти
                            </div>
                            <NavLink to='/reset' className='btn2 btn-link' href='#'>
                              Не помню пароль
                            </NavLink>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default observer(Login)