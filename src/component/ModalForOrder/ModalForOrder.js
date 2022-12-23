import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Item from '../Item/Item';
import './ModalForOrder.css'
const ModalForOrder = (props) => {
    console.log(props)
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Статус заказа : {props.status}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <table style={{ width: '100%', maxWidth: 'none' }}>
                    <thead className='order__filter__thead'>
                        <tr>
                            <th style={{ width: '50%' }}>Наименование</th>
                            <th className="d-none d-sm-table-cell">Цена</th>
                            <th>Количество</th>
                            <th>Сумма</th>
                            <th className="d-none d-sm-table-cell" />
                        </tr>
                    </thead>
                    <tbody id="table-cart">
                        {
                            props.data.map(item =>
                                <tr className="item__modal" data-price={1790} data-product={2} data-shipping={1}>
                                    <td><span className="cart-item__name">{item.name} (250мл (280г))</span><br /><span style={{ fontSize: '.8em' }}></span></td>
                                    <td className="d-none d-sm-table-cell">
                                        {item.price} руб.
                                    </td>
                                    <td>
                                        <div className="d-flex justify-content-center align-items-center box-quantity" style={{ marginLeft: 'auto', marginRight: 'auto' }}>

                                            <div type="text" name="quantity" className="quantity" style={{ paddingLeft: 0, paddingRight: 0 }} >{item.count}</div>

                                        </div>
                                    </td>
                                    <td>
                                        <span className="item-total">
                                            {item.price*item.count}
                                        </span>
                                    </td>

                                </tr>
                            )
                        }
                            <tr className="item" data-price={1790} data-product={2} data-shipping={1}>
                                    <td><span className="cart-item__name"></span><br /><span style={{ fontSize: '.8em' }}></span></td>
                                    <td className="d-none d-sm-table-cell">
                                       
                                    </td>
                                    <td>
                                        <div className="d-flex justify-content-center align-items-center box-quantity" style={{ marginLeft: 'auto', marginRight: 'auto' }}>

                                            <div type="text" name="quantity" className="quantity" style={{ paddingLeft: 0, paddingRight: 0 }} >Итого</div>

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