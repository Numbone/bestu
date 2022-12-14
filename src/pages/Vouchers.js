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
                                    ????????????
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
                                    ????????????
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
                                    ????????????
                                </button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='mb-4 block-title text-center'>
                            <div style={{ fontSize: '2em' }}>
                                ??????????????
                                <br></br>
                                ???? ?????????????????????????? ???????????????????? ????????????????????????
                            </div>
                        </div>
                        <div class="text">
                            <p>1. ???????????????????? ???????????????????????? ?????? ?????????????? ?????????????? ???? ????????????????????????, ???????????????????? ???? ?????????? https://thebestforyourself.ru/</p>
                            <p>2. ????????????????????????  ???????????????? ?????????????????????????????? ??????????????????????, ???????? ???????????????? - 6 ?????????????? ???? ?????? ?????? ??????????????.</p>
                            <p>3. ?????? ?????????????????????????? ?????????????????????? ???????????????? ???????????????????? ???????????? ???????????????????????????? ???? ???????? ???????????????????? ?? ???????????????????????? ???? ????????????????.</p>
                            <p>4. ?????????? ???????????????????? ????????????????????????  ???????????????? ???????????????????? ???????????? ???????? ??????. ?? ???????????? ?????????????????????????????? ???????? ?????????? ?????????????????????? , ?????????????? ????????????????????????, ???????????????? ??/?????? ???????????????????? ???? ????????????????.</p>
                            <p>5. ????????????????????????  ???????????????? ???????????????? 100% ?????????????? ?? ???????????????? ???????????? ??????????????????????.</p>
                            <p>6. ???????? ?????????????? ?????????????????????? ???????????? ?????????????????? ?????????????????? ??????????????, ?????????????????? ?????????????????????? ?????????? ?????????????????? ?????????????????????? ??????????.</p>
                            <p>7. ????????????????????  ???? ???????????????? ???????????? ???? ???????????????? ????????????????????.</p>
                            <p>8. ?????? ???????????? ?????????????????????? ???????????? ?? ???????????????????? ???????????????? ???????????? ?????????????????????? ????????????????, ????????????????????, ?????? ?????????????????????? ?? ?????????????? ????????????, ???? ??????????????????????????????????.</p>
                            <p>9. ??????????, ?????????????? ?????????????? ?????????????????????????? ????????????????, ?????????????????????????? ?? ???????????????????????????? ??????????????????????, ???????????????????????????? ?? ?????????? ??????????????, ?????????????????????????????? ?????????????????????? ??????????????????????????????????.</p>
                            <p>10. ??????????, ???? ?????????????? ?????????????????????? ?????????????? ?? ???????????????????????????? ?????????????????????? ???? ???????????????????????? ?????????????? ?? ???????????????? ??????????????????????.</p>
                            <p>11. ???????????????????? ???????????????????? ???????????????????????????? ???? ????????????????.</p>
                            <p>12. ???????????????? ???????????? ?? ?????????????????????????? ?????????????? ???????????????? ?????????????? ?????????? ?? ?????????????? ?????????????????????????? ????????????????????????. ?????? ???????????????????? ???? ???????????????????? ?????????? ???????????????????????? ???? ?????????? https://thebestforyourself.ru/</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default observer(Vouchers)