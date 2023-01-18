import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Context } from '../..'
import "../Footer/Footer.css"
import ozon from "../../img/ozon.png"
import wild from "../../img/wildberries.png"
const Footer = () => {
    const navi = useLocation()
    const { lang } = useContext(Context)
    return (
        <>
            {
                navi.pathname !== "/login" && navi.pathname !== "/reset" ?
                    <div>

                        <footer className='footer'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='mb-4'>
                                            <div className='d-flex align-items-center m-3'>
                                                <a className='img me-4'
                                                    href='https://www.ozon.ru/seller/le-mousse-337461/products/?miniapp=seller_337461'
                                                    target='_blank'
                                                    rel="noreferrer">
                                                    <img src={ozon} alt='props' style={{ width: '40px' }}>
                                                    </img>
                                                </a>
                                                <a target='_blank' rel="noreferrer"
                                                    href='https://www.ozon.ru/seller/le-mousse-337461/products/?miniapp=seller_337461'>
                                                    {
                                                        lang?.lang === "ru"
                                                            ? <>Мы на Ozon</>
                                                            : <>We are on Ozon</>
                                                    }

                                                </a>

                                            </div>
                                            <div className='d-flex align-items-center m-3'>
                                                <a className='img me-4'
                                                    href='https://www.wildberries.ru/brands/le-mousse'
                                                    target='_blank'
                                                    rel="noreferrer">
                                                    <img alt='props' src='https://thebestforyourself.ru/img/wildberries.png' style={{ width: '40px' }}>
                                                    </img>
                                                </a>
                                                <a target='_blank' rel="noreferrer"
                                                    href='https://www.wildberries.ru/brands/le-mousse'>
                                                    {
                                                        lang?.lang === "ru"
                                                            ? <> Мы на Wildberries</>
                                                            : <>We are on Wildberries</>
                                                    }

                                                </a>


                                            </div>
                                            {
                                                lang.lang === "ru"
                                                    ?
                                                    <>
                                                        ИП Нечаева Ольга Андреевна
                                                        <br></br>
                                                        ОГРН 320344300076171, ИНН 344115294608
                                                        <br></br>
                                                        <br></br>
                                                        Самовывоз: г.Волгоград, пр. Жукова 100б (Вход через магнит)
                                                        <br></br>
                                                        <br></br>
                                                        По вопросам самовывоза:
                                                        <br></br>
                                                        +79023125532
                                                        <br></br>
                                                        <br></br>
                                                        Телефон доступен в рабочее время с 9:00 до 18:00 (по Московскому времени)
                                                    </>
                                                    :
                                                    <>
                                                       SP Ovchinnikova Julia Igorevna
                                                        <br></br>
                                                        PSRN 321344300027087, TIN 344103083881
                                                        <br></br>
                                                        <br></br>
                                                        Pickup: Volgograd, Zhukov Ave. 100b (Entrance through a magnit shop)
                                                        <br></br>
                                                        <br></br>
                                                        For pickup questions:
                                                        <br></br>
                                                        +79023125532
                                                        <br></br>
                                                        <br></br>
                                                        The phone is available during business hours from 9:00 to 18:00 (Moscow time)
                                                    </>
                                            }


                                        </div>
                                    </div>
                                    {
                                        lang.lang === "ru"
                                            ?
                                            <div className='col-md-6'>
                                                По вопросам качества продукции:
                                                <br></br>
                                                +79375599919
                                                <br></br>
                                            </div>
                                            :
                                            <div className='col-md-6'>
                                                For product quality questions:
                                                <br></br>
                                                +79375599919
                                                <br></br>
                                            </div>
                                    }

                                    <div className='col-lg-7 mt-4'>
                                        <div className='item'
                                            style={{ fontSize: '1.2em' }}>
                                                {
                                                    lang?.lang==="ru"
                                                    ?
                                                    <>
                                                     Техническая поддержка:
                                                    </>
                                                    :
                                                    <>
                                                    Technical support:
                                                   </>
                                                }
                                           
                                            <br></br>
                                            <a href='https://t.me/thebestforyourself_bot'>
                                                t.me/thebestforyourself_bot
                                            </a>
                                            <br></br>
                                            <br></br>
                                        </div>
                                    </div>
                                    <div className='col-lg-7 order-last order-lg-0'>
                                        <div className='item'>
                                            <NavLink to='/ofertapage'
                                                style={{ textDecoration: 'underline' }}>
                                                    {
                                                            lang.lang==="ru"
                                                            ?<>Публичная оферта</>
                                                            :<>Public offer</>
                                                    }
                                             
                                            </NavLink>
                                            <br></br>
                                            <br></br>
                                            <NavLink to="/politicapage"
                                                style={{ textDecoration: 'underline' }}>
                                                     {
                                                            lang.lang==="ru"
                                                            ?<>  Политика обработки персональных данных</>
                                                            :<>Personal data processing policy</>
                                                    }
                                              
                                            </NavLink>
                                            <br></br>
                                            <br></br>
                                            <NavLink to='/login'
                                                style={{ textDecoration: 'underline' }}>
                                                     {
                                                            lang.lang==="ru"
                                                            ?<> Личный кабинет</>
                                                            :<>Private office</>
                                                    }
                                               
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>


                    </div>
                    : <div style={{ height: '100vh', backgroundColor: '#E7DBE2' }}></div>
            }
        </>
    )
}

export default observer(Footer)