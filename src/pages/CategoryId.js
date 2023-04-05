import React, { useContext, useEffect, useState } from 'react'
import { productCategory } from '../api/product'
import BlockAbout from '../component/BlockAbout/BlockAbout'
import BlockTop from '../component/BlockTop/BlockTop'
import Item from '../component/Item/Item'
import { Context } from ".."
import { NavLink, useLocation } from 'react-router-dom'
import btop from '../img/beautytop.jpg'
import { observer } from 'mobx-react-lite'
import ModalItem from '../component/ModalItem/ModalItem'
const CategoryId = () => {
  const locate = useLocation()

  const [product, setProduct] = useState({})
  const { lang } = useContext(Context)
  const getAllProducts = async () => {
    try {
      const { data } = await productCategory(lang?.lang == "ru" ? locate?.state?.name_ru : locate?.state?.name_en)
      setProduct(data.product)
    } catch (error) {
      console.log(error);
    }
  }
  console.log(locate,"locate");
  useEffect(() => {
    lang.lang == "ru" ?
      getAllProducts()
      : getAllProducts()
  }, [lang.lang])
  const { basket } = useContext(Context)
  const clickOrder = (id) => {
    basket.setBasket(id)

  }
  const [active, setActive] = React.useState(false)
  const [indexPhoto, setIndexPhoto] = useState(0)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const stylang=lang.lang
  console.log(product,"product")
  return (
    <>
      <div>
        <div className='block-top category' 
        
        style={ stylang==="ru"?
          // locate?.state?.ImagesRu === undefined? null : { backgroundImage: `url(${ locate?.state?.ImagesRu[1]})` }
           { backgroundImage: `url(${ locate?.state?.ImagesRu?.[1]})` }
           : { backgroundImage: `url(${ locate?.state?.ImagesEn?.[1]})` }
          }>
          <div className='d-flex justify-content-center'>
            <div className='container'>
              <div className='block-top__big-name'>
                Le mousse
              </div>
            </div>
          </div>
        </div>
        <div className='block-catalog'>
          <div className='container'>
            <div className='block__title text-center'>
              {
                lang.lang==="ru"
                ? <p>Каталог</p>
                :  <p>Сatalog</p>
              }
             
            </div>
            <div className='block-catalog__items'>
              <div className='row g-2 g-md-4'>
                {product?.length == undefined | null
                  ? <div></div>
                  : product.map((item, index) =>
                    <Item
                      props={item}
                      key={index}
                      id={item.id}
                      clickOrder={clickOrder}
                      setIndexPhoto={setIndexPhoto}
                      active={active}
                      setActive={setActive}
                      index={index}
                    />)
                }
              </div>
            </div>
            <ModalItem active={active} setActive={setActive}>
              <div className="toastjs-container">
                <div className="toastjs success">
                  <p>
                    {
                      lang.lang==="ru"?
                      product===null ?null
                      :product[indexPhoto] ===undefined  ? null :product[indexPhoto]?.name_ru
                      :
                      product===null ?null
                      :product[indexPhoto] ===undefined  ? null :product[indexPhoto]?.name_en
                    }
                    
                  </p>
                  <div className="d-flex">

                    <button type="button" className="toastjs-btn toastjs-btn--custom" onClick={() => setActive(false)}>
                      <NavLink to='/order' style={{ color: '#fff' }}>  {
                        lang.lang==="ru"
                        ?<>Оформить заказ </>
                        :<>
                        Checkout</>
                      }</NavLink>
                    </button>


                    <button type="button" className="toastjs-btn toastjs-btn--close" onClick={() => setActive(false)}>
                      Ок
                    </button>

                  </div>
                </div>
              </div>

            </ModalItem>
          </div>
        </div>
      </div>
    </>
  )
}

export default observer(CategoryId) 