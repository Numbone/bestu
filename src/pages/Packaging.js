import React, { useEffect } from 'react'
import btop from '../img/packtop.jpg'
import ph from "../img/chemodan.png"
import ph1 from "../img/chemodan1.png"
const Packaging = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    <div>
        <div className='block-top category' style={{ backgroundImage: `url(${btop})` }}>
          <div className='d-flex justify-content-center'>
            <div className='container'>
              <div className='block-top__big-name'>
                Le mousse
              </div>
            </div>
          </div>
        </div>
        <div className='block-catalog'>
            <div className='container'>
                <div className='block__title text-center'>
                Каталог
                </div>
                <div className='block-catalog__items'>
                    <div className='row gy-4 gx-2 g-md-4'>
                        <div className='col-sm-6'>
                            <div className='block-product__item item d-flex flex-column '>
                                <div className='block-product__item-img item-square'>
                                    <div className='img d-block'>
                                        <img src={ph}>
                                        </img>
                                    </div>
                                </div>
                                <div className='block-product__info flex-1 d-flex flex-column justify-content-between'>
                                    <div>
                                        <div className='block-product__name'>
                                        Бокс черный без наполнения(27*21*7,5см)
                                        </div>
                                        <div className='block-product__volume'>

                                        </div>
                                    </div>
                                    <div>
                                        <div className='block-product__price-block d-flex align-items-center'>
                                            <div className='block-product__price'>
                                            700 руб.
                                            </div>
                                        </div>  
                                        <div className='block-product__btns row g-2'>
                                                <div className='col-6'>
                                                    <a className='custom-btn custom-btn-dark'>
                                                    В корзину
                                                    </a>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className='block-product__item item d-flex flex-column '>
                                <div className='block-product__item-img item-square'>
                                    <div className='img d-block'>
                                        <img src={ph1}>
                                        </img>
                                    </div>
                                </div>
                                <div className='block-product__info flex-1 d-flex flex-column justify-content-between'>
                                    <div>
                                        <div className='block-product__name'>
                                        Шляпная коробка (21*20см)
                                        </div>
                                        <div className='block-product__volume'>

                                        </div>
                                    </div>
                                    <div>
                                        <div className='block-product__price-block d-flex align-items-center'>
                                            <div className='block-product__price'>
                                            1 500 руб.
                                            </div>
                                        </div>  
                                        <div className='block-product__btns row g-2'>
                                                <div className='col-6'>
                                                    <p>sold out</p>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Packaging