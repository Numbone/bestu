import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../..';

const ModalSucces = (props) => {
    const {lang}=useContext(Context)
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {
                        lang.lang==="ru"
                        ?<> Ваш запрос отправлен</>
                        :<>Your request has been sent </>
                    }
                   
                </Modal.Title>
            </Modal.Header>
        
        </Modal>
    )
}

export default ModalSucces