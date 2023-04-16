import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from '../..'
import "../BlockPartners/BlockPartner.css"
const BlockPartner = () => {
    const { lang } = useContext(Context)
    return (
        <div className='block-partners'>
            <div className='container'>
                <div className='row g-4 align-items-center justify-content-center'>
                    {/* <div className='col-sm-6 col-md-4 col-lg-3 text-center'>
                        {
                            lang.lang === 'ru'
                                ? <NavLink to='/dealers_form' className='btn'>
                                    Заявка для дилеров
                                </NavLink>
                                : <NavLink to='/dealers_form' className='btn'>
                                    Application for dealers
                                </NavLink>
                        }

                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 text-center'>
                        {
                            lang.lang === 'ru'
                                ?
                                <NavLink to='/ambassadors' className='btn'>
                                    Заявка для амбассадоров
                                </NavLink>
                                :
                                <NavLink to='/ambassadors' className='btn'>
                                    Application for ambassadors
                                </NavLink>}
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 text-center'>
                        {
                            lang.lang === 'ru'
                                ?
                                <NavLink to='/partners' className='btn'>
                                    Прочее сотрудничество
                                </NavLink>
                                :
                                <NavLink to='/partners' className='btn'>
                                    Other collaborations
                                </NavLink>
                        }
                    </div> */}
                    <div className='col-sm-6 col-md-4 col-lg-3 text-center'>
                        {
                            lang.lang === 'ru'
                                ?
                                <NavLink to='/certificates' className='btn'>
                                    Сертификаты
                                </NavLink>
                                :
                                <NavLink to='/certificates' className='btn'>
                                    Certificates
                                </NavLink>
                        }
                    </div>
                    {/* <div className='col-sm-6 col-md-4 col-lg-3 text-center'>
                        {
                            lang.lang === 'ru'
                                ?
                                <NavLink to='/dealers' className='btn'>
                                    Дилеры
                                </NavLink>
                                :
                                <NavLink to='/dealers' className='btn'>
                                    Dealers
                                </NavLink>
                        }
                    </div> */}
                    <div className='col-sm-6 col-md-4 col-lg-3 text-center'>
                    {
                            lang.lang === 'ru'
                                ?
                        <NavLink to='/stores' className='btn'>
                            Наши магазины
                        </NavLink>
                        :
                        <NavLink to='/stores' className='btn'>
                            Our stores
                        </NavLink>
}
                    </div>
                </div>
            </div>
            <div className='separator'>

            </div>
        </div>
    )
}

export default observer(BlockPartner)