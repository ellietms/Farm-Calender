import React from "react";
import {Modal,Label,Input} from 'react-modal';
import {FormGroup,Button} from 'react-bootstrap'; 

const Popup = () => {
<Modal showOverlay={false}>
    <Modal.Header>
        <Modal.Title>
            Modal title
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <FormGroup>
            <Label>Email address</Label>
            <Input
                type="email"
                placeholder="Email"
            />
        </FormGroup>
        <FormGroup>
            <Label>Password</Label>
            <Input
                type="password"
                placeholder="Password"
            />
        </FormGroup>
    </Modal.Body>
    <Modal.Footer>
        <Button>Cancel</Button>
        <Button btnStyle="primary">Save</Button>
    </Modal.Footer>
</Modal>
}

export default Popup;