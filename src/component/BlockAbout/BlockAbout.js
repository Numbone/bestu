import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../..'
import "../BlockAbout/BlockAbout.css"
const BlockAbout = () => {
    const { lang } = useContext(Context)
    return (

        <div className='block-about'>
            <div className='container'>
                <div className='badge--flowers'>
                    {
                        lang.lang == "ru"
                            ?
                            <>
                                <div className='badge__title text-center'>
                                    LE MOUSSE - это
                                </div>
                                <div className='badge__text text-center'>
                                    сочетание невероятных, нежных ароматов, приятной легкой текстуры и
                                    качества лучших натуральных масел со всего мира!

                                </div>
                            </>
                            :
                            <>
                                <div className='badge__title text-center'>
                                    LE MOUSSE -
                                </div>
                                <div className='badge__text text-center'>
                                    combination of incredible, delicate aromas, pleasant light texture and
                                    quality of the best natural oils from around the world!

                                </div>
                            </>

                    }


                </div>
            </div>

        </div>
    )
}

export default observer(BlockAbout)