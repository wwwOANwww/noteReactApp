import React from 'react'
import {Form} from 'react-bootstrap'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Search() {
  return (
    <div className="searchTab">
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Search by tag</Form.Label>
          <Form.Control as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  )
}
