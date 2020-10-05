import React from 'react';
import './css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import PageDropdown from './component/PageDropdown';
import PageFig from './component/PageFig';
import PageBreadcrumb from './component/PageBreadcrumb';
import PageCarou from './component/PageCarou';
import Konten from './component/Konten';

function App() {
  return (
    <div>
      <Container>
        <Row className='table-dark'>
          <Col sm={3}><PageDropdown/></Col>
          <Col sm={6}></Col>
          <Col sm={3}><PageFig/></Col>
        </Row>
        <Row>
          <Col sm={6}></Col>
          <Col sm={6}><PageBreadcrumb/></Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <center>
            <PageCarou/>
          </center>
        </Row>
      </Container><br/>
      <Konten/>
    </div>
  );
}

export default App;
