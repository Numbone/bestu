import React from 'react'

const Partners = () => {
    return (
        <div className='flex-1' style={{ minHeight: '100%' }}>
            <div className='block-page-order'>
                <div className='text-center'>
                    <h1>
                        Анкета для дилеров
                    </h1>
                </div>
                <div className='form-order'>
                    <form>
                        <div className='row justify-content-center'>
                            <div className='col-lg-6 col-md-8'>
                                <h3>
                                    Заполните анкету и наш менеджер ответит на все Ваши вопросы
                                </h3>
                                <div className='box-form customer'>
                                    <div className='form-field'>
                                        <label for="name" >
                                            Кем вы являетесь?
                                        </label>
                                        <input type="text" name="name" id="name" ></input>
                                    </div>
                                    <div className='form-field'>
                                        <label for="name" >
                                            Опишите вашу услугу
                                        </label>
                                        <input type="text" name="name" id="name" ></input>
                                    </div>
                                    <div className='form-field'>
                                        <label for="name" >
                                            Ваше имя
                                        </label>
                                        <input type="text" name="name" id="name" ></input>
                                    </div>
                                    <div className='form-field'>
                                        <label for="name" >
                                            Ваш телефон
                                        </label>
                                        <input type="text" name="name" id="name" ></input>
                                    </div>
                                    <div className='form-field'>
                                        <label for="name" >
                                            Ваш email
                                        </label>
                                        <input type="text" name="name" id="name" ></input>
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

                                            <label for='politika'>
                                                Я соглашаюсь с условиями
                                                политики обработки
                                                <br></br>
                                                персональных данных
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <button type='submit'
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
    )
}

export default Partners