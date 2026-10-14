import { useState } from 'react'
import axios from "axios"


function App() {
  axios.get("http://localhost:3000/api/notes")
  .then((res) => {
    console.log(res.data)
 
  })

  const[note, setNote] = useState([
    {
    title: "test title 1",
    content: "test content 1 "
  },
     {
    title: "test title 2",
    content: "test content 2 "
  },
     {
      title: "test title 3",
      content: "test content 3 "
  },
     {
    title: "test title 4",
    content: "test content 4 "
  }
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
