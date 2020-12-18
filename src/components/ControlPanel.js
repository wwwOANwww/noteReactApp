import React, {useState, useEffect} from 'react'
import {Button, Form} from 'react-bootstrap'
import * as N from '../utils/NoteHelpers'

export default function ControlPanel({selectedNote, setStatus, refreshList}) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const onInputTitle = (e) => setTitle(e.target.value)
  const onInputBody = (e) => setBody(e.target.value)

  useEffect(() => {
    if (selectedNote) return setTitle(selectedNote.title)
    setTitle('')
  }, [selectedNote])

  useEffect(() => {
    if (selectedNote) return setBody(selectedNote.body)

    setBody('')
  }, [selectedNote])
  const onSave = (e) => {
    e.preventDefault()
    setBody('')
    setTitle('')
    if (selectedNote) {
      N.updateNote(selectedNote.id, title, body)
      setStatus('Note updated!')
      return refreshList()
    }
    N.createNote(title, body)
    setStatus('Note created!')
    refreshList()
  }

  const onDelete = (e) => {
    e.preventDefault()
    if (selectedNote) {
      N.deleteNote(selectedNote.id, title, body)
      setBody('')
      setTitle('')
      setStatus('Note deleted!')
      refreshList()
    }
  }

  return (
    <div>
      <Form>
        <Form.Group controlId="title">
          <Form.Control placeholder="Title" value={title} onChange={onInputTitle} />
        </Form.Group>

        <Form.Group controlId="yournote">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Your note"
            value={body}
            onChange={onInputBody}
          />
        </Form.Group>
      </Form>
      <Button variant="info" size="sm" className="saveBtn" onClick={onSave}>
        Save
      </Button>
      {selectedNote && (
        <Button variant="danger" size="sm" className="delBtn" onClick={onDelete}>
          Delete
        </Button>
      )}
    </div>
  )
}
