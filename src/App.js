import './App.css'
import {Container, Row, Col, Jumbotron, Button} from 'react-bootstrap'
import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Editor from './components/Editor'
import Search from './components/Search'
import Allnotes from './components/Allnotes'
import * as N from './utils/NoteHelpers'

// console.log(N.createNote('55555', 'testNew', 'newbody'))
function App() {
  const [selectedNote, setSelectedNote] = useState(undefined)

  return (
    <Container>
      <Jumbotron className="tabHeader">
        <h2>My Note App</h2>
      </Jumbotron>

      <Row>
        <Col sm={12} md={12}>
          <Search> </Search>
        </Col>
      </Row>

      <Row>
        <Col className="allNote" sm={12} md={6}>
          <div>
            <Button variant="info" size="sm" className="mb-4 mt-2" block>
              + New Note
            </Button>
          </div>
          <div className="mb-4">
            <Allnotes selectedNote={selectedNote} setSelectedNote={setSelectedNote} />
          </div>
        </Col>
        <Col className="editNote" sm={12} md={6}>
          Edit notes
          <Editor selectedNote={selectedNote} />
        </Col>
      </Row>
    </Container>
  )
}

export default App
