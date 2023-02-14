import { format } from "date-fns";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const ModalComment = (props) => {
 
  // let result
  // if (props.data!=undefined){
  //   for (let i = 0; i < props.data.length; i++) {
  //     const element = props.data[i];
  //     element=(element?.aroma_stars+element?.delivery_stars+element?.effect_stars+element?.quality_stars+element?.texture_stars)/5
  //     result=result+element
  //   }
  // }
 
  // result=result/props?.data?.length
  // console.log(result)
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          <div style={{display:"flex",justifyContent:'space-between',alignItems:'center'}}>
            <div>Отзывы:</div>
            <div style={{fontWeight:'400',fontSize:"14px"}}>Средний рейтинг:</div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="">
        <div className="content">
          <div className="container-fluid">
            <div className="container background-pink">
            {props?.data?.map((item) => (
              <>
              <h4>
                <span style={{ fontWeight: "600" }}>От</span> {item?.username},{" "}
                <span style={{ fontWeight: "600" }}>опубликован: </span>
                {format(new Date(item.SendTime),"MMM d, yyyy HH:mm")}
              </h4>
              <p>
               {item?.review_text}
              </p>
              </>
           
              
              ))}
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalComment;
