import React, { useState } from 'react'
import { Toast, Button } from 'react-bootstrap'
export default function ToastComponent({showToast,setToast}) {

  return (
    <div>
      
      <Toast
        onClick={() => setToast(false)}
        autohide
        show={showToast}
        delay={2200}
      >
        <Toast.Header>
          <strong className="mr-auto">React Toast</strong>
          <small>50 mins ago</small>
        </Toast.Header>
        <Toast.Body>Lorem ipsum dolor sit adipiscing elit.</Toast.Body>
      </Toast>
    </div>
  )
}