import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Context } from '../..';
import { productId } from '../../api/product';
import ph1 from '../../img/assets.jpg'
import ModalComment from '../ModalComment/ModalComment';
import './ProductItem.css'
import { RiStarSFill } from "react-icons/ri";
import { reviewAdd } from '../../api/review';
import ModalSucces from '../ModalSuccess/ModalSucces';
import ModalSendProductStars from '../ModalSendProductStars/ModalSendProductStars';
const ProductItem = () => {
  const { lang ,user} = useContext(Context)
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const navigate=useNavigate()
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleOpen1 = () => {
    setOpen1(!open1);
  };
  const handleOpen2 = () => {
    setOpen2(!open2);
  };
  const { id } = useParams()

  const [data, setData] = useState({})
  const getItem = async () => {
    const { data } = await productId(id)
    setData(data)
    return data
  }

  const { basket } = useContext(Context)
  const clickOrder = () => {
    basket.setBasket(id)

  }
  const [reviews, setReviews] = useState("")
  const [reviews2, setReviews2] = useState("")
  const [reviews3, setReviews3] = useState("")
  const [reviews4, setReviews4] = useState("")
  const [reviews5, setReviews5] = useState("")
  const [numberStar, setNumberStars] = useState(0)
  const [numberStar2, setNumberStars2] = useState(0)
  const [numberStar3, setNumberStars3] = useState(0)
  const [numberStar4, setNumberStars4] = useState(0)
  const [numberStar5, setNumberStars5] = useState(0)

  const sendReviewStar = async () => {
    const data = await reviewAdd(reviews, numberStar, id)

  }
  const description_ru = data?.description_ru?.split(/\r\n/)
  const [modalShow, setModalShow] = React.useState(false);
  useEffect(() => {
    getItem()
  }, [description_ru])

  const [active, setActive] = useState(false)
  useEffect(() => {
    if ((numberStar != 0) &&
      (numberStar2 != 0) &&
      (numberStar3 != 0) &&
      (numberStar4 != 0) &&
      (numberStar5 != 0) &&
      (user?.isAuth==true)){
      setActive(true)
    }
    if ((numberStar != 0) &&
      (numberStar2 != 0) &&
      (numberStar3 != 0) &&
      (numberStar4 != 0) &&
      (numberStar5 != 0) &&
      (user?.isAuth==false)){
        navigate('/login')
    }
  }, [numberStar,numberStar2,numberStar3,numberStar4,numberStar5])

  
  console.log(data, "data");
  return (
    <div className="flex-1" style={{ minHeight: '100vh' }}>
      <div className="product-top item-square"
        data-style-background-image={({ ph1 })}

        style={lang.lang === "ru" ? data?.imagesRu === undefined ? null : { backgroundImage: `url(${data?.imagesRu[0]})` }
          : data?.imagesEn === undefined ? null : { backgroundImage: `url(${data?.imagesEn[0]})` }}>
        <div className="d-flex justify-content-center">
          <div className="container flex-1 d-flex flex-column justify-content-between">
            <div className="product-top__title -fill -light"><p>{data?.Name}</p></div>
            <div className="product-top__about  -fill -light">
              {/* <ul>
                <li>Масло жожоба</li>
                <li>Масло кокоса</li>
                <li>Масло Ши</li>
                <li>Масло миндаля</li>
                <li>Масло Арганы</li>
              </ul> */}
            </div>
            <div className="product-top__about-bottom d-flex justify-content-between align-items-end">
              <div>
                <div className="product-top__volume">{data.weight}  </div>
                <div className="product-top__price-block d-flex align-items-center">
                  <div className="product-top__price">{data.price} руб.</div>
                </div>
              </div>
              <div>
                <div style={{ fontSize: '1.8em' }} className="d-flex align-items-center">
                  <svg style={{ width: '1em', marginRight: '.2em' }} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.04917 0.927067C7.34852 0.00575614 8.65193 0.00575656 8.95129 0.927067L10.0209 4.21886C10.1547 4.63089 10.5387 4.90985 10.9719 4.90985H14.4331C15.4018 4.90985 15.8046 6.14946 15.0209 6.71886L12.2207 8.75331C11.8702 9.00795 11.7236 9.45932 11.8575 9.87134L12.927 13.1631C13.2264 14.0844 12.1719 14.8506 11.3882 14.2812L8.58801 12.2467C8.23753 11.9921 7.76293 11.9921 7.41244 12.2467L4.61227 14.2812C3.82856 14.8506 2.77408 14.0844 3.07343 13.1631L4.143 9.87134C4.27688 9.45932 4.13022 9.00795 3.77973 8.75331L0.979561 6.71886C0.195848 6.14946 0.598623 4.90985 1.56735 4.90985H5.02855C5.46177 4.90985 5.84573 4.63089 5.9796 4.21886L7.04917 0.927067Z" fill="#1D1D1B" />
                  </svg> {(data?.Stars?.aroma_stars + data?.Stars?.delivery_stars + data?.Stars?.effect_stars + data?.Stars?.quality_stars + data?.Stars?.texture_stars) / 5}
                </div>

                <div className="rating-line">
                  <div className="rating-line__value" style={{ width: '100%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-buttons">
        <div className="container">
          <div className="product-buttons__btns">
            <div className="row g-2">
              <div className="col-6">
                <a className="custom-btn custom-btn-dark" onClick={clickOrder}>В корзину</a>
              </div>
              <div className="col-6">
                <a className="custom-btn" data-type="iframe"
                  onClick={() => setModalShow(true)}>Читать все отзывы</a>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a className="Tenor-Sans-link">Оставить отзыв</a>
            <div className="box-rating" style={{ marginTop: '1em' }}>
              <div className="d-flex justify-content-center">
                <div>
                  <div className="d-flex justify-content-end align-items-center" onClick={() => setReviews("quality_stars")}>
                    <div>Качество продукта: </div>
                    <div className="rating-stars">
                      <div className='d-flex'>
                        <RiStarSFill style={(numberStar == 1 || numberStar == 2 || numberStar == 3 || numberStar == 4 || numberStar == 5)
                          ? { color: 'yellow' } : null} className='icon_star' onClick={() => setNumberStars(1)} />
                        <RiStarSFill style={(numberStar == 2 || numberStar == 3 || numberStar == 4 || numberStar == 5)
                          ? { color: 'yellow' } : null} className='icon_star' onClick={() => setNumberStars(2)} />
                        <RiStarSFill style={(numberStar == 3 || numberStar == 4 || numberStar == 5)
                          ? { color: 'yellow' } : null} className='icon_star' onClick={() => setNumberStars(3)} />
                        <RiStarSFill style={(numberStar == 4 || numberStar == 5)
                          ? { color: 'yellow' } : null} className='icon_star' onClick={() => setNumberStars(4)} />
                        <RiStarSFill style={(numberStar == 5)
                          ? { color: 'yellow' } : null} className='icon_star' onClick={() => setNumberStars(5)} />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end align-items-center" onClick={() => setReviews2("aroma_stars")}>
                    <div>Аромат: </div>
                    <div className="rating-stars">
                      <div className='d-flex'>
                        <RiStarSFill style={(numberStar2 == 1 || numberStar2 == 2 || numberStar2 == 3 || numberStar2 == 4 || numberStar2 == 5)
                          ? { color: 'yellow' } : null} className='icon_star' onClick={() => setNumberStars2(1)} />
                        <RiStarSFill style={(numberStar2 == 2 || numberStar2 == 3 || numberStar2 == 4 || numberStar2 == 5)
                          ? { color: 'yellow' } : null} className='icon_star' onClick={() => setNumberStars2(2)} />
                        <RiStarSFill style={(numberStar2 == 3 || numberStar2 == 4 || numberStar2 == 5)
                          ? { color: 'yellow' } : null} className='icon_star' onClick={() => setNumberStars2(3)} />
                        <RiStarSFill style={(numberStar2 == 4 || numberStar2 == 5)
                          ? { color: 'yellow' } : null} className='icon_star' onClick={() => setNumberStars2(4)} />
                        <RiStarSFill style={(numberStar2 == 5)
                          ? { color: 'yellow' } : null} className='icon_star' onClick={() => setNumberStars2(5)} />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end align-items-center" onClick={() => setReviews3("texture_stars")}>
                    <div>Текстура: </div>
                    <div className="rating-stars">
                      <div className='d-flex'>
                        <RiStarSFill style={(numberStar3 == 1 || numberStar3 == 2 || numberStar3 == 3 || numberStar3 == 4 || numberStar3 == 5)
                          ? { color: 'yellow' } : null} className='icon_star' onClick={() => setNumberStars3(1)} />
                        <RiStarSFill style={(numberStar3 == 2 || numberStar3 == 3 || numberStar3 == 4 || numberStar3 == 5)
                          ? { color: 'yellow' } : null} className='icon_star' onClick={() => setNumberStars3(2)} />
                        <RiStarSFill style={(numberStar3 == 3 || numberStar3 == 4 || numberStar3 == 5)
                          ? { color: 'yellow' } : null} className='icon_star' onClick={() => setNumberStars3(3)} />
                        <RiStarSFill style={(numberStar3 == 4 || numberStar3 == 5)
                          ? { color: 'yellow' } : null} className='icon_star' onClick={() => setNumberStars3(4)} />
                        <RiStarSFill style={(numberStar3 == 5)
                          ? { color: 'yellow' } : null} className='icon_star' onClick={() => setNumberStars3(5)} />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end align-items-center" onClick={() => setReviews4("effect_stars")}>
                    <div>Эффект от продукта: </div>
                    <div className="rating-stars">
                      <div className='d-flex'>
                        <RiStarSFill style={(numberStar4 == 1 || numberStar4 == 2 || numberStar4 == 3 || numberStar4 == 4 || numberStar4 == 5)
                          ? { color: 'yellow' } : null} className='icon_star' onClick={() => setNumberStars4(1)} />
                        <RiStarSFill style={(numberStar4 == 2 || numberStar4 == 3 || numberStar4 == 4 || numberStar4 == 5)
                          ? { color: 'yellow' } : null} className='icon_star' onClick={() => setNumberStars4(2)} />
                        <RiStarSFill style={(numberStar4 == 3 || numberStar4 == 4 || numberStar4 == 5)
                          ? { color: 'yellow' } : null} className='icon_star' onClick={() => setNumberStars4(3)} />
                        <RiStarSFill style={(numberStar4 == 4 || numberStar4 == 5)
                          ? { color: 'yellow' } : null} className='icon_star' onClick={() => setNumberStars4(4)} />
                        <RiStarSFill style={(numberStar4 == 5)
                          ? { color: 'yellow' } : null} className='icon_star' onClick={() => setNumberStars4(5)} />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end align-items-center" onClick={() => setReviews5("delivery_stars")}>
                    <div>Качество доставки: </div>
                    <div className="rating-stars">
                      <div className='d-flex'>
                        <RiStarSFill style={(numberStar5 == 1 || numberStar5 == 2 || numberStar5 == 3 || numberStar5 == 4 || numberStar5 == 5)
                          ? { color: 'yellow' } : null} className='icon_star' onClick={() => setNumberStars5(1)} />
                        <RiStarSFill style={(numberStar5 == 2 || numberStar5 == 3 || numberStar5 == 4 || numberStar5 == 5)
                          ? { color: 'yellow' } : null} className='icon_star' onClick={() => setNumberStars5(2)} />
                        <RiStarSFill style={(numberStar5 == 3 || numberStar5 == 4 || numberStar5 == 5)
                          ? { color: 'yellow' } : null} className='icon_star' onClick={() => setNumberStars5(3)} />
                        <RiStarSFill style={(numberStar5 == 4 || numberStar5 == 5)
                          ? { color: 'yellow' } : null} className='icon_star' onClick={() => setNumberStars5(4)} />
                        <RiStarSFill style={(numberStar5 == 5)
                          ? { color: 'yellow' } : null} className='icon_star' onClick={() => setNumberStars5(5)} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ModalSendProductStars
               setNumberStars={ setNumberStars}
               setNumberStars2={ setNumberStars2}
               setNumberStars3={ setNumberStars3}
               setNumberStars4={ setNumberStars4}
               setNumberStars5={ setNumberStars5}
                id={data?.ID}
                aroma_stars={numberStar2}
                delivery_stars={numberStar5}
                effect_stars={numberStar4}
                quality_stars={numberStar}
                texture_stars={numberStar3}
                show={active}
                setActive={setActive}
                onHide={() => setActive(false)} />
            </div>
          </div>
        </div>
      </div>
      <div className="block-product-about">
        <div className="container p-0">
          <div className="block__title ps-3">Описание</div>
          <div className="row g-0 gy-4">
            <div className="col-6">
              <div className="block-product-about__text p-3">

                {
                  lang.lang == 'ru'
                    ? data?.descriptionRu?.split(/\r\n/)?.map(item =>
                      <div>{item} </div>)

                    : null
                }
                {
                  lang.lang != 'ru'
                    ? data?.descriptionEn?.split(/\r\n/)?.map(item =>
                      <div>{item} </div>)

                    : null
                }
              </div>
            </div>
            <div className="col-6 position-relative" style={{ minHeight: "500px" }}>
              <div className="img d-block block-product-about__img -right">
                {
                  lang.lang == "ru"
                    ? <img src={data?.imagesRu === undefined ? null : data?.imagesRu[1]} alt="images" />
                    : <img src={data?.imagesEn === undefined ? null : data?.imagesEn[1]} alt="images" />
                }

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block-photo">
        <div className="container p-0">
          <div className="swiper block-photo__swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-css-mode">
            <div className="swiper-wrapper" id="swiper-wrapper-ef3489dd3e63b1db" aria-live="polite">
              <div className="swiper-slide block-photo__slide position-relative swiper-slide-active" role="group" aria-label="1 / 1">
                <div className="swipre-slide__text"><span>Косметика, которую <br /> выбирают звезды</span></div>
                <div className="img d-block">
                  {
                    lang.lang == "ru"
                      ? <img src={data?.imagesRu === undefined ? null : data?.imagesRu[2]} alt="images" />
                      : <img src={data?.imagesEn === undefined ? null : data?.imagesEn[2]} alt="images" />
                  }
                </div>
              </div>
            </div>
            <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
        </div>
      </div>
      <div className="block-how-it-works">
        <div className="container">
          <div className="block-how-it-works__title"><p>Действие</p></div>
          <div className="block-how-it-works__text">
            <ul>
              {
                lang.lang == 'ru'
                  ? data?.actionRu?.split(/\r\n/)?.map(item =>
                    <div>{item} </div>)

                  : null
              }
              {
                lang.lang != 'ru'
                  ? data?.actionEn?.split(/\r\n/)?.map(item =>
                    <div>{item} </div>)

                  : null
              }

            </ul>
          </div>
        </div>
        <div className="block-how-it-works__img img d-block">
          {
            lang.lang == "ru"
              ? <img src={data?.imagesRu === undefined ? null : data?.imagesRu[3]} alt="images" />
              : <img src={data?.imagesEn === undefined ? null : data?.imagesEn[3]} alt="images" />
          }
        </div>
      </div>
      <div className="block-accordion">
        <div className="container p-0">
          <a className="block-accordion__item d-block"
            onClick={handleOpen}>Способ применения:</a>
          {
            open
              ?
              <div className="block-accordion__panel"

                data-max-height="621px" style={{ position: 'static', visibility: 'visible', display: 'block', transition: 'max-height 0.5s ease-in-out 0s', overflowY: 'hidden' }}>
                <div>
                  {
                    lang.lang == 'ru'
                      ? data?.modeOfAppRus?.split(/\r\n/)?.map(item =>
                        <div>{item} </div>)

                      : null
                  }
                  {
                    lang.lang != 'ru'
                      ? data?.modeOfAppEn?.split(/\r\n/)?.map(item =>
                        <div>{item} </div>)

                      : null
                  }

                </div>
              </div>
              : null
          }

          <a
            onClick={handleOpen1}
            className="block-accordion__item d-block">Противопоказания:</a>
          {
            open1
              ? <div className="block-accordion__panel" data-max-height="430px" style={{ position: 'static', visibility: 'visible', display: 'block', transition: 'max-height 0.5s ease-in-out 0s', overflowY: 'hidden' }}>
                <div>
                  {
                    lang.lang == 'ru'
                      ? data?.contraindicationsRu?.split(/\r\n/)?.map(item =>
                        <div>{item} </div>)

                      : null
                  }
                  {
                    lang.lang != 'ru'
                      ? data?.contraindicationsEn?.split(/\r\n/)?.map(item =>
                        <div>{item} </div>)

                      : null
                  }

                </div>
              </div>
              : null
          }

          <a
            onClick={handleOpen2}
            className="block-accordion__item d-block">Состав:</a>
          {
            open2
              ? <div className="block-accordion__panel" data-max-height="296px" style={{ position: 'static', visibility: 'visible', display: 'block', transition: 'max-height 0.5s ease-in-out 0s', overflowY: 'hidden' }}>
                <div>
                  {
                    lang.lang == 'ru'
                      ? data?.compoundRu?.split(/\r\n/)?.map(item =>
                        <div>{item} </div>)

                      : null
                  }
                  {
                    lang.lang != 'ru'
                      ? data?.compoundEn?.split(/\r\n/)?.map(item =>
                        <div>{item} </div>)

                      : null
                  }
                </div>
              </div>
              : null
          }

        </div>
      </div>
      {/* <div className="block-similar">
        <div className="container">
          <div className="block__title">Похожие продукты</div>


        </div>
      </div> */}
      <ModalComment
        show={modalShow}
        onHide={() => setModalShow(false)} />
    </div>


  )
}

export default observer(ProductItem)