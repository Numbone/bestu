import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { Context } from '../..';

const Commentary = () => {
    const { lang } = useContext(Context)
    const { user } = useContext(Context)
    const [open, setOpen] = React.useState(false);
    const logout = () => {
        user.setIsAuth(false)
        localStorage.removeItem("access")
        localStorage.removeItem("refresh")
    }
    const handleOpen = () => {
        setOpen(!open);
    };
    return (
        <div className="content-wrapper">
            <nav className='main-header navbar navbar-expand-md navbar-light navbar-white' style={{ minHeight: '100%', background: 'white' }}>
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
                    <div className=''>
                        <div className="bd-example">
                            <h3 ></h3>
                            <h2 style={{ borderBottom: '1px solid #ececec' }}>Оставить отзыв</h2>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Commentary