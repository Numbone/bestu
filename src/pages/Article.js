import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Context } from '..'
import { productAll } from '../api/product'
import Item from '../component/Item/Item'
import ModalItem from '../component/ModalItem/ModalItem'
import btop from '../img/spatop.jpg'
const Article = () => {
    const {search}=useLocation()
    const divide=search.split("=")
    const twenty=divide[1].split(",")
    const result=twenty.map(s => s.replace('%20', ' '));
    const res=result.map(s=>s[0]===" "? s.replace(" ",""):s)
    console.log(res)
    const { lang, user } = useContext(Context);
    const { basket } = useContext(Context)
    const clickOrder = (id) => {
      basket.setBasket(id)
  
    }
    const [active, setActive] = React.useState(false)
    const [indexPhoto, setIndexPhoto] = useState(0)
    const getAllProducts = async () => {
        try {
            const { data } = await productAll("ru")
           for (let i = 0; i < res.length; i++) {
            const element = res[i];
            console.log(data?.product)
            console.log(element)
            data?.product.filter(item=>item?.article===element && setProduct(s=>[...s,item]))
           }
        } catch (error) {
            console.log(error);
        }
    }
    const [product,setProduct]=useState([])
    useEffect(()=>{
        getAllProducts()
    },[])
    console.log(product,"asdsad");
  return (
    <>
    <div className='block-top category' style={{ backgroundImage: `url(${btop})` }}>
        <div className='d-flex justify-content-center'>
            <div className='container'>
                <div className='block-top__big-name'>
                    Le moussea
                </div>
            </div>
        </div>
    </div>
    <div className='block-catalog'>
        <div className='container'>
            <div className='block__title text-center'>
                <p>Каталог</p>
            </div>
            <div className='block-catalog__items'>
                <div className='row g-2 g-md-4'>
                    {product?.length != undefined | null&&
                     product.map((item, index) =>
                      
                            <Item 
                            props={item}
                            key={index}
                            id={item.id}
                            clickOrder={clickOrder}
                            setIndexPhoto={setIndexPhoto}
                            active={active}
                            setActive={setActive}
                            index={index}/>)
                    }
                </div>
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
                      <NavLink to='/order' style={{ color: '#fff' }}>Оформить заказ </NavLink>
                    </button>


                    <button type="button" className="toastjs-btn toastjs-btn--close" onClick={() => setActive(false)}>
                      Ок
                    </button>

                  </div>
                </div>
              </div>

            </ModalItem>
    </div>
</>
  )
}

export default Article