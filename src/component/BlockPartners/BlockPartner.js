import React from 'react'
import { NavLink } from 'react-router-dom'
import "../BlockPartners/BlockPartner.css"
const BlockPartner = () => {
    return (
        <div className='block-partners'>
            <div className='container'>
                <div className='row g-4 align-items-center justify-content-center'>
                    <div className='col-sm-6 col-md-4 col-lg-3 text-center'>
                        <NavLink to='/dealers_form' className='btn'>
                            Заявка для дилеров
                        </NavLink>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 text-center'>
                        <NavLink to='/ambassadors' className='btn'>
                            Заявка для амбассадоров
                        </NavLink>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 text-center'>
                        <NavLink to='/partners' className='btn'>
                            Прочее сотрудничество
                        </NavLink>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 text-center'>
                        <NavLink to='/certificates' className='btn'>
                            Сертификаты
                        </NavLink>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 text-center'>
                        <NavLink to='/dealers' className='btn'>
                            Дилеры
                        </NavLink>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 text-center'>
                        <NavLink to='/stores' className='btn'>
                            Наши магазины
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className='separator'>

            </div>
        </div>
    )
}

export default BlockPartner