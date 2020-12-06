import React from 'react'
import {Button} from 'react-bootstrap'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {getNote, notes} from '../utils/noteHelpers.js'
// console.log(notes)
export default function Note() {
  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li>{note}</li>
        ))}
      </ul>
    </div>
  )
}
