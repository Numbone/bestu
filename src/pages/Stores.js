import { observer } from 'mobx-react-lite'
import React, { useContext, useState } from 'react'
import { Context } from '..'

const Stores = () => {
    const {lang}=useContext(Context)
    React.useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className='block-page-order'>
            <div className='container'>
                <div className='text-center mb-5'>
                    {
                        lang.lang==="ru"
                        ? <h2>Наши магазины</h2>
                        :<h2>Our stores</h2>
                    }
                   
                </div>
                <ul className='dealers'>
                    <li>
                        г. Волгоград, ул Землячки 110Б, ТРК «Мармелад» 1 этаж
                        <br></br>
                        <br></br>
                        Ежедневно с 10:00 до 22:00
                        <br></br>
                        +7-961-693-74-74
                        <hr></hr>
                    </li>
                    <li>
                    г. Москва, Пресненская набережная д. 2 - ТРЦ АФИМОЛЛ Сити, 2 этаж
                        <br></br>
                        <br></br>
                        вс-чт с 10:00 до 22:00, пт-сб с 10:00 до 23:00
                        <br></br>
                        +7 903 663-73-63
                        <hr></hr>
                    </li>
                    <li>
                    г. Краснодар, ул. Уральская 79/2, ТРК СБС Мегамолл, 1 этаж
                        <br></br>
                        <br></br>
                        Ежедневно с 10:00 до 22:00
                        <br></br>
                        +7 977 340-40-38
                        <hr></hr>
                    </li>
                    <li>
                    г. Волжский, ул. Александрова 18а, ТРК «ВолгаМолл», 1 этаж, боковой вход справа
                        <br></br>
                        <br></br>
                        Ежедневно с 10:00 до 22:00
                        <br></br>
                        +7 977 340-40-38
                        <hr></hr>
                    </li>
                    <li>
                    Республика Татарстан, г. Казань, просп. Хусаина Ямашева, д. 46/33, ТРК Парк Хаус 1 этаж
                        <br></br>
                        <br></br>
                        Ежедневно с 10:00 до 22:00
                        <br></br>
                        +7 977 340-40-38
                        <hr></hr>
                    </li>
                    <li>
                    г. Санкт-Петербург, Брантовская дор., 3, ТРЦ «Охта Молл» восточный вход с ул. Брантовская, 1 этаж
                        <br></br>
                        <br></br>
                        Ежедневно с 10:00 до 22:00
                        <br></br>
                        +7 977 340-40-38
                        <hr></hr>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default observer(Stores) 