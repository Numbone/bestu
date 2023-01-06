import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { productImages, productImages1 } from '../../img'
import ProductImages from '../SwiperCard/ProductImages'
import { observer } from 'mobx-react-lite';
import ModalItem from '../ModalItem/ModalItem';
import './Item.css'
const Item = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const [active, setActive] = React.useState(false)
    const navigate = useNavigate()
    return (
        <div className='col-sm-6' style={{ fontSize: 'calc(var(--index))', fontFamily: 'Tenor Sans,san-serif' }}>
            <ProductImages images={props.props.Images} />
            <div className='block-product__info flex-1 d-flex flex-column justify-content-between'
                style={{
                
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
                        <div className='col-6' onClick={() => setActive(true)} >
                            <a
                                onClick={() => props.clickOrder(props.props)}

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
                        <div className='col-6' onClick={() => navigate("/productitem/" + props.props.ID)} >
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
            <ModalItem active={active} setActive={setActive}>
                <div className="toastjs-container">
                    <div className="toastjs success">
                        <p> {props.props.Name}</p>
                        <div className="d-flex">
                           
                                <button type="button" className="toastjs-btn toastjs-btn--custom" onClick={() => setActive(false)}>
                                <NavLink to='/order' style={{color:'#fff'}}>Оформить заказ </NavLink>
                                </button>
                           
                          
                            <button type="button" className="toastjs-btn toastjs-btn--close" onClick={() => setActive(false)}>
                                Ок
                            </button>
                            
                        </div>
                    </div>
                </div>

            </ModalItem>
        </div>
    )
}

export default observer(Item)