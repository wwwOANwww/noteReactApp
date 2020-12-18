import React, {useState, useEffect} from 'react'
import './App.css'
import {Container, Row, Col, Jumbotron, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Editor from './components/Editor'
import Allnotes from './components/Allnotes'
import {getNotes} from './utils/NoteHelpers'

function App() {
  const [selectedNote, setSelectedNote] = useState(undefined)
  const [notes, setNotes] = useState([])
  useEffect(() => {
    const notes = getNotes()
    setNotes(notes)
  }, [setNotes])

  const refreshList = () => {
    setSelectedNote(undefined)
    const notes = getNotes()
    setNotes([...notes])
  }
  const createList = () => {
    setSelectedNote(undefined)
  }
  return (
    <Container>
      <Jumbotron className="tabHeader">
        <h2>My Note App</h2>
      </Jumbotron>

      <Row>
        <Col sm={12} md={12}></Col>
      </Row>

      <Row>
        <Col className="allNote" sm={12} md={6}>
          <div>
            <Button variant="info" size="sm" className="mb-4 mt-2" bloc onClick={createList}>
              + New Note
            </Button>
          </div>
          <div className="mb-4">
            <Allnotes notes={notes} selectedNote={selectedNote} setSelectedNote={setSelectedNote} />
          </div>
        </Col>
        <Col className="editNote" sm={12} md={6}>
          Edit notes
          <Editor refreshList={refreshList} selectedNote={selectedNote} />
        </Col>
      </Row>
    </Container>
  )
}

export default App
