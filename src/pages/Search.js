import React from 'react'

const Search = () => {
    return (
        <div className="flex-1" style={{ minHeight: '100vh' }}>
            <div className="container mt-3 mb-4">
                <form action="https://thebestforyourself.ru/search" method="GET" id="search-form">
                    <div className="form-field position-relative">
                        <input type="text" name="keyword" placehoder="Введите слово для поиска" defaultValue="скраб" required />
                        <button className=" btn-search"><img src="https://thebestforyourself.ru/img/icons/icon-search.svg" alt='props' /></button>
                    </div>
                </form>
            </div>
            <div className="block-catalog">
                <div className="container">
                    <div className="block__title text-center">Результаты поиска</div>
                    <div className="block-catalog__items">
                        <div className="row gy-4 gx-2 g-md-4">
                            <div className="col-sm-6">
                                <div className="block-product__item item d-flex flex-column " style={{ height: '100%' }}>
                                    <div>
                                        <div className="swiper product-item-swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-css-mode">
                                            <div className="swiper-wrapper product-item-swiper__wrapper" id="swiper-wrapper-e5c6775ac222b2dc" aria-live="polite">
                                                <div className="swiper-slide product-item-swiper__slide swiper-slide-active" role="group" aria-label="1 / 4">
                                                    <div className="block-product__item-img item-square">
                                                        <a href="https://thebestforyourself.ru/product/scrub-ld" className="full-link" />
                                                        <div className="img d-block">
                                                            <img src="https://thebestforyourself.ru/storage/media/cards/скраб_дождь/560x560/900x900_4.1.png" data-src="https://thebestforyourself.ru/storage/media/cards/скраб_дождь/560x560/900x900_4.1.png" style={{ width: '100%' }} alt className="loaded" data-was-processed="true" />
                                                        </div>
                                                        <div className="block-product__item-content d-flex flex-column justify-content-between">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide product-item-swiper__slide swiper-slide-next" role="group" aria-label="2 / 4">
                                                    <div className="block-product__item-img item-square">
                                                        <a href="https://thebestforyourself.ru/product/scrub-ld" className="full-link" />
                                                        <div className="img d-block">
                                                            <img src="https://thebestforyourself.ru/storage/media/cards/скраб_дождь/560x560/900x900_4.2.png" data-src="https://thebestforyourself.ru/storage/media/cards/скраб_дождь/560x560/900x900_4.2.png" style={{ width: '100%' }} alt className="loaded" data-was-processed="true" />
                                                        </div>
                                                        <div className="block-product__item-content d-flex flex-column justify-content-between">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide product-item-swiper__slide" role="group" aria-label="3 / 4">
                                                    <div className="block-product__item-img item-square">
                                                        <a href="https://thebestforyourself.ru/product/scrub-ld" className="full-link" />
                                                        <div className="img d-block">
                                                            <img src="https://thebestforyourself.ru/storage/media/cards/скраб_дождь/560x560/preload.jpg" data-src="https://thebestforyourself.ru/storage/media/cards/скраб_дождь/560x560/900x900_4.3.png" style={{ width: '100%' }} alt />
                                                        </div>
                                                        <div className="block-product__item-content d-flex flex-column justify-content-between">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide product-item-swiper__slide" role="group" aria-label="4 / 4">
                                                    <div className="block-product__item-img item-square">
                                                        <a href="https://thebestforyourself.ru/product/scrub-ld" className="full-link" />
                                                        <div className="img d-block">
                                                            <img src="https://thebestforyourself.ru/storage/media/cards/скраб_дождь/560x560/preload.jpg" data-src="https://thebestforyourself.ru/storage/media/cards/скраб_дождь/560x560/900x900_4.4.png" style={{ width: '100%' }} alt />
                                                        </div>
                                                        <div className="block-product__item-content d-flex flex-column justify-content-between">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-item-swiper__pagination swiper-pagination-bullets swiper-pagination-horizontal"><span className="swiper-pagination-bullet swiper-pagination-bullet-active" aria-current="true" /><span className="swiper-pagination-bullet" /><span className="swiper-pagination-bullet" /><span className="swiper-pagination-bullet" /></div>
                                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
                                    </div>
                                    <div className="block-product__info flex-1 d-flex flex-column justify-content-between">
                                        <div>
                                            <div className="block-product__name">Скраб для тела с ароматом летнего дождя</div>
                                            <div className="block-product__volume">250мл (280г)</div>
                                        </div>
                                        <div>
                                            <div className="block-product__price-block d-flex align-items-center">
                                                <div className="block-product__price">1 790 руб.</div>
                                            </div>
                                            <div className="block-product__btns row g-2">
                                                <div className="col-6">
                                                    <a href="#" className="custom-btn custom-btn-dark" onclick="addToCart(2); return false;">В корзину</a>
                                                </div>
                                                <div className="col-6">
                                                    <a href="https://thebestforyourself.ru/product/scrub-ld" className="custom-btn">Читать подробнее</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="block-product__item item d-flex flex-column " style={{ height: '100%' }}>
                                    <div>
                                        <div className="swiper product-item-swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-css-mode">
                                            <div className="swiper-wrapper product-item-swiper__wrapper" id="swiper-wrapper-5f4341b16af376cf" aria-live="polite">
                                                <div className="swiper-slide product-item-swiper__slide swiper-slide-active" role="group" aria-label="1 / 5">
                                                    <div className="block-product__item-img item-square">
                                                        <a href="https://thebestforyourself.ru/product/scrub-kokos" className="full-link" />
                                                        <div className="img d-block">
                                                            <img src="https://thebestforyourself.ru/storage/media/cards/скраб_кокос/560x560/900x900_3.1.png" data-src="https://thebestforyourself.ru/storage/media/cards/скраб_кокос/560x560/900x900_3.1.png" style={{ width: '100%' }} alt className="loaded" data-was-processed="true" />
                                                        </div>
                                                        <div className="block-product__item-content d-flex flex-column justify-content-between">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide product-item-swiper__slide swiper-slide-next" role="group" aria-label="2 / 5">
                                                    <div className="block-product__item-img item-square">
                                                        <a href="https://thebestforyourself.ru/product/scrub-kokos" className="full-link" />
                                                        <div className="img d-block">
                                                            <img src="https://thebestforyourself.ru/storage/media/cards/скраб_кокос/560x560/900x900_3.2.png" data-src="https://thebestforyourself.ru/storage/media/cards/скраб_кокос/560x560/900x900_3.2.png" style={{ width: '100%' }} alt className="loaded" data-was-processed="true" />
                                                        </div>
                                                        <div className="block-product__item-content d-flex flex-column justify-content-between">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide product-item-swiper__slide" role="group" aria-label="3 / 5">
                                                    <div className="block-product__item-img item-square">
                                                        <a href="https://thebestforyourself.ru/product/scrub-kokos" className="full-link" />
                                                        <div className="img d-block">
                                                            <img src="https://thebestforyourself.ru/storage/media/cards/скраб_кокос/560x560/preload.jpg" data-src="https://thebestforyourself.ru/storage/media/cards/скраб_кокос/560x560/900x900_3.3.png" style={{ width: '100%' }} alt />
                                                        </div>
                                                        <div className="block-product__item-content d-flex flex-column justify-content-between">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide product-item-swiper__slide" role="group" aria-label="4 / 5">
                                                    <div className="block-product__item-img item-square">
                                                        <a href="https://thebestforyourself.ru/product/scrub-kokos" className="full-link" />
                                                        <div className="img d-block">
                                                            <img src="https://thebestforyourself.ru/storage/media/cards/скраб_кокос/560x560/preload.jpg" data-src="https://thebestforyourself.ru/storage/media/cards/скраб_кокос/560x560/900x900_3.4.png" style={{ width: '100%' }} alt />
                                                        </div>
                                                        <div className="block-product__item-content d-flex flex-column justify-content-between">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide product-item-swiper__slide" role="group" aria-label="5 / 5">
                                                    <div className="block-product__item-img item-square">
                                                        <a href="https://thebestforyourself.ru/product/scrub-kokos" className="full-link" />
                                                        <div className="img d-block">
                                                            <img src="https://thebestforyourself.ru/storage/media/cards/скраб_кокос/560x560/preload.jpg" data-src="https://thebestforyourself.ru/storage/media/cards/скраб_кокос/560x560/900x900_3.5.png" style={{ width: '100%' }} alt />
                                                        </div>
                                                        <div className="block-product__item-content d-flex flex-column justify-content-between">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-item-swiper__pagination swiper-pagination-bullets swiper-pagination-horizontal"><span className="swiper-pagination-bullet swiper-pagination-bullet-active" aria-current="true" /><span className="swiper-pagination-bullet" /><span className="swiper-pagination-bullet" /><span className="swiper-pagination-bullet" /><span className="swiper-pagination-bullet" /></div>
                                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
                                    </div>
                                    <div className="block-product__info flex-1 d-flex flex-column justify-content-between">
                                        <div>
                                            <div className="block-product__name">Скраб для тела</div>
                                            <div className="block-product__volume">250мл (280г)</div>
                                        </div>
                                        <div>
                                            <div className="block-product__price-block d-flex align-items-center">
                                                <div className="block-product__price">1 790 руб.</div>
                                            </div>
                                            <div className="block-product__btns row g-2">
                                                <div className="col-6">
                                                    <a href="#" className="custom-btn custom-btn-dark" onclick="addToCart(3); return false;">В корзину</a>
                                                </div>
                                                <div className="col-6">
                                                    <a href="https://thebestforyourself.ru/product/scrub-kokos" className="custom-btn">Читать подробнее</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="block-product__item item d-flex flex-column " style={{ height: '100%' }}>
                                    <div>
                                        <div className="swiper product-item-swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-css-mode">
                                            <div className="swiper-wrapper product-item-swiper__wrapper" id="swiper-wrapper-1cf98d79a4bcf219" aria-live="polite">
                                                <div className="swiper-slide product-item-swiper__slide swiper-slide-active" role="group" aria-label="1 / 4">
                                                    <div className="block-product__item-img item-square">
                                                        <a href="https://thebestforyourself.ru/product/face-scrub" className="full-link" />
                                                        <div className="img d-block">
                                                            <img src="https://thebestforyourself.ru/storage/media/cards/скраб_для_лица/560x560/900x900_41.1.png" data-src="https://thebestforyourself.ru/storage/media/cards/скраб_для_лица/560x560/900x900_41.1.png" style={{ width: '100%' }} alt className="loaded" data-was-processed="true" />
                                                        </div>
                                                        <div className="block-product__item-content d-flex flex-column justify-content-between">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide product-item-swiper__slide swiper-slide-next" role="group" aria-label="2 / 4">
                                                    <div className="block-product__item-img item-square">
                                                        <a href="https://thebestforyourself.ru/product/face-scrub" className="full-link" />
                                                        <div className="img d-block">
                                                            <img src="https://thebestforyourself.ru/storage/media/cards/скраб_для_лица/560x560/900x900_41.2.png" data-src="https://thebestforyourself.ru/storage/media/cards/скраб_для_лица/560x560/900x900_41.2.png" style={{ width: '100%' }} alt className="loaded" data-was-processed="true" />
                                                        </div>
                                                        <div className="block-product__item-content d-flex flex-column justify-content-between">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide product-item-swiper__slide" role="group" aria-label="3 / 4">
                                                    <div className="block-product__item-img item-square">
                                                        <a href="https://thebestforyourself.ru/product/face-scrub" className="full-link" />
                                                        <div className="img d-block">
                                                            <img src="https://thebestforyourself.ru/storage/media/cards/скраб_для_лица/560x560/preload.jpg" data-src="https://thebestforyourself.ru/storage/media/cards/скраб_для_лица/560x560/900x900_41.3.png" style={{ width: '100%' }} alt />
                                                        </div>
                                                        <div className="block-product__item-content d-flex flex-column justify-content-between">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide product-item-swiper__slide" role="group" aria-label="4 / 4">
                                                    <div className="block-product__item-img item-square">
                                                        <a href="https://thebestforyourself.ru/product/face-scrub" className="full-link" />
                                                        <div className="img d-block">
                                                            <img src="https://thebestforyourself.ru/storage/media/cards/скраб_для_лица/560x560/preload.jpg" data-src="https://thebestforyourself.ru/storage/media/cards/скраб_для_лица/560x560/900x900_41.4.png" style={{ width: '100%' }} alt />
                                                        </div>
                                                        <div className="block-product__item-content d-flex flex-column justify-content-between">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-item-swiper__pagination swiper-pagination-bullets swiper-pagination-horizontal"><span className="swiper-pagination-bullet swiper-pagination-bullet-active" aria-current="true" /><span className="swiper-pagination-bullet" /><span className="swiper-pagination-bullet" /><span className="swiper-pagination-bullet" /></div>
                                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
                                    </div>
                                    <div className="block-product__info flex-1 d-flex flex-column justify-content-between">
                                        <div>
                                            <div className="block-product__name">Скраб для лица нероли</div>
                                            <div className="block-product__volume">50ml</div>
                                        </div>
                                        <div>
                                            <div className="block-product__price-block d-flex align-items-center">
                                                <div className="block-product__price">2 200 руб.</div>
                                            </div>
                                            <div className="block-product__btns row g-2">
                                                <div className="col-6">
                                                    <p>sold out</p>
                                                </div>
                                                <div className="col-6">
                                                    <a href="https://thebestforyourself.ru/product/face-scrub" className="custom-btn">Читать подробнее</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="block-product__item item d-flex flex-column " style={{ height: '100%' }}>
                                    <div>
                                        <div className="swiper product-item-swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-css-mode">
                                            <div className="swiper-wrapper product-item-swiper__wrapper" id="swiper-wrapper-8ad4a8f4a2d9f3be" aria-live="polite">
                                                <div className="swiper-slide product-item-swiper__slide swiper-slide-active" role="group" aria-label="1 / 4">
                                                    <div className="block-product__item-img item-square">
                                                        <a href="https://thebestforyourself.ru/product/face-scrub-bergamot" className="full-link" />
                                                        <div className="img d-block">
                                                            <img src="https://thebestforyourself.ru/storage/media/cards/скраб_бергамот/560x560/900x900_64.1.png" data-src="https://thebestforyourself.ru/storage/media/cards/скраб_бергамот/560x560/900x900_64.1.png" style={{ width: '100%' }} alt className="loaded" data-was-processed="true" />
                                                        </div>
                                                        <div className="block-product__item-content d-flex flex-column justify-content-between">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide product-item-swiper__slide swiper-slide-next" role="group" aria-label="2 / 4">
                                                    <div className="block-product__item-img item-square">
                                                        <a href="https://thebestforyourself.ru/product/face-scrub-bergamot" className="full-link" />
                                                        <div className="img d-block">
                                                            <img src="https://thebestforyourself.ru/storage/media/cards/скраб_бергамот/560x560/900x900_64.2.png" data-src="https://thebestforyourself.ru/storage/media/cards/скраб_бергамот/560x560/900x900_64.2.png" style={{ width: '100%' }} alt className="loaded" data-was-processed="true" />
                                                        </div>
                                                        <div className="block-product__item-content d-flex flex-column justify-content-between">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide product-item-swiper__slide" role="group" aria-label="3 / 4">
                                                    <div className="block-product__item-img item-square">
                                                        <a href="https://thebestforyourself.ru/product/face-scrub-bergamot" className="full-link" />
                                                        <div className="img d-block">
                                                            <img src="https://thebestforyourself.ru/storage/media/cards/скраб_бергамот/560x560/preload.jpg" data-src="https://thebestforyourself.ru/storage/media/cards/скраб_бергамот/560x560/900x900_64.3.png" style={{ width: '100%' }} alt />
                                                        </div>
                                                        <div className="block-product__item-content d-flex flex-column justify-content-between">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide product-item-swiper__slide" role="group" aria-label="4 / 4">
                                                    <div className="block-product__item-img item-square">
                                                        <a href="https://thebestforyourself.ru/product/face-scrub-bergamot" className="full-link" />
                                                        <div className="img d-block">
                                                            <img src="https://thebestforyourself.ru/storage/media/cards/скраб_бергамот/560x560/preload.jpg" data-src="https://thebestforyourself.ru/storage/media/cards/скраб_бергамот/560x560/900x900_64.4.png" style={{ width: '100%' }} alt />
                                                        </div>
                                                        <div className="block-product__item-content d-flex flex-column justify-content-between">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-item-swiper__pagination swiper-pagination-bullets swiper-pagination-horizontal"><span className="swiper-pagination-bullet swiper-pagination-bullet-active" aria-current="true" /><span className="swiper-pagination-bullet" /><span className="swiper-pagination-bullet" /><span className="swiper-pagination-bullet" /></div>
                                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
                                    </div>
                                    <div className="block-product__info flex-1 d-flex flex-column justify-content-between">
                                        <div>
                                            <div className="block-product__name">Скраб для лица бергамот</div>
                                            <div className="block-product__volume">50 мл</div>
                                        </div>
                                        <div>
                                            <div className="block-product__price-block d-flex align-items-center">
                                                <div className="block-product__price">2 200 руб.</div>
                                            </div>
                                            <div className="block-product__btns row g-2">
                                                <div className="col-6">
                                                    <a href="#" className="custom-btn custom-btn-dark" onclick="addToCart(117); return false;">В корзину</a>
                                                </div>
                                                <div className="col-6">
                                                    <a href="https://thebestforyourself.ru/product/face-scrub-bergamot" className="custom-btn">Читать подробнее</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="block-product__item item d-flex flex-column " style={{ height: '100%' }}>
                                    <div>
                                        <div className="swiper product-item-swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-css-mode">
                                            <div className="swiper-wrapper product-item-swiper__wrapper" id="swiper-wrapper-e1ba10278be688e9a" aria-live="polite">
                                                <div className="swiper-slide product-item-swiper__slide swiper-slide-active" role="group" aria-label="1 / 5">
                                                    <div className="block-product__item-img item-square">
                                                        <a href="https://thebestforyourself.ru/product/lip-scrub" className="full-link" />
                                                        <div className="img d-block">
                                                            <img src="https://thebestforyourself.ru/storage/media/pr12.22/lip-scrub/560x560/1800x1800_69.1.jpg" data-src="https://thebestforyourself.ru/storage/media/pr12.22/lip-scrub/560x560/1800x1800_69.1.jpg" style={{ width: '100%' }} alt className="loaded" data-was-processed="true" />
                                                        </div>
                                                        <div className="block-product__item-content d-flex flex-column justify-content-between">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide product-item-swiper__slide swiper-slide-next" role="group" aria-label="2 / 5">
                                                    <div className="block-product__item-img item-square">
                                                        <a href="https://thebestforyourself.ru/product/lip-scrub" className="full-link" />
                                                        <div className="img d-block">
                                                            <img src="https://thebestforyourself.ru/storage/media/pr12.22/lip-scrub/560x560/1800x1800_69.2.jpg" data-src="https://thebestforyourself.ru/storage/media/pr12.22/lip-scrub/560x560/1800x1800_69.2.jpg" style={{ width: '100%' }} alt className="loaded" data-was-processed="true" />
                                                        </div>
                                                        <div className="block-product__item-content d-flex flex-column justify-content-between">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide product-item-swiper__slide" role="group" aria-label="3 / 5">
                                                    <div className="block-product__item-img item-square">
                                                        <a href="https://thebestforyourself.ru/product/lip-scrub" className="full-link" />
                                                        <div className="img d-block">
                                                            <img src="https://thebestforyourself.ru/storage/media/pr12.22/lip-scrub/560x560/preload.jpg" data-src="https://thebestforyourself.ru/storage/media/pr12.22/lip-scrub/560x560/1800x1800_69.3.jpg" style={{ width: '100%' }} alt />
                                                        </div>
                                                        <div className="block-product__item-content d-flex flex-column justify-content-between">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide product-item-swiper__slide" role="group" aria-label="4 / 5">
                                                    <div className="block-product__item-img item-square">
                                                        <a href="https://thebestforyourself.ru/product/lip-scrub" className="full-link" />
                                                        <div className="img d-block">
                                                            <img src="https://thebestforyourself.ru/storage/media/pr12.22/lip-scrub/560x560/preload.jpg" data-src="https://thebestforyourself.ru/storage/media/pr12.22/lip-scrub/560x560/1800x1800_69.4.jpg" style={{ width: '100%' }} alt />
                                                        </div>
                                                        <div className="block-product__item-content d-flex flex-column justify-content-between">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide product-item-swiper__slide" role="group" aria-label="5 / 5">
                                                    <div className="block-product__item-img item-square">
                                                        <a href="https://thebestforyourself.ru/product/lip-scrub" className="full-link" />
                                                        <div className="img d-block">
                                                            <img src="https://thebestforyourself.ru/storage/media/pr12.22/lip-scrub/560x560/preload.jpg" data-src="https://thebestforyourself.ru/storage/media/pr12.22/lip-scrub/560x560/1800x1800_69.5.jpg" style={{ width: '100%' }} alt />
                                                        </div>
                                                        <div className="block-product__item-content d-flex flex-column justify-content-between">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-item-swiper__pagination swiper-pagination-bullets swiper-pagination-horizontal"><span className="swiper-pagination-bullet swiper-pagination-bullet-active" aria-current="true" /><span className="swiper-pagination-bullet" /><span className="swiper-pagination-bullet" /><span className="swiper-pagination-bullet" /><span className="swiper-pagination-bullet" /></div>
                                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
                                    </div>
                                    <div className="block-product__info flex-1 d-flex flex-column justify-content-between">
                                        <div>
                                            <div className="block-product__name">Скраб для губ</div>
                                            <div className="block-product__volume">25 г</div>
                                        </div>
                                        <div>
                                            <div className="block-product__price-block d-flex align-items-center">
                                                <div className="block-product__price">790 руб.</div>
                                            </div>
                                            <div className="block-product__btns row g-2">
                                                <div className="col-6">
                                                    <p>sold out</p>
                                                </div>
                                                <div className="col-6">
                                                    <a href="https://thebestforyourself.ru/product/lip-scrub" className="custom-btn">Читать подробнее</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="block-product__item item d-flex flex-column " style={{ height: '100%' }}>
                                    <div>
                                        <div className="swiper product-item-swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-css-mode">
                                            <div className="swiper-wrapper product-item-swiper__wrapper" id="swiper-wrapper-e17f73ee8956ef84" aria-live="polite">
                                                <div className="swiper-slide product-item-swiper__slide swiper-slide-active" role="group" aria-label="1 / 3">
                                                    <div className="block-product__item-img item-square">
                                                        <a href="https://thebestforyourself.ru/product/scrub-cold" className="full-link" />
                                                        <div className="img d-block">
                                                            <img src="https://thebestforyourself.ru/storage/media/cards/холода_арктики/560x560/900x900_1.1.png" data-src="https://thebestforyourself.ru/storage/media/cards/холода_арктики/560x560/900x900_1.1.png" style={{ width: '100%' }} alt className="loaded" data-was-processed="true" />
                                                        </div>
                                                        <div className="block-product__item-content d-flex flex-column justify-content-between">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide product-item-swiper__slide swiper-slide-next" role="group" aria-label="2 / 3">
                                                    <div className="block-product__item-img item-square">
                                                        <a href="https://thebestforyourself.ru/product/scrub-cold" className="full-link" />
                                                        <div className="img d-block">
                                                            <img src="https://thebestforyourself.ru/storage/media/cards/холода_арктики/560x560/900x900_1.2.png" data-src="https://thebestforyourself.ru/storage/media/cards/холода_арктики/560x560/900x900_1.2.png" style={{ width: '100%' }} alt className="loaded" data-was-processed="true" />
                                                        </div>
                                                        <div className="block-product__item-content d-flex flex-column justify-content-between">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide product-item-swiper__slide" role="group" aria-label="3 / 3">
                                                    <div className="block-product__item-img item-square">
                                                        <a href="https://thebestforyourself.ru/product/scrub-cold" className="full-link" />
                                                        <div className="img d-block">
                                                            <img src="https://thebestforyourself.ru/storage/media/cards/холода_арктики/560x560/preload.jpg" data-src="https://thebestforyourself.ru/storage/media/cards/холода_арктики/560x560/900x900_1.3.png" style={{ width: '100%' }} alt />
                                                        </div>
                                                        <div className="block-product__item-content d-flex flex-column justify-content-between">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-item-swiper__pagination swiper-pagination-bullets swiper-pagination-horizontal"><span className="swiper-pagination-bullet swiper-pagination-bullet-active" aria-current="true" /><span className="swiper-pagination-bullet" /><span className="swiper-pagination-bullet" /></div>
                                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
                                    </div>
                                    <div className="block-product__info flex-1 d-flex flex-column justify-content-between">
                                        <div>
                                            <div className="block-product__name">Охлаждающий скраб для тела "Холода Арктики"</div>
                                            <div className="block-product__volume">250мл (300г)</div>
                                        </div>
                                        <div>
                                            <div className="block-product__price-block d-flex align-items-center">
                                                <div className="block-product__price">1 790 руб.</div>
                                            </div>
                                            <div className="block-product__btns row g-2">
                                                <div className="col-6">
                                                    <a href="#" className="custom-btn custom-btn-dark" onclick="addToCart(39); return false;">В корзину</a>
                                                </div>
                                                <div className="col-6">
                                                    <a href="https://thebestforyourself.ru/product/scrub-cold" className="custom-btn">Читать подробнее</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="block-product__item item d-flex flex-column " style={{ height: '100%' }}>
                                    <div>
                                        <div className="swiper product-item-swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-css-mode">
                                            <div className="swiper-wrapper product-item-swiper__wrapper" id="swiper-wrapper-cc964ed112b33818" aria-live="polite">
                                                <div className="swiper-slide product-item-swiper__slide swiper-slide-active" role="group" aria-label="1 / 4">
                                                    <div className="block-product__item-img item-square">
                                                        <a href="https://thebestforyourself.ru/product/scrub-warm" className="full-link" />
                                                        <div className="img d-block">
                                                            <img src="https://thebestforyourself.ru/storage/media/cards/солнце_африки/560x560/preload.jpg" data-src="https://thebestforyourself.ru/storage/media/cards/солнце_африки/560x560/900x900_2.1.png" style={{ width: '100%' }} alt />
                                                        </div>
                                                        <div className="block-product__item-content d-flex flex-column justify-content-between">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide product-item-swiper__slide swiper-slide-next" role="group" aria-label="2 / 4">
                                                    <div className="block-product__item-img item-square">
                                                        <a href="https://thebestforyourself.ru/product/scrub-warm" className="full-link" />
                                                        <div className="img d-block">
                                                            <img src="https://thebestforyourself.ru/storage/media/cards/солнце_африки/560x560/preload.jpg" data-src="https://thebestforyourself.ru/storage/media/cards/солнце_африки/560x560/900x900_2.2.png" style={{ width: '100%' }} alt />
                                                        </div>
                                                        <div className="block-product__item-content d-flex flex-column justify-content-between">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide product-item-swiper__slide" role="group" aria-label="3 / 4">
                                                    <div className="block-product__item-img item-square">
                                                        <a href="https://thebestforyourself.ru/product/scrub-warm" className="full-link" />
                                                        <div className="img d-block">
                                                            <img src="https://thebestforyourself.ru/storage/media/cards/солнце_африки/560x560/preload.jpg" data-src="https://thebestforyourself.ru/storage/media/cards/солнце_африки/560x560/900x900_2.3.png" style={{ width: '100%' }} alt />
                                                        </div>
                                                        <div className="block-product__item-content d-flex flex-column justify-content-between">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide product-item-swiper__slide" role="group" aria-label="4 / 4">
                                                    <div className="block-product__item-img item-square">
                                                        <a href="https://thebestforyourself.ru/product/scrub-warm" className="full-link" />
                                                        <div className="img d-block">
                                                            <img src="https://thebestforyourself.ru/storage/media/cards/солнце_африки/560x560/preload.jpg" data-src="https://thebestforyourself.ru/storage/media/cards/солнце_африки/560x560/900x900_2.4.png" style={{ width: '100%' }} alt />
                                                        </div>
                                                        <div className="block-product__item-content d-flex flex-column justify-content-between">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-item-swiper__pagination swiper-pagination-bullets swiper-pagination-horizontal"><span className="swiper-pagination-bullet swiper-pagination-bullet-active" aria-current="true" /><span className="swiper-pagination-bullet" /><span className="swiper-pagination-bullet" /><span className="swiper-pagination-bullet" /></div>
                                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
                                    </div>
                                    <div className="block-product__info flex-1 d-flex flex-column justify-content-between">
                                        <div>
                                            <div className="block-product__name">Разогревающий скраб для тела Солнце Африки</div>
                                            <div className="block-product__volume">250мл (280г)</div>
                                        </div>
                                        <div>
                                            <div className="block-product__price-block d-flex align-items-center">
                                                <div className="block-product__price">1 790 руб.</div>
                                            </div>
                                            <div className="block-product__btns row g-2">
                                                <div className="col-6">
                                                    <a href="#" className="custom-btn custom-btn-dark" onclick="addToCart(53); return false;">В корзину</a>
                                                </div>
                                                <div className="col-6">
                                                    <a href="https://thebestforyourself.ru/product/scrub-warm" className="custom-btn">Читать подробнее</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="block-product__item item d-flex flex-column " style={{ height: '100%' }}>
                                    <div className="block-product__item-img item-square">
                                        <a href="https://thebestforyourself.ru/product/new-giftbox-raspberry" className="full-link" />
                                        <div className="img d-block">
                                            <img src="https://thebestforyourself.ru/storage/media/cards/бокс_разогревающий/560x560/preload.jpg" data-src="https://thebestforyourself.ru/storage/media/cards/бокс_разогревающий/44.1.png" style={{ width: '100%' }} alt />
                                        </div>
                                    </div>
                                    <div className="block-product__info flex-1 d-flex flex-column justify-content-between">
                                        <div>
                                            <div className="block-product__name">Бокс с разогревающим скрабом</div>
                                            <div className="block-product__volume" />
                                        </div>
                                        <div>
                                            <div className="block-product__price-block d-flex align-items-center">
                                                <div className="block-product__price">4 350 руб.</div>
                                            </div>
                                            <div className="block-product__btns row g-2">
                                                <div className="col-6">
                                                    <a href="#" className="custom-btn custom-btn-dark" onclick="addToCart(62); return false;">В корзину</a>
                                                </div>
                                                <div className="col-6">
                                                    <a href="https://thebestforyourself.ru/product/new-giftbox-raspberry" className="custom-btn">Читать подробнее</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="block-product__item item d-flex flex-column " style={{ height: '100%' }}>
                                    <div>
                                        <div className="swiper product-item-swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-css-mode">
                                            <div className="swiper-wrapper product-item-swiper__wrapper" id="swiper-wrapper-31110fcb50ffc6a4" aria-live="polite">
                                                <div className="swiper-slide product-item-swiper__slide swiper-slide-active" role="group" aria-label="1 / 2">
                                                    <div className="block-product__item-img item-square">
                                                        <a href="https://thebestforyourself.ru/product/new-giftbox-orange" className="full-link" />
                                                        <div className="img d-block">
                                                            <img src="https://thebestforyourself.ru/storage/media/cards/бокс_охлаждающий/560x560/preload.jpg" data-src="https://thebestforyourself.ru/storage/media/cards/бокс_охлаждающий/560x560/900x900_43.1.png" style={{ width: '100%' }} alt />
                                                        </div>
                                                        <div className="block-product__item-content d-flex flex-column justify-content-between">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide product-item-swiper__slide swiper-slide-next" role="group" aria-label="2 / 2">
                                                    <div className="block-product__item-img item-square">
                                                        <a href="https://thebestforyourself.ru/product/new-giftbox-orange" className="full-link" />
                                                        <div className="img d-block">
                                                            <img src="https://thebestforyourself.ru/storage/media/cards/бокс_охлаждающий/560x560/preload.jpg" data-src="https://thebestforyourself.ru/storage/media/cards/бокс_охлаждающий/560x560/900x900_43.2.png" style={{ width: '100%' }} alt />
                                                        </div>
                                                        <div className="block-product__item-content d-flex flex-column justify-content-between">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-item-swiper__pagination swiper-pagination-bullets swiper-pagination-horizontal"><span className="swiper-pagination-bullet swiper-pagination-bullet-active" aria-current="true" /><span className="swiper-pagination-bullet" /></div>
                                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /><span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
                                    </div>
                                    <div className="block-product__info flex-1 d-flex flex-column justify-content-between">
                                        <div>
                                            <div className="block-product__name">Бокс с охлаждающим скрабом</div>
                                            <div className="block-product__volume" />
                                        </div>
                                        <div>
                                            <div className="block-product__price-block d-flex align-items-center">
                                                <div className="block-product__price">4 350 руб.</div>
                                            </div>
                                            <div className="block-product__btns row g-2">
                                                <div className="col-6">
                                                    <a href="#" className="custom-btn custom-btn-dark" onclick="addToCart(63); return false;">В корзину</a>
                                                </div>
                                                <div className="col-6">
                                                    <a href="https://thebestforyourself.ru/product/new-giftbox-orange" className="custom-btn">Читать подробнее</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style dangerouslySetInnerHTML={{ __html: "\n    .pagination {\n      display: flex;\n      align-items: center;\n      margin-top: 2em;\n      margin-bottom: 2em;\n      margin-left: auto;\n      margin-right: auto;\n    }\n\n    .pagination .page-link {\n      width: 30px;\n      height: 30px;\n      color: black;\n      display: block;\n      padding: 8px 16px;\n      text-decoration: none;\n    }\n  " }} />
            <div className="container"> </div>
        </div>

    )
}

export default Search