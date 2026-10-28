import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  // ye function component hai component ke andar humne state banayi hai jisme hum note ko store karenge

  const [notes, setnotes] = useState([]); // ye state hai jisme humne note ko store karenge

  function fetchData() {
    // ye function hai jisme hum axios ka use karke api se data fetch karenge
    axios
      .get("http://localhost:3000/api/notes")
      .then((res) => setnotes(res.data.notes)); // ye line hai jisme humne response se data ko set kiya hai
  }

  // ye useEffect hook hai jisme humne fetchData function ko call kiya hai taki component render hone ke baad data fetch ho jaye

  ueseEffct(() => {
    fetchData();
  }, []);

  function handleSubmit(e) {
    // ye function hai jisme humne form submit hone par data ko post kiya hai
    e.preventDefault(); // ye  line hai jisme humne form submit hone par page reload hone se roka hai

    const { title, description } = e.target.elements; // ye line hai jisme humne form ke input fields se data ko get kiya hai

    console.log(title.value, description.value); // ye line hai jisme humne form ke input fields ke values ko console me print kiya hai

    axios
      .post("http://localhost:3000/api/notes", {
        // ye line hai jisme humne axios ka use karke api me data post kiya hai
        title: title.value,
        description: description.value,
      })
      .then((res) => {
        console.log(res.data); // ye line hai jisme humne response ko console me print kiya hai
        fetchData(); // ye line hai jisme humne data ko fetch kiya hai taki naya note show ho jaye user ko
      });
  }
  function deleteNote(id) {
    axios.delete("http://localhost:3000/api/notes/" + id).then((res) => {
      fetchData();
    });
  }
  return (
    <>
      <form className="note-create-form" onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder="Enter title" />

        <input name="description" type="text" placeholder="Enter description" />

        <button type="submit">Create note</button>
      </form>

      <div className="notes">
        {notes.map((note, index) => {
          return (
            <div className="note" key={note._id || index}>
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button onClick={() => deleteNote(note._id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
