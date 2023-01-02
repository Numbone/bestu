import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import emailjs from '@emailjs/browser';
const Partners = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_w53fpdr', 'template_ynhq9ht', form.current, 'QR6Ghi73lFpWjvQzS')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='flex-1' style={{ minHeight: '100%' }}>
            <div className='block-page-order'>
                <div className='container'>
                    <div className='text-center'>
                        <h1>
                            Анкета для дилеров
                        </h1>
                    </div>
                   
                        <div className='form-order'>
                            <form ref={form} onSubmit={sendEmail} >
                                <div className='row justify-content-center'>
                                    <div className='col-lg-6 col-md-8'>
                                        <h3>
                                            Заполните анкету и наш менеджер ответит на все Ваши вопросы
                                        </h3>
                                        <div className="box-form customer">
                                            <div className="form-field">
                                                <label htmlFor="person">
                                                    Кем вы являетесь?
                                                </label>
                                                <input type="text" name="person" id="person" placeholder='Введите...' />
                                            </div>
                                            <div className="form-field">
                                                <label htmlFor="service">
                                                    Опишите вашу услугу
                                                </label>
                                                <input type="text" name="service" id="service" placeholder='Введите услуги' />
                                            </div>
                                            <div className="form-field">
                                                <label htmlFor="name">
                                                    Ваше имя
                                                </label>
                                                <input type="text" name="name" id="name" placeholder='Введите имя' />
                                            </div>
                                            <div className="form-field">
                                                <label htmlFor="phone">
                                                    Ваш телефон
                                                </label>
                                                <input type="text" name="phone" id="phone" placeholder='Введите телефон' />
                                            </div>
                                            <div className="form-field">
                                                <label htmlFor="email">
                                                    Ваш email
                                                </label>
                                                <input type="text" name="email" id="email" placeholder='Введите email' />
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
                                                        form='order' />

                                                    <label htmlFor="politika">

                                                        <span> Я соглашаюсь с условиями
                                                            политики обработки </span>
                                                        <NavLink to='/politicapage'>
                                                            персональных данных
                                                        </NavLink>

                                                    </label>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='text-center'>
                                            <button type="submit" value="Send"
                                                className='btn'
                                            >
                                                Отправить заявку
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                  
                </div>
            </div>
        </div>
    )
}

export default Partners