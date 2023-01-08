import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../pages/css/Ambassador.css'
import emailjs from '@emailjs/browser';
import ModalSucces from '../component/ModalSuccess/ModalSucces';
const Ambassadors = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  // const [file, setFile] = React.useState([])
  // const selectFile = (e) => {
  //   setFile(e.target.files[0])
  // }
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
  const [active,setActive]=useState(false)
  const sendEmail = async (e) => {
    e.preventDefault();
    // const test = await convertBase64(file)
    // setPhoto(test)
   
    emailjs.sendForm('service_w53fpdr', 'template_ynhq9ht',form.current, 'QR6Ghi73lFpWjvQzS')
      .then((result) => {
        if(result.text="OK"){
          setActive(true)
        }
      }, (error) => {
        console.log(error.text);
      });
  };
  console.log(form.current)
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
                      <input
                        onChange={(e) => setPerson(e.target.value)}
                        type="text"
                        name="person"
                        id="person"
                        placeholder="Введите..." />
                    </div>
                    <div className="form-field">
                      <label htmlFor="service">
                        Блог предлагаемого амбассадора
                      </label>
                      <input 
                      onChange={(e)=>setService(e.target.value)}
                      type="text"
                       name="service" 
                       id="service"
                        placeholder="Введите..." />
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
                        Ваше имя
                      </label>
                      <input
                       onChange={(e)=>setName(e.target.value)}
                      type="text" name="name" id="name" placeholder="Введите имя" />
                    </div>
                    <div className="form-field">
                      <label htmlFor="phone">
                        Ваш телефон
                      </label>
                      <input
                       onChange={(e)=>setPhone(e.target.value)}
                       type="text" name="phone" id="phone" placeholder="Введите телефон" />
                    </div>
                    <div className="form-field">
                      <label htmlFor="email">
                        Ваш email
                      </label>
                      <input 
                       onChange={(e)=>setEmail(e.target.value)}
                      type="text" name="email" id="email" placeholder="Введите email" />
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
      <ModalSucces
       show={active}
       onHide={() => setActive(false)}
      />
    </div>
  )
}

export default Ambassadors