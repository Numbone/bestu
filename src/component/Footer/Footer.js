import React from 'react'
import "../Footer/Footer.css"
const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='mb-4'>
                            <div className='d-flex align-items-center m-3'>
                                <a className='img me-4'
                                    href='https://www.ozon.ru/seller/le-mousse-337461/products/?miniapp=seller_337461'
                                    target='_blank'
                                    rel='nofollow'>
                                    <img src='https://thebestforyourself.ru/img/ozon.png' style={{ width: '40px' }}>
                                    </img>
                                </a>
                                <a target='_blank' rel='nofollow'
                                    href='https://www.ozon.ru/seller/le-mousse-337461/products/?miniapp=seller_337461'>
                                    Мы на Ozon
                                </a>

                            </div>
                            <div className='d-flex align-items-center m-3'>
                                <a className='img me-4'
                                    href='https://www.wildberries.ru/brands/le-mousse'
                                    target='_blank'
                                    rel='nofollow'>
                                    <img src='https://thebestforyourself.ru/img/wildberries.png' style={{ width: '40px' }}>
                                    </img>
                                </a>
                                <a target='_blank' rel='nofollow'
                                    href='https://www.wildberries.ru/brands/le-mousse'>
                                    Мы на Wildberries
                                </a>

                            </div>
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
                        </div>
                    </div>
                    <div className='col-md-6'>
                        По вопросам качества продукции:
                        <br></br>
                        +79375599919
                        <br></br>
                    </div>
                    <div className='col-lg-7 mt-4'>
                        <div className='item'
                            style={{ fontSize: '1.2em' }}>
                            Техническая поддержка:
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
                            <a href='https://thebestforyourself.ru/page/ofertahttps://thebestforyourself.ru/page/oferta'
                                style={{ textDecoration: 'underline' }}>
                                Публичная оферта
                            </a>
                            <br></br>
                            <br></br>
                            <a href='https://thebestforyourself.ru/page/politika'
                                style={{ textDecoration: 'underline' }}>
                                Политика обработки персональных данных
                            </a>
                            <br></br>
                            <br></br>
                            <a href='https://thebestforyourself.ru/cabinet'
                                style={{ textDecoration: 'underline' }}>
                                Личный кабинет
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer