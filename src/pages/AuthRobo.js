import React, { useEffect, useState } from 'react'
import "./css/AuthRobo.css"
import ph from "../img/svg.svg"
import { NavLink, useLocation } from 'react-router-dom'
import { Robokassa } from '../api/robokassa'
import ph1 from "../img/fail.svg"

const AuthRobo = () => {
    const location = useLocation()
    const PreOutSum = location.search.split("&")[0]
    const OutSum = PreOutSum.split("=")[1]
    const PreInvId = location.search.split("&")[1]
    const InvId = PreInvId.split("=")[1]
    const PreSignatureValue = location.search.split("&")[2]
    const SignatureValue = PreSignatureValue.split("=")[1]
    
    const [checker, setChecker] = useState("")
    const sendRobokassa = async () => {
        const { data } = await Robokassa(OutSum, InvId, SignatureValue)
        
        localStorage.removeItem("basket")
        setChecker(data?.message)
    }
    useEffect(() => {
        
        sendRobokassa()
    }, [])
   
    return (
        <>
            {
                checker === "ok"
                    ? <div className="robo_container">
                        <div className="img_container_svg">
                            <img src={ph} alt="" />
                        </div>
                        <div className="success_text">
                            Вы успешно внесли по оплата 
                        </div>
                       
                        <div className='success_button_robo'>
                            <NavLink to="/" className='robo_btn'>
                                На главную
                            </NavLink>
                        </div>

                    </div>
                    :
                    <div className='success_robo'>
                        <div className="robo_container">
                            <div className="img_container_svg">
                                <img src={ph1} alt="" />
                            </div>
                            <div className="success_text">
                                Ваша по оплата 
                                рублей не прошла
                            </div>
                       
                            <div className='success_button_robo'>
                                <NavLink to="/" className='robo_btn'>
                                    На главную
                                </NavLink>
                            </div>

                        </div>
                    </div>
            }

        </>
    )
}

export default AuthRobo