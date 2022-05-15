const notesUrl = "http://localhost:3000/notes"
const notesList = document.getElementById("notes-list")

function fetchNotes(){
  fetch(notesUrl)
  .then(response => response.json())
  .then(data => {
    
  console.log(data)
  // console.log(data[0])
  // console.log(data[1])
  // console.log(data[0].noteDate)
  // console.log(data[0].note)
  // console.log(data[0].noteId)
  // console.log(data[1].noteDate)
  // console.log(data[1].note)
  // console.log(data[1].noteId)

  renderNotes(data)

  })


}


function renderNotes(noteData){
  // console.log(noteData)
  noteData.forEach(element => {
    console.log(element)
    console.log(element.note)
    console.log(element.noteDate)
    console.log(element.noteId)

    let noteLi = document.createElement("li")
    noteLi.className = "liNotes"
    // noteLi.id = `note-${element.noteId}`

    noteLi.innerHTML = 
    `<h2>${element.note}</h2>
    <h3>${element.noteDate}</h3>` 

    let deleteButton = document.createElement("button")
    deleteButton.className = "deleteBtn"
    deleteButton.innerHTML = "Delete"

    noteLi.appendChild(deleteButton)
    notesList.appendChild(noteLi)

    
  });
  

}


document.addEventListener("DOMContentLoaded", function() {
  
  fetchNotes()

})


