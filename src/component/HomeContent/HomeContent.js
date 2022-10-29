import React from 'react'
import BlockAbout from '../BlockAbout/BlockAbout'
import BlockCatalog from '../BlockCatalog/BlockCatalog'
import BlockPartner from '../BlockPartners/BlockPartner'
import BlockTop from '../BlockTop/BlockTop'

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