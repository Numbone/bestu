import { format } from "date-fns";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const ModalComment = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header  className="background-pink" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Отзывы</Modal.Title>
      </Modal.Header>
      <Modal.Body className="background-pink" >
        {props?.data?.map((item) => (
          <>
            <h4>опубликован: { item?.SendTime}</h4>
            <p>
              {
                item?.review_text
              }
            </p>
          </>
        ))}
      </Modal.Body>
    </Modal>
  );
};

export default ModalComment;
