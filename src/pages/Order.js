import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from '..'
import { transactionCreate, transactionCreate2 } from '../api/transaction'
import { observer } from 'mobx-react-lite';
import './css/Order.css'
import ModalSucces from '../component/ModalSuccess/ModalSucces';
import ModalError from '../component/ModalError/ModalError';
const Order = () => {
  const { basket, user,lang } = useContext(Context)
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
  const [data1, setData] = useState({})
  //api for transaction/create

  const [active, setActive] = useState(false)
  const [activeError, setActiveError] = useState(false)




  /////validator first name 
  const [first_nameError, setFirst_nameError] = useState("Заполните поле")
  const [first_nameDirty, setFirst_nameDirty] = useState(false)
  const First_nameHandler = (e) => {
    setFirst_name(e.target.value)
    if (e.target.value.length < 3) {
      setFirst_nameError('Имя не может быть меньше 3 символов')
      if (!e.target.value) {
        setFirst_nameError('Имя не может быть меньше 3 символов')
      }
    } else {
      setFirst_nameError('')
    }
  }

  ///validator father name
  const [father_nameError, setFather_nameError] = useState("Заполните поле")
  const [father_nameDirty, setFather_nameDirty] = useState(false)
  const Father_nameHandler = (e) => {
    setFather_name(e.target.value)
    if (e.target.value.length < 3) {
      setFather_nameError('Фамилия не может быть меньше 3 символов')
      if (!e.target.value) {
        setFather_nameError('Фамилия не может быть меньше 3 символов')
      }
    } else {
      setFather_nameError('')
    }
  }
  /// validator second name
  const [second_nameError, setSecond_nameError] = useState("Заполните поле")
  const [second_nameDirty, setSecond_nameDirty] = useState(false)
  const Second_nameHandler = (e) => {
    setSecond_name(e.target.value)
    if (e.target.value.length < 3) {
      setSecond_nameError('Отечество не может быть меньше 3 символов')
      if (!e.target.value) {
        setSecond_nameError('Отечество не может быть меньше 3 символов')
      }
    } else {
      setSecond_nameError('')
    }
  }

  //// validator phone
  const [phone_numberError, setPhone_numberError] = useState("Заполните поле")
  const [phone_numberDirty, setPhone_numberDirty] = useState(false)
  const Phone_numberHandler = (e) => {
    setPhone_number(e.target.value)
    if (e.target.value.length < 7) {
      setPhone_numberError('Телефон номер не может быть меньше 7 символов')
      if (!e.target.value) {
        setPhone_numberError('Телефон номер не может быть меньше 7 символов')
      }
    } else {
      setPhone_numberError('')
    }
  }
  /////validator email///
  const [emailDirty, setEmailDirty] = useState(false)
  const [emailError, setEmailError] = useState("Заполните поле")
  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный email')
    } else {
      setEmailError("")
    }
  }
  ////repeat email///
  const [repeat, setRepeat] = useState("")
  const [repeatDirty, setRepeatDirty] = useState(false)
  const [repeatError, setRepeatError] = useState("Заполните поле")
  const RepeatHandler = (e) => {
    setRepeat(e.target.value)
    if (email != String(e.target.value)) {
      setRepeatError('Email не совпадает')
    } else {
      setRepeatError("")
    }
  }
  //////blurHandler for all input
  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'father_name':
        setFather_nameDirty(true)
        break
      case 'first_name':
        setFirst_nameDirty(true)
        break
      case 'second_name':
        setSecond_nameDirty(true)
        break
      case 'phone_number':
        setPhone_numberDirty(true)
        break
      case 'email':
        setEmailDirty(true)
        break
      case 'repeat':
        setRepeatDirty(true)
        break
    }
  }


  const sendTransaction = async () => {
    try {
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

      const data = !user.isAuth
        ? await transactionCreate2(delivery,copy.basket,promo_code,basket.Price,
          {"email":email,'father_name':father_name,"first_name":first_name,"phone_number":phone_number,
        "second_name":second_name})
        : await transactionCreate(delivery,copy.basket,promo_code,basket.Price,
          {"email":email,'father_name':father_name,"first_name":first_name,"phone_number":phone_number,
        "second_name":second_name})
      setData(data);
      console.log();
    } catch (error) {
      console.log(error, "///////////error//////////////");
    } finally {
      console.log(data1);
      if (data1?.status == 200) {
        setActive(true)
      } else if (data1?.status != 200) {
        setActiveError(true)
      }
    }

  }


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
  const [checkSelfDelivey, setcheckSelfDevivery] = useState(false)
  const changeSelfDelivery = (e) => {
    setcheckSelfDevivery(e.target.checked)
  }

  const [checkGift, setcheckGift] = useState(false)
  const setGiftTic = (e) => {
    setcheckGift(e.target.checked)
  }
  const [checkerpolitica, setCheckerpolitika] = useState(false)
  console.log(checkerpolitica, "checkpolitika");
  const [checkOferta, setCheckOferta] = useState(false)
  const [formValid, setFormvalid] = useState(false)
  useEffect(() => {
    if (!checkerpolitica || !checkOferta || emailError || first_nameError || second_nameError || father_nameError || phone_numberError || repeatError) {
      setFormvalid(false)
    } else {
      setFormvalid(true)
    }
  }, [checkerpolitica, checkOferta, emailError, first_nameError, second_nameError, father_nameError, phone_numberError, repeatError,])




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
                          <td><span className="cart-item__name">{lang?.lang==="ru"?item?.name_ru:item?.name_en} </span><br /><span style={{ fontSize: '.8em' }}>Артикул: scrub-ld</span></td>
                          <td className="d-none d-sm-table-cell">
                            {item.price} руб.
                          </td>
                          <td>
                            <div className="d-flex justify-content-center align-items-center box-quantity" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                              <a onClick={() => basket.setCountDevice(item.id, "-")} className="minus" />
                              <div type="text" name="quantity" className="quantity" style={{ paddingLeft: 0, paddingRight: 0 }} >{item?.count}</div>
                              <a onClick={() => basket.setCountDevice(item.id, "+")} className="plus" />
                            </div>
                          </td>
                          <td>
                            <span className="item-total">
                              {item.count * item.Price}
                            </span>
                          </td>
                          <td className=" d-sm-table-cell">
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
                        <label htmlFor="last_name">Ваша фамилия</label>
                        <input
                          onChange={(e) => Father_nameHandler(e)}
                          type="text"
                          name="father_name"
                          id="last_name"
                          onBlur={e => blurHandler(e)}
                          value={father_name}
                          placeholder='Напишите фамилию'
                        />
                        {(father_nameDirty && father_nameError) &&
                          <label className='label_check'>{father_nameError}</label>
                        }
                      </div>
                      <div className="form-field">
                        <label htmlFor="first_name">Ваше имя</label>
                        <input
                          onChange={(e) => First_nameHandler(e)}
                          type="text"
                          name="first_name"
                          id="first_name"
                          value={first_name}
                          onBlur={e => blurHandler(e)}
                          placeholder='Напишите имя' />
                        {(first_nameDirty && first_nameError) &&
                          <label className='label_check'>{first_nameError}</label>
                        }
                      </div>
                      <div className="form-field">
                        <label htmlFor="second_name">Ваше отечество</label>
                        <input
                          onChange={(e) => Second_nameHandler(e)}
                          type="text"
                          name="second_name"
                          id="second_name"
                          value={second_name}
                          onBlur={e => blurHandler(e)}
                          placeholder='Напишите отечество' />
                        {(second_nameDirty && second_nameError) &&
                          <label className='label_check'>{second_nameError}</label>
                        }
                      </div>
                      <div className="form-field">
                        <label htmlFor="phone_number">Ваш телефон</label>
                        <input
                          onChange={(e) => Phone_numberHandler(e)}
                          type="text"
                          name="phone_number"
                          id="phone_number"
                          value={phone_number}
                          onBlur={e => blurHandler(e)}
                          placeholder='Напишите номер телефона' />
                        {(phone_numberDirty && phone_numberError) &&
                          <label className='label_check'>{phone_numberError}</label>
                        }
                      </div>
                      <div className="form-field">
                        <label htmlFor="email">Ваш email</label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          onBlur={e => blurHandler(e)}
                          value={email}
                          onChange={(e) => emailHandler(e)}
                          placeholder="Введите email" />
                        {(emailDirty && emailError) &&
                          <label className='label_check'>{emailError}</label>
                        }
                      </div>
                      <div className="form-field">
                        <label htmlFor="repeat">Повторите email</label>
                        <input
                          onBlur={e => blurHandler(e)}
                          value={repeat}
                          onChange={e => RepeatHandler(e)}
                          placeholder='Повторите введенный email'
                          type="text"
                          name="repeat"
                          id="repeat"
                          required />
                        {(repeatDirty && repeatError) &&
                          <label className='label_check'>{repeatError}</label>
                        }
                      </div>
                    </div>
                    <h3 className="block__title">Доставка</h3>
                    {/* <div className="shipping-country mb-4">
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
                    </div> */}
                    <div className="shipping-choose">
                      <div className="box-form">
                        <div className="form-field" onClick={() => setDelivery('Самовывоз в Волгограде')}>
                          <input type="checkbox" name="shipping-method" id="pickup" className="input-radio" onClick={changeSelfDelivery} />
                          <label htmlFor="pickup">Самовывоз в Волгограде</label>
                        </div>



                      </div>
                    </div>
                    {
                      checkSelfDelivey
                        ? <div id="shipping-info" style={{ padding: 20, border: '2px solid rgb(179, 139, 138)', margin: 20, textAlign: 'center', display: 'block' }}>
                          <span id="info-pvz-address">Самовывоз по адресу: г. Волгоград, пр. Жукова 100б (вход через магазин "магнит")<br />Тел. +7 902 312-55-32</span>
                        </div>
                        : null
                    }

                    {/* {
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
                    } */}



                    <div className="box-form">
                      <div className="text-center mt-2 d-flex">
                        <div style={{ position: 'relative' }}>
                          <input type="checkbox" name="promo" id="promo-field-voucher" className="input-checkbox" onChange={setGiftTic} />
                          <label htmlFor="promo-field-voucher">
                            Использовать подарочный
                            сертификат
                          </label>

                        </div>
                      </div>
                    </div>
                    {
                      checkGift
                        ? <div className="box-form" id="box-field-voucher" >
                          <div className="form-field">
                            <label htmlFor="voucher">Подарочный сертификат</label>
                            <input onChange={(e) => setPromo_code(e.target.value)} type="text" name="voucher" id="voucher" form="order" />
                          </div>
                        </div>
                        : null
                    }

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
                          <input
                            type="checkbox"
                            name="oferta"
                            id="oferta"
                            className="input-checkbox"
                            defaultValue={1}
                            form="order"
                            onClick={(e) => setCheckOferta(e.target.checked)} /><label htmlFor="oferta">
                            <span>Я принимаю условия </span>
                            <NavLink to='/ofertapage'>
                              публичной оферты</NavLink
                            >
                          </label>
                        </div>
                      </div>
                      <div className="text-center mt-2 d-flex justify-content-start">
                        <div style={{ position: 'relative' }}>
                          <input type="checkbox" name="politika" id="politika" className="input-checkbox" defaultValue={1} form="order"
                            onClick={(e) => setCheckerpolitika(e.target.checked)} />
                          <label htmlFor="politika"><span>Я соглашаюсь с условиями </span>
                            <NavLink to="/politicapage" >
                              политики обработки
                              персональных данных
                            </NavLink>
                          </label>
                        </div>
                      </div>


                    </div>
                    <div id="error-message" style={{ color: 'red', marginBottom: 15 }} />
                    <div className="text-center" onClick={sendTransaction}>
                      <button disabled={!formValid} type="submit" form="order" className="btn" id="submit">К оплате</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ModalSucces
              show={active}
              onHide={() => setActive(false)} />
            <ModalError
              show={activeError}
              onHide={() => setActiveError(false)} />

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