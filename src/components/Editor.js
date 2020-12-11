import React, {useState} from 'react'
import {Button, Form} from 'react-bootstrap'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as N from '../utils/NoteHelpers'

export default function Editor({selectdNote}) {
  console.log(selectdNote)
  const [title, setTitle] = useState('')
  const onInputTitle = (e) => setTitle(e.target.value)
  const [body, setBody] = useState('')
  const onInputBody = (e) => setBody(e.target.value)
  // console.log('title :', title, 'Body : ', body)
  const onSave = (e) => {
    e.preventDefault()
    console.log('save new note with title', title)
    N.createNote(title, body)
    console.log(N.getNotes())
  }

  return (
    <div>
      <Form>
        <Form.Group controlId="title">
          {/* <Form.Label>Title</Form.Label> */}
          {/* <Form.Control type="title" placeholder="Title" onChange={onInputTitle} /> */}
          <Form.Control type="title" placeholder="Title" onChange={onInputTitle} value="oan" />
        </Form.Group>

        <Form.Group controlId="yournote">
          {/* <Form.Label>Your note</Form.Label> */}
          <Form.Control as="textarea" rows={3} placeholder="Your note" onChange={onInputBody} />
        </Form.Group>
      </Form>
      <Button variant="info" size="sm" className="saveBtn" onClick={onSave}>
        Save
      </Button>{' '}
    </div>
  )
}
