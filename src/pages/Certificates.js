import React, { useContext } from 'react'
import '../pages/css/Certificate.css'
import ph from '../img/background.jpg'
import ph1 from '../img/img-01.jpg'
import ph2 from '../img/img-02.jpg'
import ph3 from '../img/img-03.jpg'
import ph4 from '../img/img-04.jpg'
import ph5 from '../img/img-05.jpg'
import ph6 from '../img/img-06.jpg'
import ph7 from '../img/img-07.jpg'
import ph8 from '../img/img-08.jpg'
import ph9 from '../img/img-09.jpg'
import ph10 from '../img/img-10.jpg'
import ph11 from '../img/img-11.jpg'
import ph12 from '../img/img-12.jpg'
import ph13 from '../img/img-13.jpg'
import ph14 from '../img/img-14.jpg'
import ph15 from '../img/img-15.jpg'
import ph16 from '../img/img-16.jpg'
import ph17 from '../img/img-17.jpg'
import ph18 from '../img/img-18.jpg'
import ph19 from '../img/img-19.jpg'
import ph20 from '../img/img-20.jpg'
import ph21 from '../img/img-21.jpg'
import ph22 from '../img/img-22.jpg'
import ph23 from '../img/img-23.jpg'
import LangStore from '../store/Lang'
import { Context } from '..'
import { observer } from 'mobx-react-lite'

const Certificates = () => {
    const { lang } = useContext(Context)
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='flex-1' style={{ minHeight: '100vh' }}>
            <div className='block-top category' style={{ backgroundImage: `url(${ph})` }}>
                <div className='d-flex justify-content-center'>
                    <div className='container'>
                        <div className='block-top__big-name'>
                            Le mousse
                        </div>
                    </div>
                </div>
            </div>
            <div className='block-catalog' style={{ paddingTop: '5em' }}>
                <div className='container'>
                    <div className='block-title my-4'>
                        <h2 style={{ fontSize: '1.5em' }}>
                            {
                                lang.lang === "ru" ? <>Сертификаты и декларации качества</>
                                    : <>
                                        Certificates and declarations of quality</>
                            }

                        </h2>
                    </div>
                    <div className='catalog'>
                        <div className='row g-3'>
                            <div className='col-12 col-md-4'>
                                <div className='img mb-3'  >
                                    <img src={ph1} style={{ height: "500px" }}>
                                    </img>
                                </div>
                                <p>
                                    Декларация. Мусс
                                </p>
                            </div>
                            <div className='col-12 col-md-4'>
                                <div className='img mb-3'  >
                                    <img src={ph2} style={{ height: "500px" }}>
                                    </img>
                                </div>
                                <p>
                                    Декларация. Скраб
                                </p>
                            </div>
                            <div className='col-12 col-md-4'>
                                <div className='img mb-3' >
                                    <img src={ph3} style={{ height: "500px" }}>
                                    </img>
                                </div>
                                <p>
                                    Декларация. Соль
                                </p>
                            </div>
                            <div className='col-12 col-md-4'>
                                <div className='img mb-3' >
                                    <img src={ph4} style={{ height: "500px" }}>
                                    </img>
                                </div>
                                <p>
                                    Декларация. Масло для загара
                                </p>
                            </div>
                            <div className='col-12 col-md-4'>
                                <div className='img mb-3'  >
                                    <img src={ph5} style={{ height: "500px" }}>
                                    </img>
                                </div>
                                <p>
                                    Декларация. Масло для кутикулы
                                </p>
                            </div>
                            <div className='col-12 col-md-4'>
                                <div className='img mb-3'  >
                                    <img src={ph6} style={{ height: "500px" }}>
                                    </img>
                                </div>
                                <p>
                                    Декларация. Моно-масла
                                </p>
                            </div>
                            <div className='col-12 col-md-4'>
                                <div className='img mb-3'  >
                                    <img src={ph7} style={{ height: "500px" }}>
                                    </img>
                                </div>
                                <p>
                                    Декларация. Бальзам для губ
                                </p>
                            </div>
                            <div className='col-12 col-md-4'>
                                <div className='img mb-3'  >
                                    <img src={ph8} style={{ height: "500px" }}>
                                    </img>
                                </div>
                                <p>
                                    Декларация. Масло для ванны
                                </p>
                            </div>
                            <div className='col-12 col-md-4'>
                                <div className='img mb-3'  >
                                    <img src={ph9} style={{ height: "500px" }}>
                                    </img>
                                </div>
                                <p>
                                    Декларация. Гель для душа
                                </p>
                            </div>
                            <div className='col-12 col-md-4'>
                                <div className='img mb-3'  >
                                    <img src={ph10} style={{ height: "500px" }}>
                                    </img>
                                </div>
                                <p>
                                    Декларация. Масло для бровей
                                </p>
                            </div>
                            <div className='col-12 col-md-4'>
                                <div className='img mb-3'  >
                                    <img src={ph11} style={{ height: "500px" }}>
                                    </img>
                                </div>
                                <p>
                                    Декларация. Extra мусс
                                </p>
                            </div>
                            <div className='col-12 col-md-4'>
                                <div className='img mb-3' >
                                    <img src={ph12} style={{ height: "500px" }}>
                                    </img>
                                </div>
                                <p>
                                    Декларация. Масло-активатор для роста ресниц
                                </p>
                            </div>
                            <div className='col-12 col-md-4'>
                                <div className='img mb-3' >
                                    <img src={ph13} style={{ height: "500px" }}>
                                    </img>
                                </div>
                                <p>
                                    Декларация. Масло для загара
                                </p>
                            </div>
                            <div className='col-12 col-md-4'>
                                <div className='img mb-3' >
                                    <img src={ph14} style={{ height: "500px" }}>
                                    </img>
                                </div>
                                <p>
                                    Декларация. Охлаждающий скраб
                                </p>
                            </div>
                            <div className='col-12 col-md-4'>
                                <div className='img mb-3'  >
                                    <img src={ph15} style={{ height: "500px" }}>
                                    </img>
                                </div>
                                <p>
                                    Декларация. Молочко для тела
                                </p>
                            </div>
                            <div className='col-12 col-md-4'>
                                <div className='img mb-3'  >
                                    <img src={ph16} style={{ height: "500px" }}>
                                    </img>
                                </div>
                                <p>
                                    Декларация. Моно-масло миндаля, персика
                                </p>
                            </div>
                            <div className='col-12 col-md-4'>
                                <div className='img mb-3'  >
                                    <img src={ph17} style={{ height: "500px" }}>
                                    </img>
                                </div>
                                <p>
                                    Декларация. Скраб для лица
                                </p>
                            </div>
                            <div className='col-12 col-md-4'>
                                <div className='img mb-3'  >
                                    <img src={ph18} style={{ height: "500px" }}>
                                    </img>
                                </div>
                                <p>
                                    Декларация. Пенка для лица
                                </p>
                            </div>
                            <div className='col-12 col-md-4'>
                                <div className='img mb-3'  >
                                    <img src={ph19} style={{ height: "500px" }}>
                                    </img>
                                </div>
                                <p>
                                    Декларация. Мицеллярная вода
                                </p>
                            </div>
                            <div className='col-12 col-md-4'>
                                <div className='img mb-3'  >
                                    <img src={ph17} style={{ height: "500px" }}>
                                    </img>
                                </div>
                                <p>
                                    Декларация. Крем для лица
                                </p>
                            </div>
                            <div className='col-12 col-md-4'>
                                <div className='img mb-3'  >
                                    <img src={ph18} style={{ height: "500px" }}>
                                    </img>
                                </div>
                                <p>
                                    Декларация. Скраб "Солнце Африки"
                                </p>
                            </div>
                            <div className='col-12 col-md-4'>
                                <div className='img mb-3' >
                                    <img src={ph19} style={{ height: "500px" }}>
                                    </img>
                                </div>
                                <p>
                                    Декларация. Молочко для тела
                                </p>
                            </div>
                            <div className='col-12 col-md-4'>
                                <div className='img mb-3' >
                                    <img src={ph20} style={{ height: "500px" }}>
                                    </img>
                                </div>
                                <p>
                                    Декларация. Лосьен для рук
                                </p>
                            </div>
                            <div className='col-12 col-md-4'>
                                <div className='img mb-3' >
                                    <img src={ph21} style={{ height: "500px" }}>
                                    </img>
                                </div>
                                <p>
                                    Декларация. Крем для лица (бергамот)
                                </p>
                            </div>
                            <div className='col-12 col-md-4'>
                                <div className='img mb-3'  >
                                    <img src={ph22} style={{ height: "500px" }}>
                                    </img>
                                </div>
                                <p>
                                    Декларация. Масло массажное в форме свечи
                                </p>
                            </div>
                            <div className='col-12 col-md-4'>
                                <div className='img mb-3'  >
                                    <img src={ph23} style={{ height: "500px" }}>
                                    </img>
                                </div>
                                <p>
                                    Декларация. Скраб для лица (бергамот)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  observer(Certificates) 