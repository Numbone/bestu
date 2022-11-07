import React, { useState } from 'react'
import BlockAbout from '../component/BlockAbout/BlockAbout'
import BlockCatalog from '../component/BlockCatalog/BlockCatalog'
import BlockPartner from '../component/BlockPartners/BlockPartner'
import BlockTop from '../component/BlockTop/BlockTop'
import Modal from '../component/Modal/Modal'

const HomeContent = () => {
  
  return (
    <>

      <div className='flex-1' style={{ minHeight: "100vh" }}>
        <BlockTop />
        <BlockAbout />
        <BlockCatalog />
        <BlockPartner />

      </div>

    </>
  )
}

export default HomeContent