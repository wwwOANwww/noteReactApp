import React from 'react'
import {Button, Form} from 'react-bootstrap'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Editor() {
  return (
    <div>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          {/* <Form.Label>Title</Form.Label> */}
          <Form.Control type="title" placeholder="Title" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          {/* <Form.Label>Your note</Form.Label> */}
          <Form.Control as="textarea" rows={3} placeholder="Your note" />
        </Form.Group>
      </Form>
      <Button variant="outline-primary" size="sm">
        Save
      </Button>{' '}
      <Button variant="outline-danger" size="sm">
        Delete
      </Button>{' '}
    </div>
  )
}
