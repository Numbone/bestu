import React, { useContext } from 'react'
import "../BlockCatalog/BlockCatalog.css"
import ps from "../../img/1.jpg"
import ps2 from "../../img/2.jpg"
import ps3 from "../../img/3.jpg"
import ps4 from "../../img/4.jpg"
import ps5 from "../../img/5.jpg"
import { NavLink } from 'react-router-dom'
import { Context } from '../..'
import { observer } from 'mobx-react-lite'

const BlockCatalog = () => {
    const { lang } = useContext(Context)
    return (
        <div className='block-catalog'>
            <div className='container'>
                <div className='block__title text-center'>
                      {
                                        lang.lang == 'ru'
                    ?<NavLink to='/all_products'>Смотреть все товары</NavLink>
                    :<NavLink to='/all_products'>See all products</NavLink>
                      }
                    <br></br>
                    <br></br>
                     {
                                        lang.lang == 'ru'
                    ?
                    <NavLink to='/available'>Сейчас в наличии</NavLink>
                    :
                    <NavLink to='/available'>Available in stock</NavLink>
                     }
                </div>
                <div className='block-catalog__items'>
                    <div className='row g-2 g-md-4'>
                        <div className='col-sm-6'>
                            <div className='block-catalog__item  item item-square d-block'
                                style={{
                                    backgroundImage: `url("${ps}")`
                                }}>
                                <NavLink to='/body' className='img d-flex justify-content-center align-items-center flex-column '>
                                    <span className='block-catalog__item-title  notranslate'>
                                        body
                                    </span>
                                </NavLink>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className='block-catalog__item  item item-square d-block'
                                style={{
                                    backgroundImage: `url("${ps2}")`
                                }}>
                                <NavLink to='/beauty' className='img d-flex justify-content-center align-items-center flex-column'>
                                    <span className='block-catalog__item-title notranslate '>
                                        beauty
                                    </span>
                                </NavLink>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className='block-catalog__item  item item-square d-block'
                                style={{
                                    backgroundImage: `url("${ps3}")`
                                }}>
                                <NavLink to='/spa' className='img d-flex justify-content-center align-items-center flex-column'>
                                    <span className='block-catalog__item-title  '
                                        style={{ position: 'relative', bottom: '60px' }}>
                                        SPA
                                    </span>
                                    {
                                        lang.lang == 'ru'
                                            ? <span className='block-catalog__item-subtitle'
                                            >
                                                (большие объёмы продукции
                                                <br></br>
                                                для SPA-салонов и бьюти-мастеров)
                                            </span>
                                            :
                                            <span className='block-catalog__item-subtitle'
                                            >
                                                (large production volumes
                                                <br></br>
                                                for SPA-salons and beauty-masters)
                                            </span>
                                    }

                                </NavLink>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className='block-catalog__item  item item-square d-block'
                                style={{
                                    backgroundImage: `url("${ps4}")`
                                }}>
                                <NavLink to='/vouchers' className='img d-flex justify-content-center align-items-center flex-column'>
                                    {
                                        lang.lang == 'ru'
                                            ?
                                            <span className='block-catalog__item-title block-catalog__item-title--montserrat notranslate '>
                                                Подарочные сертификаты
                                            </span>
                                            : <span className='block-catalog__item-title block-catalog__item-title--montserrat notranslate '>

                                                Gift certificates
                                            </span>
                                    }

                                </NavLink>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className='block-catalog__item  item item-square d-block'
                                style={{
                                    backgroundImage: `url("${ps5}")`
                                }}>
                                <NavLink to='/packaging' className='img d-flex justify-content-center align-items-center flex-column'>
                                    {
                                        lang.lang == 'ru'
                                            ?
                                            <span className='block-catalog__item-title block-catalog__item-title--montserrat  notranslate'>
                                                Упаковка
                                            </span>
                                            :
                                            <span className='block-catalog__item-title block-catalog__item-title--montserrat  notranslate'>
                                                Package
                                            </span>

                                    }

                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default observer(BlockCatalog) 