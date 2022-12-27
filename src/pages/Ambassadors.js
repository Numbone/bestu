import React from 'react'
import { NavLink } from 'react-router-dom'
import '../pages/css/Ambassador.css'
const Ambassadors = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [file, setFile] = React.useState([])
  const selectFile = (e) => {
    setFile(e.target.files)
  }

  return (
    <div className='flex-1' style={{ minHeight: '100%' }}>
      <div className='block-page-order'>
        <div className="container">
          <div className='text-center'>
            <h1>
              Анкета для амбассадоров
            </h1>
          </div>
          <div className='form-order'>
            <form>
              <div className='row justify-content-center'>
                <div className='col-lg-6 col-md-8'>
                  <h3>
                    Заполните анкету и наш менеджер ответит на все Ваши вопросы
                  </h3>
                  <div className="box-form customer">
                    <div className="form-field">
                      <label htmlFor="name">
                        Кем вы являетесь?
                      </label>
                      <input type="text" name="name" id="name" placeholder="Введите..." />
                    </div>
                    <div className="form-field">
                      <label htmlFor="name">
                        Блог предлагаемого амбассадора
                      </label>
                      <input type="text" name="name" id="name" placeholder="Введите..." />
                    </div>
                    <div className="form-field">
                      <label htmlFor="name">
                        Актуальные охваты в сторис (приложить фото)
                      </label>
                      <div className="field__wrapper">
                        <input type="file" className="field field__file" id="file" onChange={selectFile} multiple />
                        <label className="field__file-wrapper" for="file">
                          <div className="field__file-fake">
                            {
                              file.length == 0 ? <span>Файл не выбран</span>
                                : <div>Файлы выбраны</div>
                            }
                          </div>
                          <div className="field__file-button">
                            Выбрать
                          </div>
                        </label>
                      </div>
                    </div>
                    <div className="form-field">
                      <label htmlFor="name">
                        Ваше имя
                      </label>
                      <input type="text" name="name" id="name" placeholder="Введите имя" />
                    </div>
                    <div className="form-field">
                      <label htmlFor="name">
                        Ваш телефон
                      </label>
                      <input type="text" name="name" id="name" placeholder="Введите телефон" />
                    </div>
                    <div className="form-field">
                      <label htmlFor="name">
                        Ваш email
                      </label>
                      <input type="text" name="name" id="name" placeholder="Введите email" />
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
    </div>
  )
}

export default Ambassadors