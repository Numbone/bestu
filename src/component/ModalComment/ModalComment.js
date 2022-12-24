import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const ModalComment = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Отзывы
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>От Мария, опубликован: 24.11.2022 14:05:28</h4>
        <p>
        Не решалась брать этот скраб, так как отзывы по аромату были разные. Как-то я выиграла этот скраб. Первоначально аромат показался очень терпким. Мне казалось, что я пахну им пару дней точно. Каково было мое удивление, когда муж сказал: ты так вкусно пахнешь, я тоже так хочу🤣 к запаху привыкла. Кожа после скрабирования нежнейшая, увлажненная. Частички скраба нежно скрабируют кожу без травмирования. Благодарю за такую находку 🫶🏼☺️
        </p>
      </Modal.Body>
     
    </Modal>
  )
}

export default ModalComment