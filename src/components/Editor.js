import React, {useState, useEffect} from 'react'
import {Button, Form, Alert} from 'react-bootstrap'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as N from '../utils/NoteHelpers'

export default function Editor({selectedNote, refreshList}) {
  // console.log(selectedNote)

  const [title, setTitle] = useState('')
  useEffect(() => {
    if (selectedNote) return setTitle(selectedNote.title)
    setTitle('')
  }, [selectedNote])

  const onInputTitle = (e) => setTitle(e.target.value)
  const [body, setBody] = useState('')
  const onInputBody = (e) => setBody(e.target.value)
  // console.log('title :', title, 'Body : ', body)

  useEffect(() => {
    if (selectedNote) return setBody(selectedNote.body)
    setBody('')
  }, [selectedNote])
  // const [isCreated, setIsCreated] = useState(false)
  // const [isUpdated, setIsUpdated] = useState(false)
  // const [isDeleted, setIsDeleted] = useState(false)
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsCreated(false)
  //   }, 3000)
  // }, [isCreated])
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsCreated(false)
  //   }, 3000)
  // }, [isUpdated])
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsCreated(false)
  //   }, 3000)
  // }, [isDeleted])
  const [status, setStatus] = useState('')
  useEffect(() => {
    setTimeout(() => {
      setStatus('')
    }, 3000)
  }, [status])
  const onSave = (e) => {
    e.preventDefault()
    setBody('')
    setTitle('')

    if (selectedNote) {
      N.updateNote(selectedNote.id, title, body)
      // console.log(N.getNotes())
      // setIsUpdated(true)
      setStatus('Note updated!')
      return refreshList()
    }
    N.createNote(title, body)
    // setIsCreated(true)
    setStatus('Note created!')

    refreshList()
  }
  const onDelete = (e) => {
    e.preventDefault()
    if (selectedNote) {
      N.deleteNote(selectedNote.id, title, body)
      setBody('')
      setTitle('')
      // setIsDeleted(true)
      setStatus('Note deleted!')

      // setSelectedNote(undefined) -- we moved this to refreehList
      refreshList()
    }
  }
  return (
    <div>
      <Form>
        <Form.Group controlId="title">
          {/* <Form.Label>Title</Form.Label> */}
          {/* <Form.Control type="title" placeholder="Title" onChange={onInputTitle} /> */}
          <Form.Control
            // type="title"
            placeholder="Title"
            // value={selectedNote ? selectedNote.title : title}
            //value={() => title}
            value={title}
            onChange={onInputTitle}
          />
        </Form.Group>

        <Form.Group controlId="yournote">
          {/* <Form.Control as="textarea" rows={3} placeholder="Your note" onChange={onInputBody} /> */}
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Your note"
            //value={selectedNote ? selectedNote.body : body}
            value={body}
            onChange={onInputBody}
          />
        </Form.Group>
      </Form>
      <Button
        variant="info"
        size="sm"
        className="saveBtn"
        //onClick={selectedNote ? selectedNote.title : ''}
        onClick={onSave}
      >
        Save
      </Button>
      {selectedNote && (
        <Button variant="danger" size="sm" className="delBtn" onClick={onDelete}>
          Delete
        </Button>
      )}
      {/* {isUpdated && <Alert variant="success">Note updated!</Alert>}
      {isCreated && <Alert variant="success">Note created!</Alert>}
      {isDeleted && <Alert variant="danger">Note deleted!</Alert>} */}
      {status && <Alert variant="warning">{status}</Alert>}
    </div>
  )
}
