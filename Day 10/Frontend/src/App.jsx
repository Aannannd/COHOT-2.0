import { useState } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const [note, setnotes] = useState([
    axios.get ('http://localhost:3000/notes/api/notes')
    .then(res => setnotes(res.data))
  ])

 return (
    <>
    <div className="notes">
      {note.map((note)  => {
                return <div className="note">
                <h1>{note.title}</h1>
               <p>{note.content}</p>
              </div>
      })
      }
    </div>
    </>
  )
}

export default App
