import React from 'react'
import BlockAbout from '../BlockAbout/BlockAbout'
import BlockCatalog from '../BlockCatalog/BlockCatalog'
import BlockTop from '../BlockTop/BlockTop'

const HomeContent = () => {
  return (
    <div className='flex-1' style={{minHeight:"100vh"}}>
        <BlockTop/>
        <BlockAbout/>
        <BlockCatalog/>
    </div>
  )
}

export default HomeContent