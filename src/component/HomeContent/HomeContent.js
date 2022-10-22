import React from 'react'
import BlockAbout from '../BlockAbout/BlockAbout'
import BlockTop from '../BlockTop/BlockTop'

const HomeContent = () => {
  return (
    <div className='flex-1' style={{minHeight:"100vh"}}>
        <BlockTop/>
        <BlockAbout/>
    </div>
  )
}

export default HomeContent