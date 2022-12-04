import React from 'react'
import { productImages1 } from '../../img';

import Item from '../Item/Item';
import ProductImages from '../SwiperCard/ProductImages';
import './ProductItem.css'
const ProductItem = () => {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleOpen1 = () => {
    setOpen1(!open1);
  };
  const handleOpen2 = () => {
    setOpen2(!open2);
  };
  return (
    <div className="flex-1" style={{ minHeight: '100vh' }}>
      <div className="product-top item-square"
        data-style-background-image="url('https://thebestforyourself.ru/storage/media/products_pages/scrub-ld/page/1270x900/1500x1064_img-01.jpg')"
        style={{ backgroundImage: 'url("https://thebestforyourself.ru/storage/media/products_pages/scrub-ld/page/1270x900/1500x1064_img-01.jpg")' }}>
        <div className="d-flex justify-content-center">
          <div className="container flex-1 d-flex flex-column justify-content-between">
            <div className="product-top__title -fill -light"><p>Скраб для тела<br />с ароматом <br />летнего дождя</p></div>
            <div className="product-top__about  -fill -light">
              <ul>
                <li>Масло жожоба</li>
                <li>Масло кокоса</li>
                <li>Масло Ши</li>
                <li>Масло миндаля</li>
                <li>Масло Арганы</li>
              </ul>
            </div>
            <div className="product-top__about-bottom d-flex justify-content-between align-items-end">
              <div>
                <div className="product-top__volume">250мл (280г)</div>
                <div className="product-top__price-block d-flex align-items-center">
                  <div className="product-top__price">1 790 руб.</div>
                </div>
              </div>
              <div>
                <div style={{ fontSize: '1.8em' }} className="d-flex align-items-center">
                  <svg style={{ width: '1em', marginRight: '.2em' }} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.04917 0.927067C7.34852 0.00575614 8.65193 0.00575656 8.95129 0.927067L10.0209 4.21886C10.1547 4.63089 10.5387 4.90985 10.9719 4.90985H14.4331C15.4018 4.90985 15.8046 6.14946 15.0209 6.71886L12.2207 8.75331C11.8702 9.00795 11.7236 9.45932 11.8575 9.87134L12.927 13.1631C13.2264 14.0844 12.1719 14.8506 11.3882 14.2812L8.58801 12.2467C8.23753 11.9921 7.76293 11.9921 7.41244 12.2467L4.61227 14.2812C3.82856 14.8506 2.77408 14.0844 3.07343 13.1631L4.143 9.87134C4.27688 9.45932 4.13022 9.00795 3.77973 8.75331L0.979561 6.71886C0.195848 6.14946 0.598623 4.90985 1.56735 4.90985H5.02855C5.46177 4.90985 5.84573 4.63089 5.9796 4.21886L7.04917 0.927067Z" fill="#1D1D1B" />
                  </svg> 5
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
                <a href="#" className="custom-btn custom-btn-dark" onclick="addToCart(2); return false;">В корзину</a>
              </div>
              <div className="col-6">
                <a href="javascript:;" data-src="https://thebestforyourself.ru/product/scrub-ld/reviews" className="custom-btn" data-type="iframe" data-fancybox data-was-processed="true" style={{ backgroundImage: 'url("https://thebestforyourself.ru/product/scrub-ld/reviews")' }}>Читать все отзывы</a>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a href="https://thebestforyourself.ru/cabinet/review/scrub-ld" target="_blank" className="Tenor-Sans-link">Оставить отзыв</a>
            <div className="box-rating" style={{ marginTop: '1em' }}>
              <div className="d-flex justify-content-center">
                <div>
                  <div className="d-flex justify-content-end align-items-center">
                    <div>Качество продукта: </div>
                    <div className="rating-stars">
                      <div className="rating-stars__fill" style={{ width: '100%' }} />
                    </div>
                  </div>
                  <div className="d-flex justify-content-end align-items-center">
                    <div>Аромат: </div>
                    <div className="rating-stars">
                      <div className="rating-stars__fill" style={{ width: '100%' }} />
                    </div>
                  </div>
                  <div className="d-flex justify-content-end align-items-center">
                    <div>Текстура: </div>
                    <div className="rating-stars">
                      <div className="rating-stars__fill" style={{ width: '100%' }} />
                    </div>
                  </div>
                  <div className="d-flex justify-content-end align-items-center">
                    <div>Эффект от продукта: </div>
                    <div className="rating-stars">
                      <div className="rating-stars__fill" style={{ width: '100%' }} />
                    </div>
                  </div>
                  <div className="d-flex justify-content-end align-items-center">
                    <div>Качество доставки: </div>
                    <div className="rating-stars">
                      <div className="rating-stars__fill" style={{ width: '100%' }} />
                    </div>
                  </div>
                </div>
              </div>
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
                <p>Скраб с ароматом летнего дождя имеет в своем составе натуральные природные афродизиаки, которые способны раскрываться на каждой коже по разному. 5 драгоценных масел мира напитают вашу кожу после скрабирования и сделают ее увлажненной на 24 часа. После применения данного скраба дополнительного увлажнения кожи не требуется.</p>
              </div>
            </div>
            <div className="col-6 position-relative">
              <div className="img d-block block-product-about__img -right">
                <img src="https://thebestforyourself.ru/storage/media/products_pages/scrub-ld/page/500x700/712x1012_img-02.jpg" alt />
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
                  <img src="https://thebestforyourself.ru/storage/media/products_pages/scrub-ld/900x1058/1500x1764_IMG_1848.jpg" data-src="https://thebestforyourself.ru/storage/media/products_pages/scrub-ld/900x1058/1500x1764_IMG_1848.jpg" alt className="loaded" data-was-processed="true" />
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
              <li>Увлажнение 24ч</li>
              <li>Эффективное отшелушивание</li>
              <li>Подтяжка кожи</li>
              <li>Сглаживание неровностей</li>
              <li>Шлифовка растяжек</li>
              <li>Ускорение выработки собственного коллагена</li>
            </ul>
          </div>
        </div>
        <div className="block-how-it-works__img img d-block">
          <img src="https://thebestforyourself.ru/storage/media/products_pages/scrub-ld/page/900x850/1500x1428_img-03.jpg" data-src="https://thebestforyourself.ru/storage/media/products_pages/scrub-ld/page/900x850/1500x1428_img-03.jpg" alt className="loaded" data-was-processed="true" />
        </div>
      </div>
      <div className="block-accordion">
        <div className="container p-0">
          <a className="block-accordion__item d-block"
            onClick={handleOpen}>Способ применения:</a>
          {
            open
              ? <div className="block-accordion__panel"

                data-max-height="621px" style={{ position: 'static', visibility: 'visible', display: 'block', transition: 'max-height 0.5s ease-in-out 0s', overflowY: 'hidden' }}>
                <div><p>-очистить кожу от загрязнений перед применением скраба;</p>
                  <p>-распарить ее в течение 10 минут перед началом скрабирования;</p>
                  <p>-стряхнуть с себя лишнюю влагу, чтобы тело оставалось влажным, а не мокрым;</p>
                  <p>-нанести небольшое количество скраба на проблемные зоны;</p>
                  <p>-массажными движениями растирать скраб на протяжении 1 - 3 минут в каждой зоне;</p>
                  <p>-смыть скраб теплой водой не используя мыла и гелей для душа;</p>
                  <p>-тщательно вымыть руки с мылом после использования скраба.</p>
                  <p>Рекомендованный комплекс для подтяжки и уплотнения кожи:<br />-рекомендуется использовать не чаще 3-х раз в неделю.<br />-использовать любой мусс или молочко для тела в дни отсутствия скрабирования</p>
                  <p>ВНИМАНИЕ! Данный аромат достаточно специфичен, рекомендуем начинать знакомство с нашим брендом с более классических ароматов.</p></div>
              </div>
              : null
          }

          <a
            onClick={handleOpen1}
            className="block-accordion__item d-block">Противопоказания:</a>
          {
            open1
              ? <div className="block-accordion__panel" data-max-height="430px" style={{ position: 'static', visibility: 'visible', display: 'block', transition: 'max-height 0.5s ease-in-out 0s', overflowY: 'hidden' }}>
                <div><p>- Нарушение целостности кожных покровов (основным абразивом в наших скрабах является морская соль, вы можете доставить себе неприятные ощущения при наличии на коже царапин/ран/воспалений);<br />- Заболевания кожи;<br />- Угревая сыпь;<br />- Аллергия и прочие раздражения;<br />- Использование на коже лица;<br />- Индивидуальная непереносимость одного или нескольких компонентов (перед использованием необходимо провести аллерготест - нанести небольшое количество скраба на сгиб локтя на 15 мин, наблюдайте за реакцией кожи).</p></div>
              </div>
              : null
          }

          <a
            onClick={handleOpen2}
            className="block-accordion__item d-block">Состав:</a>
          {
            open2
              ? <div className="block-accordion__panel" data-max-height="296px" style={{ position: 'static', visibility: 'visible', display: 'block', transition: 'max-height 0.5s ease-in-out 0s', overflowY: 'hidden' }}>
                <div><p>Соль, масло жожоба, масло кокоса, масло ши, масло миндаля, витамин Е, масло арганы, эфирное масло ветивера, эфирное масло пачули.</p>
                  <p>Срок хранения продукта - 12 мес.</p>
                  <p>Срок годности после вскрытия - 3 мес.</p>
                  <p>Условия хранения - от 0*С до +20*С.</p></div>
              </div>
              : null
          }

        </div>
      </div>
      <div className="block-similar">
        <div className="container">
          <div className="block__title">Похожие продукты</div>
          <div className='row'>
            <div className='col-md-4' style={{ fontSize: 'calc(var(--index))', fontFamily: 'Tenor Sans,san-serif' }}>
              <ProductImages images={productImages1} />
              <div className='block-product__info flex-1 d-flex flex-column justify-content-between'
                style={{
                  padding: '1em 1.1em 0',
                  flex: '1',
                  display: 'flex',
                  flex: 'column',
                  justifyContent: 'space-between'
                }}>
                <div>
                  <div className='block-product__name'
                    style={{
                      fontSize: '1.2em',
                      lineHeight: '1'
                    }}>
                    Скраб для тела
                  </div>
                  <div className='block-product__volume'
                    style={{ fontSize: '.7em' }}>
                    250мл (280г)
                  </div>
                </div>
                <div>
                  <div className='block-product__price-block d-flex align-items-center'
                    style={{
                      marginTop: '0.5em',
                      fontSize: '1.2em',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                    <div className='block-product__price'
                      style={{

                      }}>
                      1 790 руб.
                    </div>
                  </div>
                  <div className='block-product__btns row g-2'
                    style={{
                      marginTop: '0.9em'
                    }}>
                    <div className='col-6'>
                      <a href='#'
                        className='custom-btn custom-btn-dark'
                        style={{
                          display: 'inline-block',
                          border: '1px solid #000',
                          width: '100%',
                          color: '#000',
                          textDecoration: 'none',
                          textAlign: 'center',
                          fontSize: '0.6em',
                          padding: '0.7em 0.5em',
                          background: '#000',
                          color: '#fff'
                        }}>
                        В корзину
                      </a>
                    </div>
                    <div className='col-6'>
                      <a href='#'
                        className='custom-btn'
                        style={{
                          display: 'inline-block',
                          border: '1px solid #000',
                          width: '100%',
                          color: '#000',
                          textDecoration: 'none',
                          textAlign: 'center',
                          fontSize: '0.6em',
                          padding: '0.7em 0.5em',

                        }}>
                        Читать подробнее
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4' style={{ fontSize: 'calc(var(--index))', fontFamily: 'Tenor Sans,san-serif' }}>
              <ProductImages images={productImages1} />
              <div className='block-product__info flex-1 d-flex flex-column justify-content-between'
                style={{
                  padding: '1em 1.1em 0',
                  flex: '1',
                  display: 'flex',
                  flex: 'column',
                  justifyContent: 'space-between'
                }}>
                <div>
                  <div className='block-product__name'
                    style={{
                      fontSize: '1.2em',
                      lineHeight: '1'
                    }}>
                    Скраб для тела
                  </div>
                  <div className='block-product__volume'
                    style={{ fontSize: '.7em' }}>
                    250мл (280г)
                  </div>
                </div>
                <div>
                  <div className='block-product__price-block d-flex align-items-center'
                    style={{
                      marginTop: '0.5em',
                      fontSize: '1.2em',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                    <div className='block-product__price'
                      style={{

                      }}>
                      1 790 руб.
                    </div>
                  </div>
                  <div className='block-product__btns row g-2'
                    style={{
                      marginTop: '0.9em'
                    }}>
                    <div className='col-6'>
                      <a href='#'
                        className='custom-btn custom-btn-dark'
                        style={{
                          display: 'inline-block',
                          border: '1px solid #000',
                          width: '100%',
                          color: '#000',
                          textDecoration: 'none',
                          textAlign: 'center',
                          fontSize: '0.6em',
                          padding: '0.7em 0.5em',
                          background: '#000',
                          color: '#fff'
                        }}>
                        В корзину
                      </a>
                    </div>
                    <div className='col-6'>
                      <a href='#'
                        className='custom-btn'
                        style={{
                          display: 'inline-block',
                          border: '1px solid #000',
                          width: '100%',
                          color: '#000',
                          textDecoration: 'none',
                          textAlign: 'center',
                          fontSize: '0.6em',
                          padding: '0.7em 0.5em',

                        }}>
                        Читать подробнее
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4' style={{ fontSize: 'calc(var(--index))', fontFamily: 'Tenor Sans,san-serif' }}>
              <ProductImages images={productImages1} />
              <div className='block-product__info flex-1 d-flex flex-column justify-content-between'
                style={{
                  padding: '1em 1.1em 0',
                  flex: '1',
                  display: 'flex',
                  flex: 'column',
                  justifyContent: 'space-between'
                }}>
                <div>
                  <div className='block-product__name'
                    style={{
                      fontSize: '1.2em',
                      lineHeight: '1'
                    }}>
                    Скраб для тела
                  </div>
                  <div className='block-product__volume'
                    style={{ fontSize: '.7em' }}>
                    250мл (280г)
                  </div>
                </div>
                <div>
                  <div className='block-product__price-block d-flex align-items-center'
                    style={{
                      marginTop: '0.5em',
                      fontSize: '1.2em',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                    <div className='block-product__price'
                      style={{

                      }}>
                      1 790 руб.
                    </div>
                  </div>
                  <div className='block-product__btns row g-2'
                    style={{
                      marginTop: '0.9em'
                    }}>
                    <div className='col-6'>
                      <a href='#'
                        className='custom-btn custom-btn-dark'
                        style={{
                          display: 'inline-block',
                          border: '1px solid #000',
                          width: '100%',
                          color: '#000',
                          textDecoration: 'none',
                          textAlign: 'center',
                          fontSize: '0.6em',
                          padding: '0.7em 0.5em',
                          background: '#000',
                          color: '#fff'
                        }}>
                        В корзину
                      </a>
                    </div>
                    <div className='col-6'>
                      <a href='#'
                        className='custom-btn'
                        style={{
                          display: 'inline-block',
                          border: '1px solid #000',
                          width: '100%',
                          color: '#000',
                          textDecoration: 'none',
                          textAlign: 'center',
                          fontSize: '0.6em',
                          padding: '0.7em 0.5em',

                        }}>
                        Читать подробнее
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>


  )
}

export default ProductItem