import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { reviewAdd } from '../../api/review';
const ModalSendProductStars = (props) => {
    const [review_text, setText] = useState("")

    const sendReviewStar = async () => {
        props.setNumberStars(0)
        props.setNumberStars2(0)
        props.setNumberStars3(0)
        props.setNumberStars4(0)
        props.setNumberStars5(0)
        props.setActive(false)
       const data = await reviewAdd(props?.id,props?.aroma_stars,props?.delivery_stars,props?.effect_stars,props?.quality_stars,review_text,props?.texture_stars)
     
       
      }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">


                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "#e7dbe2" }}>
                <div className='d-flex justify-content-between flex-column min-full-height py-4'>
                    <div className='container'>
                        <div className='mb-4 mt-4'>

                            <div>
                                <h3 className='block__title'>Оставить отзыв</h3>
                            </div>
                            <div className='"mt-4'>
                                <input
                                    style={{
                                        width: '100%',
                                        height: "50px",
                                        padding: "10px",

                                    }}
                                    onChange={(e) => setText(e.target.value)}>
                                </input>
                            </div>
                        </div>
                        <div style={{ display: 'flex', width: "100%", justifyContent: "flex-end" }}>
                            <button onClick={sendReviewStar} className='btn'>
                                Отправить
                            </button>
                        </div>

                    </div>

                </div>


            </Modal.Body>


        </Modal>
    )
}

export default ModalSendProductStars