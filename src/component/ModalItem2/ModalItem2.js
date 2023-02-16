import React from 'react'
import './ModalItem2.css'
const ModalItem2 = ({ active, setActive, children }) => {
    return (

        <div className={active ? 'modal_card_item active' : 'modal_card_item'} onClick={() => setActive(false)}>
            <div className={active ? 'modal_card_item_content active' : 'modal_card_item_content'} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default ModalItem2