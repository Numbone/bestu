import React, { useContext, useEffect, useState } from "react";
import { NavLink, redirect, useNavigate } from "react-router-dom";
import { Context } from "..";
import { transactionCreate, transactionCreate2 } from "../api/transaction";
import { observer } from "mobx-react-lite";
import "./css/Order.css";
import ModalSucces from "../component/ModalSuccess/ModalSucces";
import ModalError from "../component/ModalError/ModalError";
import { getUser } from "../api/user";
import ModalForCountry from "../component/ModalForCountry/ModalForCountry";
import CdekCountry from "../component/CdekCountry/CdekCountry";
import { getPromocode } from "../api/promocode";
import { cdekCalc } from "../api/cdek";
import Select from "react-select";

const options = [
  { value: "AM", label: "Армения" ,en:"Armenia"},
  { value: "BY", label: "Беларусь",en:"Belarus" },
  { value: "KZ", label: "Казахстан",en:"Kazakhstan" },
  { value: "KG", label: "Кыргызстан",en:"Kyrgyzstan" },
  { value: "RU", label: "Россия",en:"Russia" },
];
const Order = () => {
 
  const { basket, user, lang } = useContext(Context);
  const [cdek, setCdek] = useState();
  const [cdekSum, setCdekSum] = useState(0);
  const [promocode, setPromocode] = useState(undefined);
  const getDataPromocode = async () => {
    try {
      const { data } = await getPromocode(promo_code);
      setPromocode(data);
    } catch (error) {
      setPromocode(undefined);
    }
  };
  const getCalcCdek = async () => {
    try {
      if (delivery === "Доставка СДЕК") {
        const { data } = await cdekCalc(cdek?.location?.city_code);
        setCdekSum(data?.total_sum);
      }
    } catch (error) {
      setCdekSum(0);
    }
  };
  /// dropdown component
  const [open, setOpen] = React.useState(false);

  ////navigate
  const navigate = useNavigate();

  //state for api
  const [delivery, setDelivery] = useState("");
  const [email, setEmail] = useState("");
  const [father_name, setFather_name] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [products, setProducts] = useState([]);
  const [promo_code, setPromo_code] = useState("");
  const [second_name, setSecond_name] = useState("");
  const [total_cost, setTotal_cost] = useState(0);
  const [count, setCount] = useState(0);
  const [data1, setData] = useState("");
  //api for transaction/create

  const [active, setActive] = useState(false);
  const [activeError, setActiveError] = useState(false);

  const [modalCountry, setModalCountry] = useState(false);

  /////validator first name
  const [first_nameError, setFirst_nameError] = useState({
    ru: "Заполните поле",
    en: "Fill in the field",
  });
  const [first_nameDirty, setFirst_nameDirty] = useState(false);
  const First_nameHandler = (e) => {
    setFirst_name(e.target.value);
    if (e.target.value.length < 3) {
      setFirst_nameError({
        ru: "Имя не может быть меньше 3 символов",
        en: "Name cannot be less than 3 characters",
      });
      if (!e.target.value) {
        setFirst_nameError({
          ru: "Имя не может быть меньше 3 символов",
          en: "Name cannot be less than 3 characters",
        });
      }
    } else {
      setFirst_nameError("");
    }
  };

  ///validator father name
  const [father_nameError, setFather_nameError] = useState({
    ru: "Заполните поле",
    en: "Fill in the field",
  });
  const [father_nameDirty, setFather_nameDirty] = useState(false);
  const Father_nameHandler = (e) => {
    setFather_name(e.target.value);
    if (e.target.value.length < 3) {
      setFather_nameError({
        ru: "Фамилия не может быть меньше 3 символов",
        en: "Last name cannot be less than 3 characters",
      });
      if (!e.target.value) {
        setFather_nameError({
          ru: "Фамилия не может быть меньше 3 символов",
          en: "Last name cannot be less than 3 characters",
        });
      }
    } else {
      setFather_nameError("");
    }
  };
  /// validator second name
  const [second_nameError, setSecond_nameError] = useState({
    ru: "Заполните поле",
    en: "Fill in the field",
  });
  const [second_nameDirty, setSecond_nameDirty] = useState(false);
  const Second_nameHandler = (e) => {
    setSecond_name(e.target.value);
    if (e.target.value.length < 3) {
      setSecond_nameError({
        ru: "Отечество номер не может быть меньше 7 символов",
        en: "Fatherland number cannot be less than 7 characters",
      });
      if (!e.target.value) {
        setSecond_nameError({
          ru: "Отечество номер не может быть меньше 7 символов",
          en: "Fatherland number cannot be less than 7 characters",
        });
      }
    } else {
      setSecond_nameError("");
    }
  };

  //// validator phone
  const [phone_numberError, setPhone_numberError] = useState({
    ru: "Заполните поле",
    en: "Fill in the field",
  });
  const [phone_numberDirty, setPhone_numberDirty] = useState(false);
  const Phone_numberHandler = (e) => {
    setPhone_number(e.target.value);
    if (e.target.value.length < 7) {
      setPhone_numberError({
        ru: "Телефон номер не может быть меньше 7 символов",
        en: "Phone number cannot be less than 7 characters",
      });
      if (!e.target.value) {
        setPhone_numberError({
          ru: "Телефон номер не может быть меньше 7 символов",
          en: "Phone number cannot be less than 7 characters",
        });
      }
    } else {
      setPhone_numberError("");
    }
  };
  /////validator email///
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState({
    ru: "Заполните поле",
    en: "Fill in the field",
  });
  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError({
        ru: "Некорректный email",
        en: "Incorrect email",
      });
    } else {
      setEmailError("");
    }
  };
  ////repeat email///
  const [repeat, setRepeat] = useState("");
  const [repeatDirty, setRepeatDirty] = useState(false);
  const [repeatError, setRepeatError] = useState({
    ru: "Заполните поле",
    en: "Fill in the field",
  });
  const RepeatHandler = (e) => {
    setRepeat(e.target.value);
    if (email != String(e.target.value)) {
      setRepeatError({
        ru: "Email не совпадает",
        en: "Email does not match",
      });
    } else {
      setRepeatError("");
    }
  };
  //////blurHandler for all input
  const blurHandler = (e) => {
    switch (e.target.name) {
      case "father_name":
        setFather_nameDirty(true);
        break;
      case "first_name":
        setFirst_nameDirty(true);
        break;
      case "second_name":
        setSecond_nameDirty(true);
        break;
      case "phone_number":
        setPhone_numberDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "repeat":
        setRepeatDirty(true);
        break;
    }
  };
  const [checkerError, setCheckerError] = useState(false);
  const [checkerTrans, setCheckerTrans] = useState(false);
  const sendTransaction = async () => {
    try {
      const object = {
        basket: JSON.parse(localStorage.getItem("basket")),
      };
      var copy = JSON.parse(JSON.stringify(object));
      copy.basket.map(
        (item) => (
          (item.count = item.Count),
          delete item.id,
          delete item.weight,
          delete item.Count,
          delete item.imagesEn,
          delete item.imagesRu,
          delete item.name_ru,
          delete item.name_en
        )
      );
      console.log(copy.basket, "copy");
      let basketPrice;
      basketPrice =
        promocode === undefined
          ? basket.Price + cdekSum
          : promocode?.type === "Скидка в процентах на корзину"
          ? basket.Price - (basket.Price * promocode?.discount) / 100 + cdekSum
          : promocode?.type === "Скидка в рублях на корзину"
          ? basket.Price - promocode?.discount + cdekSum
          : promocode?.type === "Скидка в процентах на один товар" &&
            basket.Basket.length === 1 &&
            basket.Basket[0].Count === 1
          ? basket.Price - (basket.Price * promocode?.discount) / 100 + cdekSum
          : basket.Pricee + cdekSum;
      const { data } = !user.isAuth
        ? await transactionCreate2(
            {
              delivery_address: !checkSelfDelivey
                ? cdek?.location?.address_full
                : "г. Волгоград, пр. Жукова 100б ",
              delivery_commpany: !checkSelfDelivey
                ? "CDEK"
                : "Самовызов Волгограде",
              delivery_cost: cdekSum,
              delivery_point: !checkSelfDelivey
                ? cdek?.code
                : "Самовызов Волгограде",
            },
            copy.basket,
            promo_code,
            !checkSelfDelivey
                ? cdek?.phones?.[0]?.number
                : "Самовызов Волгограде ",
            basket.Price,
            {
              email: email,
              father_name: father_name,
              first_name: first_name,
              phone_number: phone_number,
              second_name: second_name,
            }
          )
        : await transactionCreate(
            {
              delivery_address: !checkSelfDelivey
                ? cdek?.location?.address_full
                : "Самовызов Волгограде",
              delivery_commpany: !checkSelfDelivey
                ? "CDEK"
                : "Самовызов Волгограде",
              delivery_cost: cdekSum,
              delivery_point: !checkSelfDelivey
                ? cdek?.code
                : "Самовызов Волгограде",
            },
            copy.basket,
            promo_code,
            !checkSelfDelivey
                ? cdek?.phones?.[0]?.number
                : "Самовызов Волгограде ",
            basket.Price,
            {
              email: email,
              father_name: father_name,
              first_name: first_name,
              phone_number: phone_number,
              second_name: second_name,
            }
          );
      localStorage.removeItem("basket");
      console.log(data?.message, "/////////500");
      setData(data?.message);

      setCheckerTrans(true);
    } catch (error) {
      console.log(error?.response?.status, "///////////error//////////////");
    } finally {
      setCheckerError(true);
    }
  };

  //////////////////////////////CDEK
  const [counrtyCode, setCountryCode] = useState("RU");

  const handleOpen = () => {
    if (count % 2 == 0) {
      setOpen(!open);
    }
    setCount((count) => count + 1);
    setDelivery("Почта России");
  };
  const [checkSelfDelivey, setcheckSelfDevivery] = useState(false);
  const changeSelfDelivery = (e) => {
    setcheckSelfDevivery(e.target.checked);
  };

  const [checkGift, setcheckGift] = useState(false);
  const [coupon, setCoupon] = useState(false);
  const [gift, setGift] = useState(false);
  const setGiftTic = (e) => {
    setCoupon(false);
    setGift(true);
    setcheckGift(e.target.checked);
  };
  const setGiftTic2 = (e) => {
    setGift(false);
    setCoupon(true);
    setcheckGift(e.target.checked);
  };
  const [checkerDelivery, setCheckerDelivery] = useState(false);
  const [checkerpolitica, setCheckerpolitika] = useState(false);
  const [checkOferta, setCheckOferta] = useState(false);
  const [formValid, setFormvalid] = useState(false);

  const[auth,setAuth]=useState({})
  const getUserData=async()=>{
    try {
      const data=await getUser()
      setAuth(data?.User)
      setEmail(data?.User?.email)
      setFather_name(data?.User.father_name)
      setFirst_name(data?.User?.first_name)
      setPhone_number(data?.User?.phone_number)
      setSecond_name(data?.User?.second_name)
      setRepeat(data?.User?.email)
    } catch (error) {
      
    }
   
  }
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(()=>{
    getUserData()
  },[])
  useEffect(() => {
    if (
      !checkerpolitica ||
      !checkOferta ||
      emailError ||
      first_nameError ||
      father_nameError ||
      phone_numberError ||
      repeatError
    ) {
      setFormvalid(false);
    } else {
      setFormvalid(true);
    }
  }, [
    checkerpolitica,
    checkOferta,
    emailError,
    first_nameError,
    father_nameError,
    phone_numberError,
    repeatError,
  ]);
  
  useEffect(() => {
    if (checkerTrans) {
      localStorage.removeItem("basket");
      window.location.replace(data1);
    }
  }, [checkerTrans, first_nameError, father_nameError, lang.lang]);

  useEffect(() => {
    getDataPromocode();
  }, [promo_code]);
  useEffect(() => {
    getCalcCdek();
    if (delivery != "Доставка СДЕК") {
      setCdekSum(0);
    }
  }, [cdek, delivery]);
 
  console.log(cdek, "cdek");
  console.log(cdekSum, "cdekSum");
  return (
    <div className="flex-1" style={{ minHeight: "100vh" }}>
      {basket.Basket.length !== 0 ? (
        <div className="block-page-order">
          <div className="container">
            <div className="text-center">
              {lang?.lang == "ru" ? (
                <h2 className="block__title">Оформление заказа</h2>
              ) : (
                <h2 className="block__title">Checkout</h2>
              )}
            </div>
            <div className="block-cart">
              {lang?.lang == "ru" ? (
                <h3 className="block__title">Корзина</h3>
              ) : (
                <h3 className="block__title">Basket</h3>
              )}

              <div className="table-responsive">
                <table style={{ width: "100%", maxWidth: "none" }}>
                  <thead>
                    <tr>
                      {lang.lang == "ru" ? (
                        <th style={{ width: "50%" }}>Наименование</th>
                      ) : (
                        <th style={{ width: "50%" }}>Designation</th>
                      )}
                      {lang.lang == "ru" ? (
                        <th className="d-none d-sm-table-cell">Цена</th>
                      ) : (
                        <th className="d-none d-sm-table-cell">Price</th>
                      )}
                      {lang.lang == "ru" ? (
                        <th>Количество</th>
                      ) : (
                        <th>Quantity</th>
                      )}

                      {lang.lang == "ru" ? <th>Сумма</th> : <th>Sum</th>}

                      <th className="d-none d-sm-table-cell" />
                    </tr>
                  </thead>
                  <tbody id="table-cart">
                    {basket.Basket.map((item) => (
                      <tr
                        className="item"
                        data-price={1790}
                        data-product={2}
                        data-shipping={1}
                      >
                        <td>
                          <span className="cart-item__name">
                            {lang?.lang === "ru"
                              ? item?.name_ru
                              : item?.name_en}{" "}
                          </span>
                          <br />
                          <span style={{ fontSize: ".8em" }}>
                            {lang.lang == "ru" ? <>Артикул</> : <>Article</>}{" "}
                            {item?.article}
                          </span>
                        </td>
                        <td className="d-none d-sm-table-cell">
                          {item.price}{" "}
                          {lang?.lang == "ru" ? <>руб</> : <>rub</>}
                        </td>
                        <td>
                          <div
                            className="d-flex justify-content-center align-items-center box-quantity"
                            style={{ marginLeft: "auto", marginRight: "auto" }}
                          >
                            <a
                              onClick={() =>
                                basket.setCountDevice(item.id, "-")
                              }
                              className="minus"
                            />
                            <div
                              type="text"
                              name="quantity"
                              className="quantity"
                              style={{ paddingLeft: 0, paddingRight: 0 }}
                            >
                              {item?.Count}
                            </div>
                            <a
                              onClick={() =>
                                basket.setCountDevice(item.id, "+")
                              }
                              className="plus"
                            />
                          </div>
                        </td>
                        <td>
                          <span className="item-total">
                            {item.Count * item.price}
                          </span>
                        </td>
                        <td className=" d-sm-table-cell">
                          <div
                            onClick={() => basket.setDeleteItemBasket(item)}
                            style={{ color: "#fff" }}
                          >
                            Х
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="form-order">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8">
                  <h3 className="block__title">
                    {" "}
                    {lang?.lang == "ru" ? <>Покупатель</> : <>Customer</>}
                  </h3>
                  <div className="box-form customer">
                    <div className="form-field">
                      <label htmlFor="last_name">
                        {" "}
                        {lang?.lang == "ru" ? (
                          <>Ваша фамилия</>
                        ) : (
                          <>Your surname</>
                        )}
                      </label>
                      <input
                        onChange={(e) => Father_nameHandler(e)}
                        type="text"
                        name="father_name"
                        id="last_name"
                        onBlur={(e) => blurHandler(e)}
                        value={father_name}
                        placeholder={
                          lang.lang === "ru"
                            ? "Напишите фамилию"
                            : "Enter surname"
                        }
                      />
                      {father_nameDirty && father_nameError && (
                        <label className="label_check">
                          {lang.lang === "ru"
                            ? father_nameError.ru
                            : father_nameError.en}{" "}
                        </label>
                      )}
                    </div>
                    <div className="form-field">
                      <label htmlFor="first_name">
                        {lang?.lang == "ru" ? <>Ваше имя</> : <>Your name</>}
                      </label>
                      <input
                        onChange={(e) => First_nameHandler(e)}
                        type="text"
                        name="first_name"
                        id="first_name"
                        value={first_name}
                        onBlur={(e) => blurHandler(e)}
                        placeholder={
                          lang.lang === "ru" ? "Напишите имя" : "Enter name"
                        }
                      />
                      {first_nameDirty && first_nameError && (
                        <label className="label_check">
                          {lang.lang === "ru"
                            ? first_nameError.ru
                            : first_nameError.en}
                        </label>
                      )}
                    </div>
                    <div className="form-field">
                      <label htmlFor="second_name">
                        {lang?.lang == "ru" ? (
                          <>Ваше отчество</>
                        ) : (
                          <>Your fatherland</>
                        )}
                      </label>
                      <input
                        onChange={(e) => Second_nameHandler(e)}
                        type="text"
                        name="second_name"
                        id="second_name"
                        value={second_name}
                        onBlur={(e) => blurHandler(e)}
                        placeholder={
                          lang.lang === "ru"
                            ? "Напишите отчество"
                            : "Write the fatherland"
                        }
                      />
                      {second_nameDirty && second_nameError && (
                        <label className="label_check">
                          {lang.lang === "ru"
                            ? second_nameError.ru
                            : second_nameError.en}
                        </label>
                      )}
                    </div>
                    <div className="form-field">
                      <label htmlFor="phone_number">
                        {lang?.lang == "ru" ? (
                          <>Ваш телефон</>
                        ) : (
                          <>Enter your phone number</>
                        )}
                      </label>
                      <input
                        onInput={(e) =>
                          (e.target.value = e.target.value
                            .replace(/[^0-9.]/g, "")
                            .replace(/(\..*?)\..*/g, "$1")
                            .replace(/^0[^.]/, "0"))
                        }
                        value={phone_number}
                        onChange={(e) => Phone_numberHandler(e)}
                        type="tel"
                        pattern="7-[0-9]{3}-[0-9]{4}"
                        required
                        name="phone_number"
                        id="phone_number"
                        // value={phone_number}
                        onBlur={(e) => blurHandler(e)}
                        placeholder={
                          lang.lang == "ru"
                            ? "Напишите телефон"
                            : "Enter phone number"
                        }
                      />
                      {phone_numberDirty && phone_numberError && (
                        <label className="label_check">
                          {lang.lang === "ru"
                            ? phone_numberError.ru
                            : phone_numberError.en}
                        </label>
                      )}
                    </div>
                    <div className="form-field">
                      <label htmlFor="email">
                        {" "}
                        {lang?.lang == "ru" ? (
                          <>Ваш email</>
                        ) : (
                          <>Enter your email</>
                        )}
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        onBlur={(e) => blurHandler(e)}
                        value={email}
                        onChange={(e) => emailHandler(e)}
                        placeholder={
                          lang.lang == "ru" ? "Напишите email" : "Enter email"
                        }
                      />
                      {emailDirty && emailError && (
                        <label className="label_check">
                          {lang.lang === "ru" ? emailError.ru : emailError.en}
                        </label>
                      )}
                    </div>
                    <div className="form-field">
                      <label htmlFor="repeat">
                        {" "}
                        {lang?.lang == "ru" ? (
                          <> Повторите email</>
                        ) : (
                          <>Repeat email </>
                        )}
                      </label>
                      <input
                        onBlur={(e) => blurHandler(e)}
                        value={repeat}
                        onChange={(e) => RepeatHandler(e)}
                        placeholder={
                          lang.lang == "ru"
                            ? "Повторите введенный email"
                            : "Repeat email"
                        }
                        type="text"
                        name="repeat"
                        id="repeat"
                        required
                      />
                      {repeatDirty && repeatError && (
                        <label className="label_check">
                          {lang.lang === "ru" ? repeatError.ru : repeatError.en}
                        </label>
                      )}
                    </div>
                  </div>
                  <h3 className="block__title">
                    {" "}
                    {lang?.lang == "ru" ? (
                      <> Доставка</>
                    ) : (
                      <>Choose delivery </>
                    )}
                  </h3>
                  <div className="shipping-country mb-4">
                    <div className="box-form">
                      <div className="form-field">
                        <label htmlFor="country">Страна</label>
                        <Select
                          placeholder={""}
                          options={options}
                          getOptionLabel={(status) =>lang.lang==="ru"? status?.label :status?.en}
                          defaultValue={options[4]}
                          onChange={(e) => setCountryCode(e?.value)}
                          theme={(theme) => ({
                            ...theme,
                            borderRadius: "4px",
                            colors: {
                              ...theme.colors,
                              primary25: "#e7dbe2",
                              primary: "black",
                            },
                          })}
                          styles={{
                            container: (base) => ({
                              ...base,
                              height: "48px",
                              marginTop: "20px",
                            }),
                            control: (base, { isFocused }) => ({
                              ...base,
                              height: "48px",
                              border: isFocused && "inherit",
                            }),
                            valueContainer: (base) => ({
                              ...base,
                              height: "48px",
                              padding: "0 3px",
                            }),
                            indicatorsContainer: (base) => ({
                              display: "none",
                            }),
                            input: (base) => ({
                              ...base,
                              margin: "0",
                              paddingBottom: "0",
                              paddingTop: "0",
                            }),
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="shipping-choose">
                    <div className="box-form">
                      <div
                        className="form-field"
                        onClick={() => setDelivery("Доставка СДЕК")}
                      >
                        <input
                          type="radio"
                          name="shipping-method"
                          id="pickup1"
                          className="input-checkbox"
                          onClick={() => setModalCountry(true)}
                        />
                        <label htmlFor="pickup1">
                          {" "}
                          {lang?.lang == "ru" ? (
                            <> СДЭК до пункта выдачи</>
                          ) : (
                            <>CDEK to the point of issue </>
                          )}{" "}
                        </label>
                      </div>
                    </div>
                    <div className="box-form">
                      <div
                        className="form-field"
                        onClick={() => setDelivery("Самовывоз в Волгограде")}
                      >
                        <input
                          type="radio"
                          name="shipping-method"
                          id="pickup"
                          className="input-checkbox"
                          onClick={changeSelfDelivery}
                        />
                        <label htmlFor="pickup">
                          {" "}
                          {lang?.lang == "ru" ? (
                            <> Самовывоз в Волгограде</>
                          ) : (
                            <>Pickup in Volgograd </>
                          )}{" "}
                        </label>
                      </div>
                    </div>
                  </div>
                  {delivery === "Самовывоз в Волгограде" ? (
                    <div
                      id="shipping-info"
                      style={{
                        padding: 20,
                        border: "2px solid rgb(179, 139, 138)",
                        margin: 20,
                        textAlign: "center",
                        display: "block",
                      }}
                    >
                      {lang.lang === "ru" ? (
                        <span id="info-pvz-address">
                          Самовывоз по адресу: г. Волгоград, пр. Жукова 100б
                          (вход через магазин "Магнит")
                          <br />
                          Тел. +7 902 312-55-32
                        </span>
                      ) : (
                        <span id="info-pvz-address">
                          Pickup at the address: Volgograd, Zhukov Ave. 100b
                          (entrance through the store "magnet")
                          <br />
                          Tel. +7 902 312-55-32
                        </span>
                      )}
                    </div>
                  ) : null}

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
                      <div style={{ position: "relative" }}>
                        <input
                          type="radio"
                          id="1"
                          name="coupon"
                          className="input-checkbox"
                          onChange={setGiftTic2}
                        />
                        <label htmlFor="1">
                          {lang.lang == "ru" ? (
                            <> Использовать промокод или купон</>
                          ) : (
                            <>Use promocode or coupon</>
                          )}
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="box-form">
                    <div className="text-center mt-2 d-flex">
                      <div style={{ position: "relative" }}>
                        <input
                          type="radio"
                          id="2"
                          name="coupon"
                          className="input-checkbox"
                          onChange={setGiftTic}
                        />
                        <label htmlFor="2">
                          {lang.lang == "ru" ? (
                            <> Использовать подарочный сертификат</>
                          ) : (
                            <>Use gift certificate</>
                          )}
                        </label>
                      </div>
                    </div>
                  </div>
                  {checkGift ? (
                    <div className="box-form" id="box-field-voucher">
                      <div className="form-field">
                        <label htmlFor="voucher">
                          {" "}
                          {lang.lang == "ru" && gift ? (
                            <>Подарочный сертификат</>
                          ) : lang.lang === "ru" && coupon ? (
                            <>Промокод</>
                          ) : lang.lang === "en" && gift ? (
                            <>Gift certificates</>
                          ) : lang.lang === "en" && coupon ? (
                            <>Promocode</>
                          ) : null}
                        </label>

                        <input
                          onChange={(e) => setPromo_code(e.target.value)}
                          type="text"
                          name="voucher"
                          id="voucher"
                          form="order"
                        />
                      </div>
                    </div>
                  ) : null}

                  <hr />
                  <div className="box-form">
                    <div id="total-block">
                      <table className="table" style={{ width: "100%" }}>
                        <tbody>
                          <tr>
                            {lang.lang === "ru" ? (
                              <td width="60%" id="cart-total">
                                Товары в корзине
                              </td>
                            ) : (
                              <td width="60%" id="cart-total">
                                Items in the cart
                              </td>
                            )}

                            <td>{basket.Price}</td>
                          </tr>
                          {cdek != undefined && delivery === "Доставка СДЕК" ? (
                            <tr>
                              {lang.lang === "ru" ? (
                                <td width="60%" id="cart-total">
                                  Доставка СДЭК
                                </td>
                              ) : (
                                <td width="60%" id="cart-total">
                                  Delivery CDEK{" "}
                                </td>
                              )}

                              <td>{cdekSum}</td>
                            </tr>
                          ) : null}

                          {promocode != undefined ? (
                            <tr>
                              {lang.lang === "ru" ? (
                                <td width="60%" id="cart-total">
                                  Промокоды
                                </td>
                              ) : (
                                <td width="60%" id="cart-total">
                                  Promocode
                                </td>
                              )}

                              <td>{promocode?.discount}</td>
                            </tr>
                          ) : null}

                          <tr
                            id="total-tr"
                            style={{ fontWeight: "bold", marginTop: ".5em" }}
                          >
                            {lang.lang === "ru" ? (
                              <td width="60%">Итого к оплате</td>
                            ) : (
                              <td width="60%">Total payable</td>
                            )}

                            <td id="total">
                              {promocode === undefined
                                ? basket.Price + cdekSum
                                : promocode?.type ===
                                  "Скидка в процентах на корзину"
                                ? basket.Price -
                                  (basket.Price * promocode?.discount) / 100 +
                                  cdekSum
                                : promocode?.type ===
                                  "Скидка в рублях на корзину"
                                ? basket.Price - promocode?.discount + cdekSum
                                : promocode?.type ===
                                    "Скидка в процентах на один товар" &&
                                  basket.Basket.length === 1 &&
                                  basket.Basket[0].Count === 1
                                ? basket.Price -
                                  (basket.Price * promocode?.discount) / 100 +
                                  cdekSum
                                : basket.Pricee + cdekSum}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <hr />
                  <div className="box-form" id="agreements">
                    <div className="text-center mt-2 d-flex justify-content-start">
                      <div style={{ position: "relative" }}>
                        <input
                          type="checkbox"
                          name="oferta"
                          id="oferta"
                          className="input-checkbox"
                          defaultValue={1}
                          form="order"
                          onClick={(e) => setCheckOferta(e.target.checked)}
                        />
                        <label htmlFor="oferta">
                          {lang.lang === "ru" ? (
                            <span>Я принимаю условия </span>
                          ) : (
                            <span>I accept the terms </span>
                          )}

                          <NavLink to="/ofertapage">
                            {lang.lang === "ru" ? (
                              <>публичной оферты</>
                            ) : (
                              <>public offer</>
                            )}
                          </NavLink>
                        </label>
                      </div>
                    </div>
                    <div className="text-center mt-2 d-flex justify-content-start">
                      <div style={{ position: "relative" }}>
                        <input
                          type="checkbox"
                          name="politika"
                          id="politika"
                          className="input-checkbox"
                          defaultValue={1}
                          form="order"
                          onClick={(e) => setCheckerpolitika(e.target.checked)}
                        />
                        {lang.lang == "ru" ? (
                          <label htmlFor="politika">
                            <span>
                              Я соглашаюсь с условиями политики обработки
                              персональных{" "}
                            </span>
                            <NavLink to="/politicapage">данных</NavLink>
                          </label>
                        ) : (
                          <label htmlFor="politika">
                            <span>
                              I agree to the terms of the processing policy
                              personal{" "}
                            </span>
                            <NavLink to="/politicapage">data</NavLink>
                          </label>
                        )}
                      </div>
                    </div>
                  </div>
                  <div
                    id="error-message"
                    style={{ color: "red", marginBottom: 15 }}
                  />
                  <div className="text-center" onClick={sendTransaction}>
                    <button
                      
                      type="submit"
                      form="order"
                      className="btn"
                      id="submit"
                    >
                      {lang.lang === "ru" ? <>К оплате</> : <>To pay</>}
                    </button>
                  </div>
                  {checkerError ? (
                    <div style={{ marginTop: "10px", color: "red" }}>
                      {lang.lang === "ru" ? (
                        <>
                          Проверьте правильность заполнение формы или такой
                          пользователь существует
                        </>
                      ) : (
                        <>
                          Check if the form is filled out correctly or such user
                          exists
                        </>
                      )}{" "}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <ModalForCountry active={modalCountry} setActive={setModalCountry}>
            <CdekCountry
              counrtyCode={counrtyCode}
              active={modalCountry}
              setActive={setModalCountry}
              setCdek={setCdek}
            />
          </ModalForCountry>
          <ModalSucces show={active} onHide={() => setActive(false)} />
          <ModalError show={activeError} onHide={() => setActiveError(false)} />
        </div>
      ) : (
        <div className="block-page-order">
          <div className="text-center mb-5" style={{ fontSize: "14px" }}>
            {lang.lang === "ru" ? (
              <> В корзине нет ни одного товара. Добавьте товар из каталога</>
            ) : (
              <>
                There are no items in the cart. Add a product from the catalog
              </>
            )}
          </div>
          <div className="text-center">
            <NavLink to="/" className="btn">
              {lang.lang === "ru" ? <>Перейти каталогу</> : <>Go to catalog</>}
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default observer(Order);
