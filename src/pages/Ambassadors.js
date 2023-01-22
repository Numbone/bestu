import React, { useContext, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../pages/css/Ambassador.css'
import emailjs from '@emailjs/browser';
import ModalSucces from '../component/ModalSuccess/ModalSucces';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
const Ambassadors = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  // const [file, setFile] = React.useState([])
  // const selectFile = (e) => {
  //   setFile(e.target.files[0])
  // }
  const [checker, setChecker] = useState(false)
  const { lang } = useContext(Context)
  const form = useRef()
  const [name, setName] = useState('')
  const [person, setPerson] = useState('')
  const [service, setService] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  // const convertBase64 = (file1) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(file1);

  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };

  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     };
  //   });
  // };
  const [active, setActive] = useState(false)
  const sendEmail = async (e) => {
    e.preventDefault();
    // const test = await convertBase64(file)
    // setPhoto(test)

    emailjs.sendForm('service_w53fpdr', 'template_ynhq9ht', form.current, 'QR6Ghi73lFpWjvQzS')
      .then((result) => {
        if (result.text = "OK") {
          setActive(true)
        }
      }, (error) => {
        console.log(error.text);
      });
  };
  console.log(checker, "amva")
  return (
    <div className='flex-1' style={{ minHeight: '100%' }}>
      <div className='block-page-order'>
        <div className="container">
          <div className='text-center'>
            <h1>
              {
                lang.lang === "ru"
                  ? <> Анкета для амбассадоров</>
                  : <>Questionnaire for ambassadors</>
              }

            </h1>
          </div>
          <div className='form-order'>
            <form ref={form} onSubmit={sendEmail} >
              <div className='row justify-content-center'>
                <div className='col-lg-6 col-md-8'>
                  <h3>
                    {
                      lang.lang === "ru"
                        ? <> Заполните анкету и наш менеджер ответит на все Ваши вопросы</>
                        : <>Fill out the form and our manager will answer all your questions</>
                    }

                  </h3>
                  <div className="box-form customer">
                    <div className="form-field">
                      <label htmlFor="person">
                        {
                          lang.lang === "ru"
                            ? <>  Кем вы являетесь?</>
                            : <>Who are you?</>
                        }

                      </label>
                      <input
                        onChange={(e) => setPerson(e.target.value)}
                        type="text"
                        name="person"
                        id="person"
                        placeholder={lang.lang == "ru" ? "Введите..." : "Enter..."} />
                    </div>
                    <div className="form-field">
                      <label htmlFor="service">
                        {
                          lang.lang === "ru"
                            ? <> Блог предлагаемого амбассадора</>
                            : <>Proposed Ambassador Blog</>
                        }

                      </label>
                      <input
                        onChange={(e) => setService(e.target.value)}
                        type="text"
                        name="service"
                        id="service"
                        placeholder={lang.lang == "ru" ? "Введите..." : "Enter..."} />
                    </div>
                    {/* <div className="form-field">
                      <label htmlFor="">
                        Актуальные охваты в сторис (приложить фото)
                      </label>
                      <div className="field__wrapper">
                        <input
                          type="file"
                          className="field field__file"
                          id="filename" name='filename'
                          onChange={selectFile}
                          multiple
                         
                        />
                        <label className="field__file-wrapper" for="filename">
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
                    </div> */}
                    <div className="form-field">
                      <label htmlFor="name">
                        {
                          lang.lang === "ru"
                            ? <>  Ваше имя</>
                            : <>Your first name</>
                        }

                      </label>
                      <input
                        onChange={(e) => setName(e.target.value)}
                        type="text" name="name" id="name"
                        placeholder={lang.lang == "ru" ? "Введите имя" : "Enter name"} />
                    </div>
                    <div className="form-field">
                      <label htmlFor="phone">
                        {
                          lang.lang === "ru"
                            ? <>   Ваш телефон</>
                            : <>Your phone</>
                        }

                      </label>
                      <input
                        onChange={(e) => setPhone(e.target.value)}
                        type="text" name="phone" id="phone"
                        placeholder={lang.lang == "ru" ? "Введите телефон" : "Enter phone"} />
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
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text" name="email" id="email"
                        placeholder={lang.lang == "ru" ? "Введите email" : "Enter email"} />
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
                                ? <span style={{ paddingLeft: "15px" }} >
                                  данных</span>
                                : <span style={{ paddingLeft: "15px" }}>     data</span>
                            }
                          </NavLink>

                        </label>

                      </div>
                    </div>
                  </div>
                  <div className='text-center'>
                    <button disabled={!checker} type='submit'
                      className='btn'

                    >{
                        lang.lang === "ru"
                          ? <>
                            Отправить заявку</>
                          : <>Submit an application</>
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

export default observer(Ambassadors) 