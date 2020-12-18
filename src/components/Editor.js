import React, {useState, useEffect} from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Status from './Status'
import ControlPanel from './ControlPanel'

export default function Editor({selectedNote, setSelectedNote, refreshList}) {
  const [status, setStatus] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setStatus('')
    }, 3000)
  }, [status])

  return (
    <div>
      <ControlPanel setStatus={setStatus} selectedNote={selectedNote} refreshList={refreshList} />
      <Status status={status} />
    </div>
  )
}
