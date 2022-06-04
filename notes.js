// notes js
const notesUrl = "http://localhost:3000/notes"
const notesList = document.getElementById("notes-list")

function fetchNotes(){
  fetch(notesUrl)
  .then(response => response.json())
  .then(data => {
    notesList.innerHTML = ""
    renderNotes(data)
  })
}

function createOneNote(data){
  const noteLi = document.createElement("li")
  noteLi.className = "liNotes"
  noteLi.innerHTML = 
  `<h2>${data.note}</h2>
  <h3>${data.noteDate}</h3>` 

  let deleteButton = document.createElement("button")
  deleteButton.className = "deleteBtn"
  deleteButton.innerHTML = "Delete"

  noteLi.appendChild(deleteButton)
  notesList.appendChild(noteLi)

  deleteButton.addEventListener("click", () => {
    deleteButtonFunc(data.id, noteLi)
  })
}

function renderNotes(noteData){
  noteData.forEach(element => {
    createOneNote(element)
  });
}

const newNote = document.getElementById("new-note")

function formSubmitButtonFunc(){
  const newNoteForm = document.getElementById("new-note-form")
  newNoteForm.addEventListener("submit", function(event){
    event.preventDefault()

    let newNoteDate = new Date()

    fetch(notesUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"},
        body: JSON.stringify({
          
          "noteDate": newNoteDate.toDateString(),
          "note": newNote.value

        }),
      })
      .then(response => response.json())
      .then(data => createOneNote(data))
      newNoteForm.reset()
  })
}

function deleteButtonFunc(noteId, noteLi){
  noteLi.remove()

  fetch(`http://localhost:3000/notes/${noteId}/?_embed=likes`,{
    method:'DELETE'
    })
    .then(response => response.json())
    .then(data => console.log(data)) 
}

document.addEventListener("DOMContentLoaded", function() {
  fetchNotes()
})
