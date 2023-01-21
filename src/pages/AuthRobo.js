import React from 'react'
import "./css/AuthRobo.css"
import ph from "../img/svg.svg"
import { NavLink } from 'react-router-dom'
const AuthRobo = () => {
    return (
        <div className="robo_container">
            <div className="img_container_svg">
                <img src={ph} alt="" />
            </div>
            <div className="success_text">
                <span style={{ marginRight: "5px" }}>NAME </span  >
                Вы успешно внесли по оплата за курс 
                <span style={{ padding: " 0 5px" }}>Target_NAME</span>
                 в размере
                <span style={{ padding: " 0 5px" }}> NUmber</span>
                рублей
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

    )
}

export default AuthRobo