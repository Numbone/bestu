import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../..';
import Item from '../Item/Item';
import './ModalForOrder.css'
const ModalForOrder = (props) => {
    const {lang}=useContext(Context)
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {
                        lang.lang=="ru"?
                        <> Статус заказа : {props.status}</>
                        :<> Status order : {props.status} </>
                    }
                   
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <table className='table table-bordered table-striped dataTable dtr-inline' style={{ width: '100%', maxWidth: 'none' }}>
                    <thead className=''>
                        <tr>
                           
                            <th style={{ width: '50%' }}>
                            {
                                lang.lang=="ru"
                                ?<>Наименование</>
                                :<>
                                Name</>
                            }</th>
                            <th className="">
                            {
                                lang.lang=="ru"
                                ?<>Цена</>
                                :<>Price</>
                            }</th>
                            <th>
                            {
                                lang.lang=="ru"
                                ?<>Количество</>
                                :<>Quantity</>
                            }</th>
                            <th>
                            {
                                lang.lang=="ru"
                                ?<>Сумма</>
                                :<>
                                Sum</>
                            }</th>
                            
                        </tr>
                    </thead>
                    <tbody id="table-cart">
                        {
                            props?.data?.map(item =>
                                <tr className="" data-price={1790} data-product={2} data-shipping={1}>
                                    <td><span className="cart-item__name">{lang.lang=="ru"?item?.nameRu:item?.nameEn} </span><br /><span style={{ fontSize: '.8em' }}></span></td>
                                    <td className="d-sm-table-cell">
                                        {item?.price} {
                                            lang.lang=="ru"?<>руб.</>
                                            :<>rub</>
                                        } 
                                    </td>
                                    <td>
                                        <div className="d-flex justify-content-center align-items-center box-quantity" style={{ marginLeft: 'auto', marginRight: 'auto' }}>

                                            <div type="text" name="quantity" className="quantity" style={{ paddingLeft: 0, paddingRight: 0 }} >{item.count}</div>

                                        </div>
                                    </td>
                                    <td>
                                        <span className="item-total">
                                            {item?.price*item?.count}
                                        </span>
                                    </td>

                                </tr>
                            )
                        }
                            <tr className="item" data-price={1790} data-product={2} data-shipping={1}>
                                    <td><span className="cart-item__name"></span><br /><span style={{ fontSize: '.8em' }}></span></td>
                                    <td className=" d-sm-table-cell">
                                       
                                    </td>
                                    <td>
                                        <div className="d-flex justify-content-center align-items-center box-quantity" style={{ marginLeft: 'auto', marginRight: 'auto' }}>

                                            {
                                                lang.lang==="ru"
                                                ?  <div type="text" name="quantity" className="quantity" style={{ paddingLeft: 0, paddingRight: 0 }} >Итого</div>
                                                :  <div type="text" name="quantity" className="quantity" style={{ paddingLeft: 0, paddingRight: 0 }} >Total</div>
                                            }
                                          

                                        </div>
                                    </td>
                                    <td>
                                        <span className="item-total" style={{fontWeight:'700'}}>
                                            {props.totalCosts}
                                        </span>
                                    </td>

                                </tr>
                    </tbody>
                </table>
            </Modal.Body>
        </Modal>
    )
}

export default ModalForOrder