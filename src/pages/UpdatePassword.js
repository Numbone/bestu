import React, { useContext, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Context } from '..'
import { authChange, authLink } from '../api/auth'

const UpdatePassword = () => {
    const { lang } = useContext(Context)
    const [open, setOpen] = React.useState(false);
    const {search}=useLocation()
    const location=search.split("code=")[1]
    const email=search.split("code=")[0].split("=")[1].replace("&","")
    console.log(location)
    console.log((email));
    const handleOpen = () => {
        setOpen(!open);
    };
   const navigate=useNavigate()
    const [password, setPassword] = useState()
    const [change, setChange] = useState(false)
    const [code, setCode] = useState("")
    const [checker,setChecker]=useState(false)
    const getPassword = async (e) => {
        e.preventDefault()
        try {
            const data = await authLink(password)
            setChange(true)
            console.log(data)
            return data
        } catch (error) {
            console.log(error)
        } finally {
            setChecker(true)
        }

    }
    const getCode = async (e) => {
        e.preventDefault()
        try {
            const data = await authChange(email, location,password)
            setChange(true)
            console.log(data)
            return data
        } catch (error) {
            console.log(error)
        } finally {
            navigate("/login")
        }

    }
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
                                    {
                                        lang.lang == "ru" ? <>Магазин</> : <>Stores</>
                                    }

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
                                        {
                                            lang.lang == "ru" ? <>Магазин</> : <>Stores</>
                                        }

                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        : null
                }

            </nav>



            <div className='content-wrapper ' style={{ height: "100vh" }}>
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
                                                        lang.lang==="ru"?<>Восстановить аккаунт</>
                                                        :<>
                                                        Recover account</>
                                                    }
                                                    
                                                </div>
                                                <div className='card-body'>

                                                    <form>
                                                        <div className='form-group row'>
                                                            <label htmlFor="email" className="col-md-4 col-form-label text-md-right">
                                                            {
                                                                        lang.lang=="ru"?
                                                                        <>Пароль</>
                                                                        :<>Password</>
                                                                    }
                                                            </label>

                                                            <div className='col-md-6'>
                                                                <input className='form-control '
                                                                    id='email'
                                                                    type='password'
                                                                    onChange={(e) => setPassword(e.target.value)}></input>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className='form-group row mb-0'>
                                                            <div className='col-md-8 offset-md-4'>
                                                                <button onClick={getCode} className='btn2 btn-primary'>
                                                                {
                                                                        lang.lang=="ru"?
                                                                        <>Продолжить</>
                                                                        :<>Continue</>
                                                                    }
                                                                </button>

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

export default UpdatePassword