import React from 'react'
import "../BlockPartners/BlockPartner.css"
const BlockPartner = () => {
    return (
        <div className='block-partners'>
            <div className='container'>
                <div className='row g-4 align-items-center justify-content-center'>
                    <div className='col-sm-6 col-md-4 col-lg-3 text-center'>
                        <a className='btn'>
                            Заявка для дилеров
                        </a>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 text-center'>
                        <a className='btn'>
                            Заявка для амбассадоров
                        </a>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 text-center'>
                        <a className='btn'>
                            Прочее сотрудничество
                        </a>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 text-center'>
                        <a className='btn'>
                            Сертификаты
                        </a>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 text-center'>
                        <a className='btn'>
                            Дилеры
                        </a>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 text-center'>
                        <a className='btn'>
                            Наши магазины
                        </a>
                    </div>
                </div>
            </div>
            <div className='separator'>

            </div>
        </div>
    )
}

export default BlockPartner