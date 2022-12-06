import React from 'react'
import { useNavigate } from 'react-router-dom'
import { productImages, productImages1 } from '../../img'
import ProductImages from '../SwiperCard/ProductImages'
import { observer } from 'mobx-react-lite';
const Item = (props) => {
 
    const navigate =useNavigate()
    return (
        <div className='col-sm-6' style={{ fontSize: 'calc(var(--index))', fontFamily: 'Tenor Sans,san-serif' }}>
            <ProductImages images={props.props.Images} />
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
                            lineHeight: '1',
                            maxHeight: '60px',
                            minHeight: '60px'
                        }}>
                        {props.props.Name}

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
                            {props.props.Price} руб.
                        </div>
                    </div>
                    <div className='block-product__btns row g-2'
                        style={{
                            marginTop: '0.9em'
                        }}>
                        <div className='col-6'>
                            <a
                            onClick={()=>props.clickOrder(props.props)} 
                            href='#'
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
                        <div className='col-6' onClick={()=>navigate("/productitem/"+props.props.ID)} >
                            <a 
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
    )
}

export default observer(Item)