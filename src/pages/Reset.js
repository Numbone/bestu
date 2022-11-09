import React from 'react'
import { NavLink } from 'react-router-dom'

const Reset = () => {
    return (
        <>
            <nav className='main-header navbar navbar-expand-md navbar-light navbar-white' style={{ minHeight: '100%' }}>
                <div className='container-fluid'>
                    <button class="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="true" aria-label="Toggle navigation">
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
                                                    <label for='email' className='col-md-4 col-form-label text-md-right'>
                                                        Email
                                                    </label>
                                                    <div className='col-md-6'>
                                                        <input className='form-control '
                                                            id='email'
                                                            type='email'></input>
                                                    </div>
                                                </div>

                                                <div className='form-group row mb-0'>
                                                    <div className='col-md-8 offset-md-4'>
                                                        <button type='submit' className='btn2 btn-primary'>
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