import React from 'react'
import { NavLink } from 'react-router-dom'
import ph from "../img/fail.svg"
const AuthRoboFail = () => {
    return (
        <div className='success_robo'>
            <div className="robo_container">
                <div className="img_container_svg">
                    <img src={ph} alt="" />
                </div>
                <div className="success_text">
                    <span style={{ marginRight: "5px" }}>NAME </span  >
                    Ваша по оплата за курс 
                    <span style={{ padding: " 0 5px" }}>
                        Target_NAME</span> в размере
                    <span style={{ padding: " 0 5px" }}> NUmber</span>
                    рублей не прошла
                </div>
                <div className="success_text">
                    Номер вашей оплаты NUmber
                </div>
                <div className='success_button_robo'>
                    <NavLink to="/" className='robo_btn'>
                        На главную
                    </NavLink>
                </div>

            </div>
        </div>
    )
}

export default AuthRoboFail