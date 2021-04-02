import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const PopupWindow = () => {
  const [show, setShow] = useState(false);
  const handleClose = (event) => {
    event.preventDefault(); 
    setShow(false);
  }
  const handleShow = (event) => {
    event.preventDefault(); 
    setShow(true);
  } 

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        test
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book your slot</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your full name" />
              </Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit" onClick={handleClose}>
                Submit
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PopupWindow;
