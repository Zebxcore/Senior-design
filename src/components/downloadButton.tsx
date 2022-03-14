import React, { useState } from 'react';
import { Container, Modal, Button } from 'react-bootstrap';

export function DownloadButton(): JSX.Element {

     //States for data, buttons, etc
     const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

     //Some way to display what songs the user is able to download

     //Handlers for data and states

     return (
          <Container>
               <Button variant='primary' onClick={handleShow}>Download</Button>

               <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                         <Modal.Title>Download a File</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                         <p>List of songs can go here, user is able to pick which one to download</p>
                    </Modal.Body>

                    <Modal.Footer>
                         <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                         <Button variant="primary">Download</Button>
                    </Modal.Footer>
               </Modal>
          </Container>
     );
}