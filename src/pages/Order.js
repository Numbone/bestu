import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from '..'
import { transactionCreate, transactionCreate2 } from '../api/transaction'
import { observer } from 'mobx-react-lite';
import './css/Order.css'
const Order = () => {
  const { basket } = useContext(Context)
  const [rerender, setRerender] = useState(Boolean);

  /// dropdown component 
  const [open, setOpen] = React.useState(false);



  //state for api
  const [delivery, setDelivery] = useState("")
  const [email, setEmail] = useState("")
  const [father_name, setFather_name] = useState("")
  const [first_name, setFirst_name] = useState("")
  const [phone_number, setPhone_number] = useState("")
  const [products, setProducts] = useState([])
  const [promo_code, setPromo_code] = useState("")
  const [second_name, setSecond_name] = useState("")
  const [total_cost, setTotal_cost] = useState(0)
  const [count, setCount] = useState(0)
  const [data, setData] = useState()
  //api for transaction/create
  
  const sendTransaction = async () => {
    const data = await transactionCreate2(delivery, email, father_name, first_name, phone_number, products, promo_code, second_name, total_cost)
    console.log(data);
  }

  ///every rerender

  (JSON.parse(localStorage.getItem("basket")).map(item => console.log(item.count)))

  const object = {
    basket: (JSON.parse(localStorage.getItem("basket")))
  }
  var copy = JSON.parse(JSON.stringify(object))
  copy.basket.map(item => (delete item.Action,
    delete item.Category,
    delete item.Compound,
    delete item.Contraindications,
    delete item.Count,
    delete item.Description,
    delete item.Files,
    delete item.ID,
    delete item.Images,
    delete item.ModeOfApp,
    delete item.Name,
    delete item.Price,
    delete item.Reviews,
    delete item.Stars,
    delete item.Weight))
  console.log(copy.basket, "copy");
  const reRender = () => {
    setRerender(!rerender);
  }

  const handleOpen = () => {
    if (count % 2 == 0) {
      setOpen(!open)
    }
    setCount(count => count + 1)
    setDelivery('Почта России')
  };
  console.log(open);

  useEffect(() => {
    reRender()
    
    setProducts(copy.basket)
    
  }, [])

  console.log(total_cost,"total cost");
  console.log(products,"products");
  return (
    <div className='flex-1' style={{ minHeight: '100vh' }}>
      {
        basket.Basket.length !== 0
          ? <div className="block-page-order">
            <div className="container">
              <div className="text-center">
                <h2 className="block__title">Оформление заказа</h2>
              </div>
              <div className="block-cart">
                <h3 className="block__title">Корзина</h3>
                <div className="table-responsive">
                  <table style={{ width: '100%', maxWidth: 'none' }}>
                    <thead>
                      <tr>
                        <th style={{ width: '50%' }}>Наименование</th>
                        <th className="d-none d-sm-table-cell">Цена</th>
                        <th>Количество</th>
                        <th>Сумма</th>
                        <th className="d-none d-sm-table-cell" />
                      </tr>
                    </thead>
                    <tbody id="table-cart">
                      {basket.Basket.map(item =>
                        <tr className="item" data-price={1790} data-product={2} data-shipping={1}>
                          <td><span className="cart-item__name">{item.Name} (250мл (280г))</span><br /><span style={{ fontSize: '.8em' }}>Артикул: scrub-ld</span></td>
                          <td className="d-none d-sm-table-cell">
                            {item.Price} руб.
                          </td>
                          <td>
                            <div className="d-flex justify-content-center align-items-center box-quantity" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                              <a onClick={() => basket.setCountDevice(item.ID, "-")} className="minus" />
                              <div type="text" name="quantity" className="quantity" style={{ paddingLeft: 0, paddingRight: 0 }} >{item.count}</div>
                              <a onClick={() => basket.setCountDevice(item.ID, "+")} className="plus" />
                            </div>
                          </td>
                          <td>
                            <span className="item-total">
                              {item.count * item.Price}
                            </span>
                          </td>
                          <td className="d-none d-sm-table-cell">
                            <div onClick={() => basket.setDeleteItemBasket(item)} style={{ color: '#fff' }}>Х</div></td>
                        </tr>
                      )}


                    </tbody>
                  </table>
                </div>
              </div>
              <div className="form-order">
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-8">
                    <h3 className="block__title">Покупатель</h3>
                    <div className="box-form customer">
                      <div className="form-field">
                        <label htmlFor="last_n  ame">Ваша фамилия</label>
                        <input onChange={(e) => setFather_name(e.target.value)} type="text" name="last_name" id="last_name" />
                      </div>
                      <div className="form-field">
                        <label htmlFor="first_name">Ваше имя</label>
                        <input onChange={(e) => setFirst_name(e.target.value)} type="text" name="first_name" id="first_name" />
                      </div>
                      <div className="form-field">
                        <label htmlFor="middle_name">Ваше отчество</label>
                        <input onChange={(e) => setSecond_name(e.target.value)} type="text" name="middle_name" id="middle_name" />
                      </div>
                      <div className="form-field">
                        <label htmlFor="phone">Ваш телефон</label>
                        <input onChange={(e) => setPhone_number(e.target.value)} type="text" name="phone" id="phone" />
                      </div>
                      <div className="form-field">
                        <label htmlFor="email">Ваш email</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="text" name="email" id="email" />
                      </div>
                      <div className="form-field">
                        <label htmlFor="email_confirmation">Повторите email</label>
                        <input type="text" name="email_confirmation" id="email_confirmation" required />
                      </div>
                    </div>
                    <h3 className="block__title">Доставка</h3>
                    <div className="shipping-country mb-4">
                      <div className="box-form">
                        <div className="form-field">
                          <label htmlFor="country">Страна</label>
                          <label htmlFor="country" className="box-select">
                            <select name="country" id="country">
                              <option value="-">Выберите страну</option>
                              <option value={5}>Армения</option>
                              <option value={6}>Беларусь</option>
                              <option value={22}>Казахстан</option>
                              <option value={27}>Кыргызстан</option>
                              <option value={0} selected>Россия</option>
                            </select>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="shipping-choose">
                      <div className="box-form">
                        <input type="hidden" name="shipping-code" defaultValue />
                        <div className="form-field" onClick={() => setDelivery('СДЭК до пункта выдачи')}>
                          <input type="radio" name="shipping-method" id="cdek" className="input-radio" defaultValue="СДЭК до ПВЗ" />
                          <label htmlFor="cdek">СДЭК до пункта выдачи</label>
                        </div>




                        <div className="form-field" onClick={handleOpen}>
                          <input type="radio" name="shipping-method" id="pochta" className="input-radio" defaultValue="Доставка Почтой" />
                          <label htmlFor="pochta">Почта России<br />
                            <span style={{ display: 'inline', fontSize: '.8em', color: 'red', padding: 0 }}>(только по РФ)</span>
                          </label>
                        </div>



                        <div className="form-field" onClick={() => setDelivery('Самовывоз в Волгограде')}>
                          <input type="radio" name="shipping-method" id="pickup" className="input-radio" defaultValue="Самовывоз в Волгограде" />
                          <label htmlFor="pickup">Самовывоз в Волгограде</label>
                        </div>



                      </div>
                    </div>
                    {
                      open ?
                        <div className="box-address" >
                          <h3>Адрес</h3>
                          <div className="pochta-info info" style={{ color: 'red' }}>
                            Внимание!<br />
                            Адрес и ФИО заполняйте только на английском языке
                          </div>
                          <div className="box-form">
                            <div className="form-pochta">
                              <div className="form-field">
                                <label htmlFor="postcode">Почтовый индекс</label>
                                <input type="text" name="postcode" defaultValue id="postcode" />
                              </div>
                              <div className="form-field">
                                <label htmlFor="region">Регион или область</label>
                                <input type="text" name="region" defaultValue id="region" />
                              </div>
                              <div className="form-field">
                                <label htmlFor="city">Населенный пункт</label>
                                <input type="text" name="city" defaultValue id="city" />
                              </div>
                              <div className="form-field">
                                <label htmlFor="street">Улица</label>
                                <input type="text" name="street" defaultValue id="street" />
                              </div>
                              <div className="row">
                                <div className="col-6">
                                  <div className="form-field">
                                    <label htmlFor="house">Дом</label>
                                    <input type="text" name="house" defaultValue id="house" />
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="form-field">
                                    <label htmlFor="flat">Квартира</label>
                                    <input type="text" name="flat" defaultValue id="flat" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        : <div>


                        </div>
                    }

                    <div id="shipping-info" style={{ padding: 20, border: '2px solid rgb(179, 139, 138)', margin: 20, textAlign: 'center', display: 'block' }}>
                      <span id="info-pvz-address">Самовывоз по адресу: г. Волгоград, пр. Жукова 100б (вход через магазин "магнит")<br />Тел. +7 902 312-55-32</span>
                    </div>

                    <div className="box-form">
                      <div className="text-center mt-2 d-flex">
                        <div style={{ position: 'relative' }}>
                          <input type="checkbox" name="promo" id="promo-field-voucher" form="order" defaultValue="voucher" className="input-checkbox" />
                          <label htmlFor="promo-field-voucher">
                            Использовать подарочный
                            сертификат
                          </label>

                        </div>
                      </div>
                    </div>
                    <div className="box-form" id="box-field-voucher" >
                      <div className="form-field">
                        <label htmlFor="voucher">Подарочный сертификат</label>
                        <input onChange={(e) => setPromo_code(e.target.value)} type="text" name="voucher" id="voucher" form="order" />
                      </div>
                    </div>
                    <hr />
                    <div className="box-form">
                      <div id="total-block">
                        <table className="table" style={{ width: '100%' }}>
                          <tbody><tr>
                            <td width="60%" id="cart-total">Товары в корзине</td>
                            <td>{basket.Price}</td>
                          </tr>
                            <tr>
                              <td width="60%" id="delname" />
                              <td id="delprice" />
                            </tr>
                            <tr id="total-tr" style={{ fontWeight: 'bold', marginTop: '.5em' }}>
                              <td width="60%">Итого к оплате</td>
                              <td id="total">
                                {basket.Price}
                              </td>
                            </tr>
                          </tbody></table>
                      </div>
                    </div>
                    <hr />
                    <div className="box-form" id="agreements">

                      <div className="text-center mt-2 d-flex justify-content-start">
                        <div style={{ position: 'relative' }}>
                          <input type="checkbox" name="oferta" id="oferta" className="input-checkbox" defaultValue={1} form="order" /><label htmlFor="oferta">
                            Я принимаю условия
                            <a href="https://thebestforyourself.ru/page/oferta" target="_blank">
                              публичной оферты</a>
                          </label>
                        </div>
                      </div>
                      <div className="text-center mt-2 d-flex justify-content-start">
                        <div style={{ position: 'relative' }}>
                          <input type="checkbox" name="politika" id="politika" className="input-checkbox" defaultValue={1} form="order" />
                          <label htmlFor="politika">Я соглашаюсь с условиями
                            <a href="https://thebestforyourself.ru/page/politika" target="_blank">
                              политики обработки
                              персональных данных
                            </a>
                          </label>
                        </div>
                      </div>


                    </div>
                    <div id="error-message" style={{ color: 'red', marginBottom: 15 }} />
                    <div className="text-center" onClick={sendTransaction}>
                      <button type="submit" form="order" className="btn" id="submit">К оплате</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          : <div className='block-page-order'>
            <div className='text-center mb-5' style={{ fontSize: '14px' }}>
              В корзине нет ни одного товара. Добавьте товар из каталога
            </div>
            <div className='text-center'>
              <NavLink to="/" className='btn'>
                Перейти в каталог
              </NavLink>
            </div>
          </div>
      }


    </div>
  )
}

export default observer(Order)