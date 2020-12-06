import React from 'react'
import {Button} from 'react-bootstrap'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {getNote, notes} from '../utils/noteHelpers.js'
// console.log(notes)
export default function Note() {
  return (
    <div className="allNote">
      <ul>
        {notes.map((note) => (
          <li className="flex-container ">
            {note}
            <Button variant="outline-info" size="sm" className="btnEditor">
              Edit
            </Button>
            <Button variant="outline-danger" size="sm" className="btnEditor">
              delete
            </Button>{' '}
          </li>
        ))}
      </ul>
    </div>
  )
}
