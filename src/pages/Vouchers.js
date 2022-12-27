import React, { useContext, useEffect, useState } from 'react'
import ph from "../img/voucher.jpg"
import ph1 from "../img/voucher1.jpg"
import ph2 from "../img/voucher2.jpg"
import { Context } from "../"
import { observer } from 'mobx-react-lite'
import { productId } from '../api/product'
const Vouchers = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const { basket } = useContext(Context)
    const [data, setData] = useState({})
    const [data5000, setData5000] = useState({})
    const [data3000, setData3000] = useState({})
    const getItem = async () => {
        const { data } = await productId(12)
        setData(data)
        return data
    }
    const getItem5000 = async () => {
        const { data } = await productId(17)
        setData5000(data)
        return data
    }
    const getItem3000 = async () => {
        const { data } = await productId(18)
        setData3000(data)
        return data
    }
    useEffect(() => {
        getItem()
        getItem5000()
        getItem3000()
    }, [])
    const clickOrder = () => {
      
        basket.setBasket(data)

    }
    const clickOrder5000 = () => {
     
        basket.setBasket(data5000)

    }
    const clickOrder3000 = () => {
     
        basket.setBasket(data3000)

    }
    return (
        <>
            <div className='block-catalog'>
                <div className='container'>
                    <div className='catalog'>
                        <div className='row g-4 justify-content-center'>
                            <div className='col-6'>
                                <div className='item d-block'
                                    style={{
                                        boxShadow: '0 0 30px rgba(0,0,0,.15)',
                                        display: 'block'
                                    }}>
                                    <img alt='props' style={{ maxWidth: '100%' }} src={ph}></img>
                                </div>
                                <button onClick={() => clickOrder()}
                                    className='btn btn-light voucher'
                                    style={{
                                        maxWidth: '100%'
                                    }}>
                                    Купить1
                                </button>
                            </div>
                            <div className='col-6'>
                                <div className='item d-block'
                                    style={{
                                        boxShadow: '0 0 30px rgba(0,0,0,.15)',
                                        display: 'block'
                                    }}>
                                    <img alt='props' style={{ maxWidth: '100%' }} src={ph1}></img>
                                </div>
                                <button onClick={() => clickOrder3000()}
                                    className='btn btn-light voucher'
                                    style={{
                                        maxWidth: '100%'
                                    }}>
                                    Купить
                                </button>
                            </div>
                            <div className='col-6'>
                                <div className='item d-block'
                                    style={{
                                        boxShadow: '0 0 30px rgba(0,0,0,.15)',
                                        display: 'block'
                                    }}>
                                    <img alt='props' style={{ maxWidth: '100%' }} src={ph2}></img>
                                </div>
                                <button onClick={() => clickOrder5000()}
                                    className='btn btn-light voucher'
                                    style={{
                                        maxWidth: '100%'
                                    }}>
                                    Купить
                                </button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='mb-4 block-title text-center'>
                            <div style={{ fontSize: '2em' }}>
                                ПРАВИЛА
                                <br></br>
                                по использованию подарочных сертификатов
                            </div>
                        </div>
                        <div class="text">
                            <p>1. Сертификат используется при покупке товаров из ассортимента, указанного на сайте https://thebestforyourself.ru/</p>
                            <p>2. Сертификатом  возможно воспользоваться единоразово, срок действия - 6 месяцев со дня его покупки.</p>
                            <p>3. При использовании сертификата доставка купленного товара осуществляется за счет Покупателя и оплачивается им отдельно.</p>
                            <p>4. Одним подарочным сертификатом  возможно произвести оплату один раз. В случае неиспользования всей суммы сертификата , остаток аннулируется, хранению и/или возмещению не подлежит.</p>
                            <p>5. Сертификатом  возможно оплатить 100% покупки в пределах лимита сертификата.</p>
                            <p>6. Если номинал сертификата меньше стоимости выбранных товаров, держатель сертификата может доплатить недостающую сумму.</p>
                            <p>7. Сертификат  не подлежит обмену на денежный эквивалент.</p>
                            <p>8. При отмене покупателем заказа и оформлении возврата товара надлежащего качества, сертификат, уже примененный к данному заказу, не восстанавливается.</p>
                            <p>9. Обмен, возврат товаров ненадлежащего качества, приобретаемых с использованием сертификата, осуществляется в общем порядке, предусмотренным действующим законодательством.</p>
                            <p>10. Сумма, на которую произведена покупка с использованием сертификата не возвращается клиенту в денежном эквиваленте.</p>
                            <p>11. Утраченный сертификат восстановлению не подлежит.</p>
                            <p>12. Продавец вправе в одностороннем порядке изменить условия акций и правила использования сертификатов. Вся информация об изменениях будет опубликована на сайте https://thebestforyourself.ru/</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default observer(Vouchers)