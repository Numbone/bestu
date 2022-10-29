import React from 'react'
import Item from '../../store/Image'
import "../BlockCatalog/BlockCatalog.css"
import ps from "../../img/1.jpg"
const BlockCatalog = () => {
    return (
        <div className='block-catalog'>
            <div className='container'>
                <div className='block__title text-center'>
                    <a href='/'>Смотреть все товары</a>
                    <br></br>
                    <br></br>
                    <a href='/'>Сейчас в наличии</a>
                </div>
                <div className='block-catalog__items'>
                    <div className='row g-2 g-md-4'>

                        {
                            Item.map(({ id, image, text }) =>
                                <div className='col-sm-6'>
                                    <div className='block-catalog__item  item item-square d-block' key={id}
                                        style={{ backgroundImage: `url(${image})` }}>
                                        <a href='/'
                                            className='img d-flex justify-content-center align-items-center flex-column'>
                                            <span className='block-catalog__item-title '>{text}</span>
                                        </a>
                                    </div>
                                </div>)
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlockCatalog