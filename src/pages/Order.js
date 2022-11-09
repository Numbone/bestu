import React from 'react'
import { NavLink } from 'react-router-dom'

const Order = () => {
  return (
    <div className='flex-1' style={{minHeight:'100vh'}}>
    <div className='block-page-order'>
        <div className='text-center mb-5' style={{fontSize:'14px'}}>
        В корзине нет ни одного товара. Добавьте товар из каталога
        </div>
        <div className='text-center'>
                <NavLink to="/" className='btn'>
                Перейти в каталог
                </NavLink>
        </div>
    </div>
    </div>
  )
}

export default Order