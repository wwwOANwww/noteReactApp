import './App.css'
import {Container, Row, Col} from 'react-bootstrap'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Note from './components/Note'
import Editor from './components/Editor'
import Search from './components/Search'

function App() {
  return (
    <div className="App">
      <Container>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row className="tabHeader">
          <Col xs={12} md={8}>
            Oan create Note React App.
          </Col>
        </Row>

        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        <Row>
          <Col sm={12} md={8}>
            <Search> </Search>
          </Col>
        </Row>

        {/* Columns are always 50% wide, on mobile and desktop */}
        <Row>
          <Col className="allNote" sm={12} md={6}>
            <div> All notes </div>
            <div>
              <Note> </Note>
            </div>
          </Col>
          <Col className="editNote" sm={12} md={6}>
            Edit notes
            <Editor> </Editor>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
