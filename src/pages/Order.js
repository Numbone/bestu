import React, { useContext, useEffect, useState } from 'react'
import { NavLink, redirect, useNavigate } from 'react-router-dom'
import { Context } from '..'
import { transactionCreate, transactionCreate2 } from '../api/transaction'
import { observer } from 'mobx-react-lite';
import './css/Order.css'
import ModalSucces from '../component/ModalSuccess/ModalSucces';
import ModalError from '../component/ModalError/ModalError';
const Order = () => {
  const { basket, user, lang } = useContext(Context)
  const [rerender, setRerender] = useState(Boolean);

  /// dropdown component 
  const [open, setOpen] = React.useState(false);

  ////navigate 
  const navigate = useNavigate()

  //state for api
  const [delivery, setDelivery] = useState("")
  const [email, setEmail] = useState("")
  const [father_name, setFather_name] = useState("")
  const [first_name, setFirst_name] = useState("")
  const [phone_number, setPhone_number] = useState("")
  const [products, setProducts] = useState([])
  const [promo_code, setPromo_code] = useState("")
  const [second_name, setSecond_name] = useState("secondname")
  const [total_cost, setTotal_cost] = useState(0)
  const [count, setCount] = useState(0)
  const [data1, setData] = useState("")
  //api for transaction/create

  const [active, setActive] = useState(false)
  const [activeError, setActiveError] = useState(false)




  /////validator first name 
  const [first_nameError, setFirst_nameError] = useState({
    "ru": "Заполните поле",
    "en": "Fill in the field"
  })
  const [first_nameDirty, setFirst_nameDirty] = useState(false)
  const First_nameHandler = (e) => {
    setFirst_name(e.target.value)
    if (e.target.value.length < 3) {
      setFirst_nameError({
        "ru": 'Имя не может быть меньше 3 символов',
        "en": "Name cannot be less than 3 characters"
      })
      if (!e.target.value) {
        setFirst_nameError({
          "ru": 'Имя не может быть меньше 3 символов',
          "en": "Name cannot be less than 3 characters"
        })
      }
    } else {
      setFirst_nameError('')
    }
  }

  ///validator father name
  const [father_nameError, setFather_nameError] = useState({
    "ru": "Заполните поле",
    "en": "Fill in the field"
  })
  const [father_nameDirty, setFather_nameDirty] = useState(false)
  const Father_nameHandler = (e) => {
    setFather_name(e.target.value)
    if (e.target.value.length < 3) {
      setFather_nameError({
        "ru": 'Фамилия не может быть меньше 3 символов',
        "en": "Last name cannot be less than 3 characters"
      })
      if (!e.target.value) {
        setFather_nameError({
          "ru": 'Фамилия не может быть меньше 3 символов',
          "en": "Last name cannot be less than 3 characters"
        })
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
  const [phone_numberError, setPhone_numberError] = useState({
    "ru": "Заполните поле",
    "en": "Fill in the field"
  })
  const [phone_numberDirty, setPhone_numberDirty] = useState(false)
  const Phone_numberHandler = (e) => {
    setPhone_number(e.target.value)
    if (e.target.value.length < 7) {
      setPhone_numberError({
        "ru": 'Телефон номер не может быть меньше 7 символов',
        "en": "Phone number cannot be less than 7 characters"
      })
      if (!e.target.value) {
        setPhone_numberError({
          "ru": 'Телефон номер не может быть меньше 7 символов',
          "en": "Phone number cannot be less than 7 characters"
        })
      }
    } else {
      setPhone_numberError('')
    }
  }
  /////validator email///
  const [emailDirty, setEmailDirty] = useState(false)
  const [emailError, setEmailError] = useState({
    "ru": "Заполните поле",
    "en": "Fill in the field"
  })
  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError({
        "ru": 'Некорректный email',
        "en": "Incorrect email"
      })
    } else {
      setEmailError("")
    }
  }
  ////repeat email///
  const [repeat, setRepeat] = useState("")
  const [repeatDirty, setRepeatDirty] = useState(false)
  const [repeatError, setRepeatError] = useState({
    "ru": "Заполните поле",
    "en": "Fill in the field"
  })
  const RepeatHandler = (e) => {
    setRepeat(e.target.value)
    if (email != String(e.target.value)) {
      setRepeatError({
        "ru": 'Email не совпадает',
        "en": "Email does not match"
      })
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
  const [checkerError, setCheckerError] = useState(false)
  const [checkerTrans, setCheckerTrans] = useState(false)
  const sendTransaction = async () => {
    try {
      const object = {
        basket: (JSON.parse(localStorage.getItem("basket")))
      }
      var copy = JSON.parse(JSON.stringify(object))
      copy.basket.map(item => (item.count = item.Count,
        delete item.id,
        delete item.weight,
        delete item.Count,
        delete item.imagesEn,
        delete item.imagesRu,
        delete item.name_ru,
        delete item.name_en))
      console.log(copy.basket, "copy");
      const { data } = !user.isAuth
        ? await transactionCreate2(delivery, 0, copy.basket, promo_code, basket.Price,
          {
            "email": email, 'father_name': father_name, "first_name": first_name, "phone_number": phone_number,
            "second_name": second_name
          })
        : await transactionCreate(delivery, 0, copy.basket, promo_code, basket.Price,
          {
            "email": email, 'father_name': father_name, "first_name": first_name, "phone_number": phone_number,
            "second_name": second_name
          })
      localStorage.removeItem("basket")
      console.log(data?.message, "/////////500");
      setData(data?.message);

      setCheckerTrans(true)

    } catch (error) {
      console.log(error?.response?.status, "///////////error//////////////");

    } finally {
      setCheckerError(true)

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
  const [checkerDelivery, setCheckerDelivery] = useState(false)
  const [checkerpolitica, setCheckerpolitika] = useState(false)
  const [checkOferta, setCheckOferta] = useState(false)
  const [formValid, setFormvalid] = useState(false)
  useEffect(() => {
    if (!checkerpolitica || !checkOferta || emailError || first_nameError || father_nameError || phone_numberError || repeatError || !checkSelfDelivey) {
      setFormvalid(false)
    } else {
      setFormvalid(true)
    }
  }, [checkerpolitica, checkOferta, emailError, first_nameError, father_nameError, phone_numberError, repeatError, checkSelfDelivey])

  useEffect(() => {
    if (checkerTrans) {
      localStorage.removeItem("basket")
      window.location.replace(data1)
    }
  }, [checkerTrans, first_nameError, father_nameError, lang.lang])

  console.log(user.isAuth)
  return (
    <div className='flex-1' style={{ minHeight: '100vh' }}>
      {
        basket.Basket.length !== 0
          ? <div className="block-page-order">
            <div className="container">
              <div className="text-center">
                {
                  lang?.lang == "ru" ?
                    <h2 className="block__title">Оформление заказа</h2>
                    : <h2 className="block__title">Checkout</h2>
                }

              </div>
              <div className="block-cart">
                {
                  lang?.lang == "ru" ?
                    <h3 className="block__title">Корзина</h3>
                    : <h3 className="block__title">Basket</h3>
                }


                <div className="table-responsive">
                  <table style={{ width: '100%', maxWidth: 'none' }}>
                    <thead>
                      <tr>
                        {
                          lang.lang == "ru"
                            ? <th style={{ width: '50%' }}>
                              Наименование</th>
                            : <th style={{ width: '50%' }}>
                              Designation</th>
                        }
                        {
                          lang.lang == "ru"
                            ? <th className="d-none d-sm-table-cell">Цена</th>
                            : <th className="d-none d-sm-table-cell">Price</th>
                        }
                        {
                          lang.lang == "ru"
                            ? <th>Количество</th>
                            : <th>Quantity</th>
                        }

                        {
                          lang.lang == "ru"
                            ? <th>Сумма</th>
                            : <th>Sum</th>

                        }

                        <th className="d-none d-sm-table-cell" />
                      </tr>
                    </thead>
                    <tbody id="table-cart">
                      {basket.Basket.map(item =>
                        <tr className="item" data-price={1790} data-product={2} data-shipping={1}>
                          <td><span className="cart-item__name">{lang?.lang === "ru" ? item?.name_ru : item?.name_en} </span><br /><span style={{ fontSize: '.8em' }}>
                            {lang.lang == "ru" ? <>Артикул</> : <>Article</>} {item?.article}</span></td>
                          <td className="d-none d-sm-table-cell">
                            {item.price}  {lang?.lang == "ru" ? <>руб</> : <>rub</>}
                          </td>
                          <td>
                            <div className="d-flex justify-content-center align-items-center box-quantity" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                              <a onClick={() => basket.setCountDevice(item.id, "-")} className="minus" />
                              <div type="text" name="quantity" className="quantity" style={{ paddingLeft: 0, paddingRight: 0 }} >{item?.Count}</div>
                              <a onClick={() => basket.setCountDevice(item.id, "+")} className="plus" />
                            </div>
                          </td>
                          <td>
                            <span className="item-total">
                              {item.Count * item.price}
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
                    <h3 className="block__title">  {lang?.lang == "ru" ? <>Покупатель</> : <>Customer</>}</h3>
                    <div className="box-form customer">
                      <div className="form-field">
                        <label htmlFor="last_name"> {lang?.lang == "ru" ? <>Ваша фамилия</> : <>Your surname</>}</label>
                        <input
                          onChange={(e) => Father_nameHandler(e)}
                          type="text"
                          name="father_name"
                          id="last_name"
                          onBlur={e => blurHandler(e)}
                          value={father_name}
                          placeholder={lang.lang === "ru" ? 'Напишите фамилию' : "Enter surname"}
                        />
                        {(father_nameDirty && father_nameError) &&
                          <label className='label_check'>{lang.lang === "ru" ? father_nameError.ru : father_nameError.en} </label>
                        }
                      </div>
                      <div className="form-field">
                        <label htmlFor="first_name">{lang?.lang == "ru" ? <>Ваше имя</> : <>Your name</>}</label>
                        <input
                          onChange={(e) => First_nameHandler(e)}
                          type="text"
                          name="first_name"
                          id="first_name"
                          value={first_name}
                          onBlur={e => blurHandler(e)}
                          placeholder={lang.lang === "ru" ? 'Напишите имя' : "Enter name"} />
                        {(first_nameDirty && first_nameError) &&
                          <label className='label_check'>{lang.lang === "ru" ? first_nameError.ru : first_nameError.en}</label>
                        }
                      </div>
                      {/* <div className="form-field">
                        <label htmlFor="second_name">{lang?.lang=="ru"?<>Ваше отечество</>:<>Your fatherland</>}</label>
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
                      </div> */}
                      <div className="form-field">
                        <label htmlFor="phone_number">{lang?.lang == "ru" ? <>Ваш телефон</> : <>Enter your phone number</>}</label>
                        <input
                          onChange={(e) => Phone_numberHandler(e)}
                          type="text"
                          name="phone_number"
                          id="phone_number"
                          value={phone_number}
                          onBlur={e => blurHandler(e)}
                          placeholder={lang.lang == "ru" ? 'Напишите телефон' : "Enter phone number"} />
                        {(phone_numberDirty && phone_numberError) &&
                          <label className='label_check'>{lang.lang === "ru" ? phone_numberError.ru : phone_numberError.en}</label>
                        }
                      </div>
                      <div className="form-field">
                        <label htmlFor="email"> {lang?.lang == "ru" ? <>Ваш email</> : <>Enter your email</>}</label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          onBlur={e => blurHandler(e)}
                          value={email}
                          onChange={(e) => emailHandler(e)}
                          placeholder={lang.lang == "ru" ? 'Напишите email' : "Enter email"} />
                        {(emailDirty && emailError) &&
                          <label className='label_check'>{lang.lang === "ru" ? emailError.ru : emailError.en}</label>
                        }
                      </div>
                      <div className="form-field">
                        <label htmlFor="repeat"> {lang?.lang == "ru" ? <> Повторите email</> : <>Repeat email </>}</label>
                        <input
                          onBlur={e => blurHandler(e)}
                          value={repeat}
                          onChange={e => RepeatHandler(e)}
                          placeholder={lang.lang == "ru" ? 'Повторите введенный email' : "Repeat email"}
                          type="text"
                          name="repeat"
                          id="repeat"
                          required />
                        {(repeatDirty && repeatError) &&
                          <label className='label_check'>{lang.lang === "ru" ? repeatError.ru : repeatError.en}</label>
                        }
                      </div>
                    </div>
                    <h3 className="block__title">  {lang?.lang == "ru" ? <> Доставка</> : <>Choose delivery </>}</h3>
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
                          <input type="checkbox" name="shipping-method" id="pickup" className="input-checkbox" onClick={changeSelfDelivery} />
                          <label htmlFor="pickup"> {lang?.lang == "ru" ? <> Самовывоз в Волгограде</> : <>Pickup in Volgograd </>} </label>
                        </div>



                      </div>
                    </div>
                    {
                      checkSelfDelivey
                        ? <div id="shipping-info" style={{ padding: 20, border: '2px solid rgb(179, 139, 138)', margin: 20, textAlign: 'center', display: 'block' }}>

                          {
                            lang.lang === "ru" ?
                              <span id="info-pvz-address">
                                Самовывоз по адресу: г. Волгоград, пр. Жукова 100б (вход через магазин "магнит")<br />Тел. +7 902 312-55-32</span>
                              : <span id="info-pvz-address">
                                Pickup at the address: Volgograd, Zhukov Ave. 100b (entrance through the store "magnet")<br />Tel. +7 902 312-55-32</span>
                          }

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
                          <input type="checkbox" id="1" className="input-checkbox" onChange={setGiftTic} />
                          <label htmlFor="1">
                            {lang.lang == "ru" ? <> Использовать подарочный
                              сертификат</> : <>Use gift
                                certificate</>
                            }

                          </label>
                        </div>
                      </div>
                    </div>
                    {
                      checkGift
                        ? <div className="box-form" id="box-field-voucher" >
                          <div className="form-field">
                            <label htmlFor="voucher"> {lang.lang == "ru" ? <>Подарочный сертификат</> : <>Gift Certificate</>
                            }</label>


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
                            {
                              lang.lang === "ru"
                                ? <td width="60%" id="cart-total">Товары в корзине</td>
                                : <td width="60%" id="cart-total">Items in the cart</td>
                            }

                            <td>{basket.Price}</td>
                          </tr>
                            <tr>
                              <td width="60%" id="delname" />
                              <td id="delprice" />
                            </tr>
                            <tr id="total-tr" style={{ fontWeight: 'bold', marginTop: '.5em' }}>
                              {
                                lang.lang === "ru"
                                  ? <td width="60%">Итого к оплате</td>
                                  : <td width="60%">
                                    Total payable</td>
                              }

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
                            {
                              lang.lang === "ru"
                                ? <span>Я принимаю условия </span>
                                : <span>I accept the terms </span>
                            }

                            <NavLink to='/ofertapage'>
                              {
                                lang.lang === "ru"
                                  ? <>публичной оферты</>
                                  : <>public offer</>
                              }

                            </NavLink>
                          </label>
                        </div>
                      </div>
                      <div className="text-center mt-2 d-flex justify-content-start">
                        <div style={{ position: 'relative' }}>
                          <input type="checkbox" name="politika" id="politika" className="input-checkbox" defaultValue={1} form="order"
                            onClick={(e) => setCheckerpolitika(e.target.checked)} />
                          {
                            lang.lang == "ru"
                              ? <label htmlFor="politika"><span>Я соглашаюсь с условиями  политики обработки персональных </span>
                                <NavLink to="/politicapage" >
                                  данных

                                </NavLink>
                              </label>
                              : <label htmlFor="politika"><span>I agree to the terms of the processing policy   personal </span>
                                <NavLink to="/politicapage" >

                                  data

                                </NavLink>
                              </label>
                          }

                        </div>
                      </div>


                    </div>
                    <div id="error-message" style={{ color: 'red', marginBottom: 15 }} />
                    <div className="text-center" onClick={sendTransaction}>
                      <button disabled={!formValid} type="submit" form="order" className="btn" id="submit">
                        {lang.lang === "ru"
                          ? <>К оплате</>
                          : <>To pay</>}</button>
                    </div>
                    {
                      checkerError
                        ? <div style={{ marginTop: "10px", color: "red" }}>
                          {lang.lang === "ru" ? <>Проверьте правильность заполнение формы или такой пользователь существует</>
                            : <>Check if the form is filled out correctly or such user exists</>} </div>
                        : null
                    }

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
              {
                lang.lang ==="ru"
                ?<> В корзине нет ни одного товара. Добавьте товар из каталога</>
                :<>There are no items in the cart. Add a product from the catalog</>
              }
             
            </div>
            <div className='text-center'>
              <NavLink to="/" className='btn'>
                {
                  lang.lang==="ru"
                  ?<>Go to catalog</>
                  :<></>
                }
                
              </NavLink>
            </div>
          </div>
      }


    </div>
  )
}

export default observer(Order)