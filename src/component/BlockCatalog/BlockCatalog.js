import React, { useContext, useEffect, useState } from 'react'
import "../BlockCatalog/BlockCatalog.css"
import ps from "../../img/1.jpg"
import ps2 from "../../img/2.jpg"
import ps3 from "../../img/3.jpg"
import ps4 from "../../img/4.jpg"
import ps5 from "../../img/5.jpg"
import { NavLink } from 'react-router-dom'
import { Context } from '../..'
import { observer } from 'mobx-react-lite'
import { getCategories } from '../../api/category'

const BlockCatalog = () => {
    const { lang } = useContext(Context)
    const [categories, setCategories] = useState([])
    const getAllCategory = async () => {
        const { data } = await getCategories()
        setCategories(data?.all_category)
    }
  
    useEffect(() => {
        getAllCategory()
    }, [])


    return (
        <div className='block-catalog'>
            <div className='container'>
                <div className='block__title text-center'>
                    {
                        lang.lang == 'ru'
                            ? <NavLink to='/all_products'>Смотреть все товары</NavLink>
                            : <NavLink to='/all_products'>See all products</NavLink>
                    }
                    <br></br>
                    <br></br>
                    {
                        lang.lang == 'ru'
                            ?
                            <NavLink to='/available'>Сейчас в наличии</NavLink>
                            :
                            <NavLink to='/available'>Available in stock</NavLink>
                    }
                </div>
                <div className='block-catalog__items'>
                    <div className='row g-2 g-md-4'>
                        {
                            categories?.map((item,index) =>
                                <div className='col-sm-6'>
                                    <div className='block-catalog__item  item item-square d-block'
                                        style={lang.lang == 'ru' ?
                                            {
                                                backgroundImage: `url("${item.ImagesRu==undefined ? null :item?.ImagesRu[0]}")`
                                            }
                                            :
                                            {
                                                backgroundImage: `url("${item.ImagesEn==undefined ? null :item?.ImagesEn[0]}")`
                                            }
                                        }>
                                        <NavLink to={'/category/'+item?.name_en} state={categories[index]} className='img d-flex justify-content-center align-items-center flex-column'>

                                            {
                                                lang.lang == 'ru'
                                                    ?
                                                    <span className='block-catalog__item-title  '
                                                        style={item?.cursive==="1"?
                                                            { position: 'relative', bottom: '0.2em' , fontFamily:'Betmo, sans-serif'}
                                                        :
                                                        {position: 'relative', bottom: '0.2em' , fontFamily:'none'}}
                                                        >

                                                        {item?.name_ru}
                                                    </span>
                                                    :
                                                    <span className='block-catalog__item-title  '
                                                        style={{ position: 'relative', bottom: '0.2em' }}
                                                        >

                                                        {item?.name_en}
                                                    </span>
                                            }

                                            {
                                                lang.lang == 'ru' && item?.description_ru !=""
                                                    ? <span className='block-catalog__item-subtitle' 
                                                    >
                                                       {item?.description_ru?.split(/\r\n/)?.map(item=>
                                                        <div>{item}</div>)}
                                                    </span>
                                                    :null
                                            }
                                            {
                                                lang.lang == 'en' && item?.description_en !=""
                                                    ? <span className='block-catalog__item-subtitle'
                                                    >
                                                        {item?.description_en?.split(/\r\n/)?.map(item=>
                                                        <div>{item}</div>)}
                                                    </span>
                                                    :null
                                            }


                                        </NavLink>
                                    </div>
                                </div>

                            )
                        }


                    </div>
                </div>
            </div>
        </div>
    )
}

export default observer(BlockCatalog) 