import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from '..';
import { authSignin } from '../api/auth';
import './css/Login.css'
import { observer } from 'mobx-react-lite';
import { getUser } from '../api/user';
import Moment from 'react-moment';

import ModalForOrder from '../component/ModalForOrder/ModalForOrder';
import { format } from 'date-fns';

const Login = () => {
  const [checker, setChecker] = useState(false)
  const { lang } = useContext(Context)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const [username, setUser] = useState()
  const [password, setPassword] = useState()
  const [data, setData] = useState({})
  const [userData, setUserData] = useState()
  const [modalShow, setModalShow] = useState(false);
  const { user } = useContext(Context)
  const getToken = async (e) => {
    try {
      e.preventDefault()
      const { data } = await authSignin(username, password)
      setData(data)
      user.setIsAuth(true)
    
      localStorage.setItem("access", data.access_token)
      localStorage.setItem("refresh", data.refresh_token)
    } catch (error) {

    } finally {
      setChecker(true)
    }


  }
  const getUserContent = async () => {
    try {
      const data = await getUser(username, password)
      for (let i = 0; i < data?.Transactions.length; i++) {
        let element = data?.Transactions[i];
   
        const date = new Date(element?.date);
      
        date.setHours(date.getHours() - 6);
      
        const formattedDate = format(date, "yyyy-MM-dd'T'HH:mm:ss.SSS");
        element.date=formattedDate
      }
      setUserData(data)
      user.setUserName(data?.User)
     
    } catch (error) {

    }


  }


  ///// validation //// 
  const [emailValidation, setEmailValidation] = useState("")
  const [passwordValidation, setPasswordValidation] = useState("")
  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [emailError, setEmailError] = useState("Заполните поле")
  const [passwordError, setPasswordError] = useState("Заполните поле")

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'emailValidation':
        setEmailDirty(true)
        break
      case 'passwordValidation':
        setPasswordDirty(true)
        break

    }
  }

  const emailHandler = (e) => {
    setUser(e.target.value)
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный email')
    } else {
      setEmailError("")
    }
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 3) {
      setPasswordError('Пароль не может быть меньше 3 символов')
      if (!e.target.value) {
        setPasswordError('Пароль не может быть меньше 3 символов')
      }
    } else {
      setPasswordError('')
    }
  }
  const [modalIndex, setModalIndex] = useState(0)
  const openModalforOrder = (index) => {
    setModalShow(true)
    setModalIndex(index)
  }

  const [formValid, setFormvalid] = useState(false)
  useEffect(() => {
    if (emailError || passwordError) {
      setFormvalid(false)
    } else {
      setFormvalid(true)
    }
  }, [emailError, passwordError])

  ///logout
  const logout = () => {
    user.setIsAuth(false)
    localStorage.removeItem("access")
    localStorage.removeItem("refresh")
  }
  useEffect(() => {
    getUserContent()
  }, [user.isAuth])
  useEffect(() => {
    window.scrollTo(0, 10)
  }, [window.location])
  
  return (
    <>
      <nav className='main-header navbar navbar-expand-md navbar-light navbar-white' style={{ minHeight: '100%' }}>
        <div className='container-fluid'>
          <button
            onClick={handleOpen}
            className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="true" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className='navbar-collapse order-3 collapse' >
            <ul className='navbar-nav' style={{ width: '100%' }}>
              <li className='nav-item'>
                <NavLink to='/' className='nav-link'>
                  {
                    lang?.lang === "ru"
                      ? <>Магазин</>
                      : <>Shop</>
                  }

                </NavLink>
              </li>

            </ul>
            {
              user.isAuth
                ? <button
                  onClick={() => logout()}
                  style={{ float: 'right', backgroundColor: 'transparent' }}
                  className='nav-link'>
                  {
                    lang?.lang === "ru"
                      ? <>Выход</>
                      : <>Exit</>
                  }

                </button>
                : null
            }
          </div>
        </div>
        {
          open
            ?
            <div>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <NavLink to='/' className='nav-link'>
                    {
                      lang?.lang === "ru"
                        ? <>Магазин</>
                        : <>Shop</>
                    }
                  </NavLink>
                </li>
                {
                  user.isAuth
                    ? <button
                      onClick={() => logout()}
                      style={{ float: 'right', backgroundColor: 'transparent' }}
                      className='nav-link'>
                      {
                        lang?.lang === "ru"
                          ? <>Выход</>
                          : <>Exit</>
                      }
                    </button>
                    : null
                }

              </ul>
            </div>
            : null
        }

      </nav>


      {
        !user.isAuth
          ? <div className='content-wrapper' style={{ height: "100vh" }}>
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
                          {
                            lang?.lang === "ru"
                              ? <> Вход в кабинет</>
                              : <>Entrance to the office</>
                          }

                        </div>
                        <div className='card-body'>
                          <p className='text-center mt-3'>
                            {
                              lang?.lang === "ru"
                                ? <>Данные для входа были отправлены на ваш email, после оформления заказа</>
                                : <>Login information was sent to your email after placing an order</>
                            }

                          </p>

                          <div className='form-group row'>


                            <label htmlFor="email" className="col-md-4 col-form-label text-md-right">
                              Email
                            </label>

                            <div className='col-md-6'>
                              <input className='form-control'

                                name='emailValidation'

                                onChange={(e) => setUser(e.target.value)}
                                placeholder={lang.lang === "ru" ? "Введите email" : "Enter email"}>
                              </input>
                            </div>
                            {(emailDirty && emailError) &&
                              <>
                                <div className='col-md-4 col-form-label text-md-right'>

                                </div>
                                <div className='col-md-6 ' style={{ color: 'red' }}>
                                  {emailError}
                                </div>
                              </>
                            }
                          </div>



                          <div className='form-group row'>
                            <label htmlFor="password" className="col-md-4 col-form-label text-md-right">
                              {
                                lang?.lang === "ru"
                                  ? <>Пароль</>
                                  : <>Password</>
                              }

                            </label>

                            <div className='col-md-6'>
                              <input className='form-control '
                                name='passwordValidation'
                                type='password'
                                placeholder={lang.lang === "ru" ? 'Введите пароль' : "Enter password"}
                                onChange={(e) => setPassword(e.target.value)}></input>
                            </div>
                            {(passwordDirty && passwordError) &&
                              <>
                                <div className='col-md-4 col-form-label text-md-right'>

                                </div>
                                <div className='col-md-6 ' style={{ color: 'red' }}>
                                  {passwordError}
                                </div>
                              </>
                            }
                          </div>
                          {
                            checker
                              ? <div className='form-group row'>


                                <label htmlFor="email" className="col-md-4 col-form-label text-md-right">

                                </label>

                                <div className='col-md-6'>
                                  {
                                    lang.lang === "ru" ?
                                      <>Неправильный пароль или email </>
                                      : <>Incorrect password or email</>
                                  }
                                </div>
                              </div>
                              : null
                          }

                          <div className='form-group row mb-0'>
                            <div className='col-md-8 offset-md-4'>
                              <button onClick={(e) => getToken(e)} className='btn2 btn-primary'>
                                {
                                  lang?.lang === "ru"
                                    ? <>Войти</>
                                    : <>Login</>
                                }

                              </button>
                              <NavLink to='/reset' className='btn2 btn-link' href='#'>
                                {
                                  lang?.lang === "ru"
                                    ? <>Не помню пароль</>
                                    : <>Forget password</>
                                }

                              </NavLink>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          : <>
            <div className='content-wrapper' style={{ height: "100vh" }}>
              <div className='content-header'>
                <div className='container-fluid'>
                  <div className='container'>
                    <div className='row mb-2'>
                      <div className='col-sm-6'>
                        <div className='m-0'>
                          <h3>
                            {
                              lang?.lang === "ru"
                                ? <>   Мои заказы</>
                                : <>My orders</>
                            }
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='content'>
                <div className='container-fluid'>
                  <div className='container'>
                    <div className="bd-example">
                      <h4 style={{fontWeight:"600"}}> {
                              lang?.lang === "ru"
                                ? <>  Срок хранение заказов</>
                                : <>Lead time for orderss</>
                            }</h4>
                      <div className='mt-2'>
                      {
                              lang?.lang === "ru"
                                ? <>   Почта России -14 дней</>
                                : <>Russian Post -14 days</>
                            }
                       
                      </div>
                      <div className='mt-2'>
                      {
                              lang?.lang === "ru"
                                ? <>     Boxberry -14 дней</>
                                : <> Boxberry -14 days</>
                            }
                      
                      </div>
                      <div className='mt-2'>
                      {
                              lang?.lang === "ru"
                                ? <>      CDEK ПВЗ -14 дней</>
                                : <> CDEK PVZ -14 dayss</>
                            }
                       
                      </div>
                      <div className='mt-2'>
                      {
                              lang?.lang === "ru"
                                ? <>       CDEK Постамат -3 дней</>
                                : <>CDEK Postamat -3 days</>
                            }
                       
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='content'>
                <div className='container-fluid'>
                  <div className='container'>
                    <table className="table-order table">
                      <thead>
                        <tr>
                          <th scope="col">
                            {
                              lang?.lang === "ru"
                                ? <>   Номер заказа</>
                                : <>Order number</>
                            }
                          </th>
                          <th scope="col">
                            {
                              lang?.lang === "ru"
                                ? <>   Сумма</>
                                : <>Sum</>
                            }
                          </th>
                          <th scope="col">
                            {
                              lang?.lang === "ru"
                                ? <>   Дата</>
                                : <>Date</>
                            }
                          </th>
                          <th scope="col">
                            {
                              lang?.lang === "ru"
                                ? <>   Статус заказа</>
                                : <>Order status</>
                            }</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          userData?.Transactions.map((item, index) =>
                            <>
                              <tr>
                                <th scope="row">{item.id}</th>
                                <td>{item.total_cost}</td>
                                <td><Moment format="DD/MM/YYYY HH:mm:ss" locale='kz'>{item.date}</Moment></td>
                                <td onClick={() => openModalforOrder(index)}>
                                  {
                                    lang?.lang === "ru"
                                      ? <>  Открыть статус заказа</>
                                      : <>Open order status</>
                                  }</td>
                              </tr>

                            </>

                          )
                        }
                        <ModalForOrder
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                          data={userData?.Transactions[modalIndex]?.products}
                          totalCosts={userData?.Transactions[modalIndex]?.total_cost}
                          status={userData?.Transactions[modalIndex]?.status[userData?.Transactions[modalIndex]?.status.length-1]?.status_text} />



                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

          </>
      }

    </>
  )
}

export default observer(Login)