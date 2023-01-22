import React, { useContext, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import ModalSucces from '../component/ModalSuccess/ModalSucces'
import emailjs from '@emailjs/browser';
import '../pages/css/Dealers.css'
import { Context } from '..';
import { observer } from 'mobx-react-lite';
const Dealers = () => {
    const { lang } = useContext(Context)
    const [checker, setChecker] = useState(false)
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const form = useRef()
    const [active, setActive] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_w53fpdr', 'template_ynhq9ht', form.current, 'QR6Ghi73lFpWjvQzS')
            .then((result) => {
                if (result.text = "OK") {
                    setActive(true)
                }
            }, (error) => {
                console.log(error.text);
            });
        document.getElementById("form").reset()
    };
    return (
        <div className='flex-1' style={{ minHeight: '100%' }}>
            <div className='block-page-order'>
                <div className="container">
                    <div className='text-center'>
                        <h1>{
                            lang.lang === "ru"
                                ? <>   Анкета для дилеров</>
                                : <>Questionnaire for ambassadors</>
                        }

                        </h1>
                    </div>
                    <div className='form-order'>
                        <form ref={form} onSubmit={sendEmail} id="form">
                            <div className='row justify-content-center'>
                                <div className='col-lg-6 col-md-8'>
                                    <h3>{
                                        lang.lang === "ru"
                                            ? <> Заполните анкету и наш менеджер ответит на все Ваши вопросы</>
                                            : <>Fill out the form and our manager will answer all your questions</>
                                    }

                                    </h3>
                                    <div className="box-form customer">
                                        <div className="form-field">
                                            <label htmlFor="name">
                                                {
                                                    lang.lang === "ru"
                                                        ? <>  Ваше имя</>
                                                        : <>Your first name</>
                                                }
                                            </label>
                                            <input type="text" name="name" id="name" placeholder={lang.lang == "ru" ? "Введите имя" : "Enter your name"} />
                                        </div>

                                        <div className="form-field">
                                            <label htmlFor="phone">
                                                {
                                                    lang.lang === "ru"
                                                        ? <>   Ваш телефон</>
                                                        : <>Your phone</>
                                                }
                                            </label>
                                            <input type="text" name="phone" id="phone" placeholder={lang.lang == "ru" ? "Введите телефон" : "Enter phone"} />
                                        </div>
                                        <div className="form-field">
                                            <label htmlFor="email">
                                                {
                                                    lang.lang === "ru"
                                                        ? <>
                                                            Ваш email</>
                                                        : <>Your email</>
                                                }
                                            </label>
                                            <input type="text" name="email" id="email" placeholder={lang.lang == "ru" ? "Введите  email" : "Enter email"} />
                                        </div>
                                        <div className="form-field">
                                            <label htmlFor="service">
                                                {
                                                    lang.lang === "ru"
                                                        ? <>
                                                            Планируемая страна сотрудничества</>
                                                        : <>Planned country of cooperation</>
                                                }

                                            </label>
                                            <input type="text" name="service" id="service" placeholder={lang.lang == "ru" ? "Введите  страну" : "Enter country"} />
                                        </div>
                                        <div className="form-field">
                                            <label htmlFor="person">    {
                                                lang.lang === "ru"
                                                    ? <>
                                                        Планируемый город сотрудничества</>
                                                    : <>Planned cooperation city</>
                                            }

                                            </label>
                                            <input type="text" name="person" id="person" placeholder={lang.lang == "ru" ? "Введите город " : "Enter city"} />
                                        </div>
                                    </div>

                                    <hr></hr>
                                    <div className='box-form'>
                                        <div className='text-center mt-2 d-flex justify-content-start'>
                                            <div style={{ position: 'relative' }}>
                                                <input type="checkbox"
                                                    name='politika'
                                                    id='politika'
                                                    className='input-checkbox'
                                                    value='1'
                                                    form='order'
                                                    onChange={(e) => setChecker(e.target.checked)} />

                                                <label htmlFor="politika">

                                                    <span>
                                                        {
                                                            lang.lang === "ru"
                                                                ? <span style={{ marginRight: "5px" }}>
                                                                    Я соглашаюсь с условиями
                                                                    политики обработки персональных</span>
                                                                : <span style={{ marginRight: "5px" }}>I agree to the terms
                                                                    processing policies  personal  </span>
                                                        }
                                                    </span>
                                                    <NavLink to='/politicapage'>
                                                        {
                                                            lang.lang === "ru"
                                                                ? <span style= {{ paddingLeft: "15px" }} >
                                                                    данных</span>
                                                                : <span style= {{ paddingLeft: "15px" }}>     data</span>
                                                        }
                                                    </NavLink>

                                                </label>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-center'>
                                        <button type='submit'
                                            className='btn'
                                            disabled={!checker}
                                        >
                                            {
                                                lang.lang === "ru"
                                                    ? <>
                                                        Отправить заявку</>
                                                    : <>Submit an applications</>
                                            }

                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ModalSucces
                show={active}
                onHide={() => setActive(false)}
            />
        </div>
    )
}

export default observer(Dealers) 