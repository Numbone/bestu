import React from 'react'
import "./ModalForCountry.css"
const ModalForCountry = ({ active, setActive, children }) => {
    return (
        <div>
            <div className={active ? 'modal2 active' : 'modal2'} onClick={() => setActive(false)}>
                <div className={active ? 'modalCountry active' : 'modalCountry'} onClick={e => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ModalForCountry