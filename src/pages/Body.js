import React from 'react'
import BlockAbout from '../component/BlockAbout/BlockAbout'
import BlockTop from '../component/BlockTop/BlockTop'
import ProductImages from '../component/SwiperCard/ProductImages'
import { productImages, productImages1 } from '../img'

const Body = () => {
  return (
    <div>
      <BlockTop />
      <BlockAbout />
      <div className='block-catalog'>
        <div className='container'>
          <div className='block__title text-center'>
            <p>Каталог</p>
          </div>
          <div className='block-catalog__items'>
            <div className='row g-2 g-md-4'>
              <div className='col-sm-6' style={{ fontSize: 'calc(var(--index))', fontFamily: 'Tenor Sans,san-serif' }}>
                <ProductImages images={productImages} />
                <div className='block-product__info flex-1 d-flex flex-column justify-content-between'
                  style={{
                    padding: '1em 1.1em 0',
                    flex: '1',
                    display: 'flex',
                    flex: 'column',
                    justifyContent: 'space-between'
                  }}>
                  <div>
                    <div className='block-product__name'
                      style={{
                        fontSize: '1.2em',
                        lineHeight: '1'
                      }}>
                      Скраб для тела с ароматом летнего дождя
                    </div>
                    <div className='block-product__volume'
                      style={{ fontSize: '.7em' }}>
                      250мл (280г)
                    </div>
                  </div>
                  <div>
                    <div className='block-product__price-block d-flex align-items-center'
                      style={{
                        marginTop: '0.5em',
                        fontSize: '1.2em',
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                      <div className='block-product__price'
                        style={{

                        }}>
                        1 790 руб.
                      </div>
                    </div>
                    <div className='block-product__btns row g-2'
                      style={{
                        marginTop: '0.9em'
                      }}>
                      <div className='col-6'>
                        <a href='#'
                          className='custom-btn custom-btn-dark'
                          style={{
                            display: 'inline-block',
                            border: '1px solid #000',
                            width: '100%',
                            color: '#000',
                            textDecoration: 'none',
                            textAlign: 'center',
                            fontSize: '0.9em',
                            padding: '0.7em 0.5em',
                            background: '#000',
                            color: '#fff'
                          }}>
                          В корзину
                        </a>
                      </div>
                      <div className='col-6'>
                        <a href='#'
                          className='custom-btn'
                          style={{
                            display: 'inline-block',
                            border: '1px solid #000',
                            width: '100%',
                            color: '#000',
                            textDecoration: 'none',
                            textAlign: 'center',
                            fontSize: '0.9em',
                            padding: '0.7em 0.5em',

                          }}>
                          Читать подробнее
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-6' style={{ fontSize: 'calc(var(--index))', fontFamily: 'Tenor Sans,san-serif' }}>
                <ProductImages images={productImages1} />
                <div className='block-product__info flex-1 d-flex flex-column justify-content-between'
                  style={{
                    padding: '1em 1.1em 0',
                    flex: '1',
                    display: 'flex',
                    flex: 'column',
                    justifyContent: 'space-between'
                  }}>
                  <div>
                    <div className='block-product__name'
                      style={{
                        fontSize: '1.2em',
                        lineHeight: '1'
                      }}>
                      Скраб для тела
                    </div>
                    <div className='block-product__volume'
                      style={{ fontSize: '.7em' }}>
                      250мл (280г)
                    </div>
                  </div>
                  <div>
                    <div className='block-product__price-block d-flex align-items-center'
                      style={{
                        marginTop: '0.5em',
                        fontSize: '1.2em',
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                      <div className='block-product__price'
                        style={{

                        }}>
                        1 790 руб.
                      </div>
                    </div>
                    <div className='block-product__btns row g-2'
                      style={{
                        marginTop: '0.9em'
                      }}>
                      <div className='col-6'>
                        <a href='#'
                          className='custom-btn custom-btn-dark'
                          style={{
                            display: 'inline-block',
                            border: '1px solid #000',
                            width: '100%',
                            color: '#000',
                            textDecoration: 'none',
                            textAlign: 'center',
                            fontSize: '0.9em',
                            padding: '0.7em 0.5em',
                            background: '#000',
                            color: '#fff'
                          }}>
                          В корзину
                        </a>
                      </div>
                      <div className='col-6'>
                        <a href='#'
                          className='custom-btn'
                          style={{
                            display: 'inline-block',
                            border: '1px solid #000',
                            width: '100%',
                            color: '#000',
                            textDecoration: 'none',
                            textAlign: 'center',
                            fontSize: '0.9em',
                            padding: '0.7em 0.5em',

                          }}>
                          Читать подробнее
                        </a>
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

export default Body