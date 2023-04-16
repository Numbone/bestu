import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../..'
import "../BlockTop/BlockTop.css"
const BlockTop = () => {
    const { lang } = useContext(Context)
    return (

        <div className='block-top'>
            <div className='d-flex justify-content-center'>
                <div className='container flex-1 d-flex align-items-end justify-content-md-end'>
                    <div className='block-top__badge-box'>

                        {
                            lang.lang === 'ru'
                                ?
                                <div className='block-top__badge'>
                                    Позвольте себе ощутить истинное наслаждение с косметикой из ценных натуральных масел. Ваша кожа ещё никогда не была такой увлажненной и напитанной.

                                </div>
                                :
                                <div className='block-top__badge'>
                                    Let yourself experience true pleasure with cosmetics made from precious natural oils. Your skin has never been so hydrated and nourished.
                                </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default observer(BlockTop)