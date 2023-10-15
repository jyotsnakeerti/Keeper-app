import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Note from "./components/note";
import CreateArea from "./components/createArea";


function App() {

    const [notes, setNotes] = React.useState([]);

    function addNote(newNote){
        setNotes( prevNotes =>{
           return [...prevNotes, newNote];
        })
        
    }

    function deleteNote(id){
        setNotes( prevNotes =>{
            return prevNotes.filter ( (noteItem, index) => {
                return index !== id;
            })
        })
    }

    return (
      <div>
        <Header />
        <CreateArea
        onAdd={addNote}
        />
        {notes.map((noteItem, index) => {
            return <Note 
            key ={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote} />
        })} 
        {/* <Note 
        key={1} 
        title="Note title" 
        content="Note content" /> */}
        <Footer />
      </div>
    );
  }

export default App;