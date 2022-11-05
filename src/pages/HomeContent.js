import React from 'react'
import BlockAbout from '../component/BlockAbout/BlockAbout'
import BlockCatalog from '../component/BlockCatalog/BlockCatalog'
import BlockPartner from '../component/BlockPartners/BlockPartner'
import BlockTop from '../component/BlockTop/BlockTop'

const HomeContent = () => {
  return (
    <div className='flex-1' style={{minHeight:"100vh"}}>
        <BlockTop/>
        <BlockAbout/>
        <BlockCatalog/>
        <BlockPartner/>
    </div>
  )
}

export default HomeContent