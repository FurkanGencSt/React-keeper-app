import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import note from "../notes.js";

function App() {
  return (
    <div>
      <Header />
      {note.map(noteItem => (
      <Note 
      title= {noteItem.tite}
      content= {noteItem.content}/>
      ))
      
      }

      <Footer />
    </div>
  );
}

export default App;
