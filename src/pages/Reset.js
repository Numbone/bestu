import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { authChange } from '../api/auth'

const Reset = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };
    const [password, setPassword] = useState()
    const getPassword = async (e) => {
        e.preventDefault()
        try {
            const data = await authChange(password)
            return data
        } catch (error) {
            console.log(error)
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
                                            Восстановить пароль
                                        </div>
                                        <div className='card-body'>

                                            <form>
                                                <div className='form-group row'>
                                                    <label htmlFor="email" className="col-md-4 col-form-label text-md-right">
                                                        Email
                                                    </label>

                                                    <div className='col-md-6'>
                                                        <input className='form-control '
                                                            id='email'
                                                            type='email'
                                                            onChange={(e) => setPassword(e.target.value)}></input>
                                                    </div>
                                                </div>

                                                <div className='form-group row mb-0'>
                                                    <div className='col-md-8 offset-md-4'>
                                                        <button onClick={getPassword} className='btn2 btn-primary'>
                                                            Продолжить
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

export default Reset