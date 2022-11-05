import React from 'react'
import '../AllProductTop/AllProductTop.css'
import ph from '../../img/allProduct.jpg'
const AllProductTop = () => {
    return (
        <div className='block-top category' style={{ backgroundImage: `url(${ph})` }}>
            <div className='d-flex justify-content-center'>
                <div className='container'>
                    <div className='block-top__big-name'>
                        Le mousse
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProductTop