import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Context } from '..';
import { productSearch } from '../api/product';
import Item from '../component/Item/Item';
import search from "../img/icon-search.svg"
const Search = () => {
    const locate=useLocation()
    const world=locate.state
    const [product, setProduct] = useState()
    const prev = '<'
    const next = '>'
    const {lang}=useContext(Context)
     const getProduct = async () => {
        try {
            const { data } = await productSearch(world,lang.lang)
            setProduct(data.search_products)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getProduct()
    }, [])
  
    const [search1, setSeacrh1] = useState("")
    const SearchItem=async()=>{
        try {
            const { data } = await productSearch(search1)
            setProduct(data.search_products)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="flex-1" style={{ minHeight: '100vh' }}>
            <div className="container mt-3 mb-4">
               
                    <div className="form-field position-relative">
                        <input type="text" name="keyword" placehoder="Введите слово для поиска"  onChange={(e) => setSeacrh1(e.target.value)}/>
                        <button onClick={SearchItem} className=" btn-search"><img src={search} alt='props' /></button>
                    </div>
               
            </div>
            <>
            <div className='block-catalog'>
                <div className='container'>
                    <div className='block__title text-center'>
                        Результаты поиска
                    </div>
                    <div className='block-catalog__items'>
                        <div className='row gy-4 gx-2 g-md-4'>
                            {product=== undefined
                                ? <div></div>
                                : product.map((item, index) =>
                                    <Item props={item} key={index}  />)
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='container'>
                <nav>
                    <ul className='pagination'>
                        <li className='page-item'>
                            <a className='page-link'>{prev}</a>
                        </li>
                        <li className='page-item'>
                            <a className='page-link'>1</a>
                        </li>
                        <li className='page-item'>
                            <a className='page-link'>2</a>
                        </li>
                        <li className='page-item'>
                            <a className='page-link'>{next}</a>
                        </li>
                    </ul>
                </nav>
            </div> */}
        </>
           
        </div>

    )
}

export default Search