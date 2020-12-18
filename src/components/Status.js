import React from 'react'
import {Alert} from 'react-bootstrap'

export default function status({status}) {
  return <div>{status && <Alert variant="warning">{status}</Alert>}</div>
}
