import React, { useState } from 'react';
import { Container, Modal, Button } from 'react-bootstrap';

export function UploadButton(): JSX.Element {

     //Need a state for keeping "Upload" unavailable until document has been loaded
     const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

     //Need some form of loading document and previewing some info before actually uploading

     //Handler events for buttons and moving data



     return (
          <Container>

               <Button variant='primary' onClick={handleShow}>Upload</Button>

               <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                         <Modal.Title>Upload a File</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                         <p>Some explanation or information of file being uploaded goes here...</p>
                    </Modal.Body>

                    <Modal.Footer>
                         <Button variant="primary">Select File</Button>
                         <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                         <Button variant="success">Upload</Button>
                    </Modal.Footer>
               </Modal>

          </Container>
     );
}