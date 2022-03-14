import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { DownloadButton as Download } from './components/downloadButton';
import { UploadButton as Upload } from './components/uploadButton';
import { Container, Button, Row, Col } from "react-bootstrap";
import './App.css';

function App(): JSX.Element {
  return (
    <Container>
        <Row>
          <Col>
            <Upload />
          </Col>
          <Col>
            <Download />
          </Col>
        </Row>
    </Container>
  );
}

export default App;
