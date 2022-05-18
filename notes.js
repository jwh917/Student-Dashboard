const notesUrl = "http://localhost:3000/notes"
const notesList = document.getElementById("notes-list")

function fetchNotes(){
  fetch(notesUrl)
  .then(response => response.json())
  .then(data => {
    
  // console.log(data)
  // console.log(data[0])
  // console.log(data[1])
  // console.log(data[0].noteDate)
  // console.log(data[0].note)
  // console.log(data[0].noteId)
  // console.log(data[1].noteDate)
  // console.log(data[1].note)
  // console.log(data[1].noteId)
  notesList.innerHTML = ""
  renderNotes(data)

  })

}

// make render one note

function createOneNote(data){

  let noteLi = document.createElement("li")
  noteLi.className = "liNotes"
  // noteLi.id = `note-${element.noteId}`

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
  // console.log(noteData)
  noteData.forEach(element => {
    // console.log(element)
    // console.log(element.id)
    // console.log(element.note)
    // console.log(element.noteDate)

    // let noteLi = document.createElement("li")
    // noteLi.className = "liNotes"
    // // noteLi.id = `note-${element.noteId}`

    // noteLi.innerHTML = 
    // `<h2>${element.note}</h2>
    // <h3>${element.noteDate}</h3>` 

    // let deleteButton = document.createElement("button")
    // deleteButton.className = "deleteBtn"
    // deleteButton.innerHTML = "Delete"

    // noteLi.appendChild(deleteButton)
    // notesList.appendChild(noteLi)

    // deleteButton.addEventListener("click", () => {

    //   deleteButtonFunc(element.id, noteLi)

    // })

    createOneNote(element)

  });
  

}


const newNote = document.getElementById("new-note")

function formSubmitButtonFunc(){
  const newNoteForm = document.getElementById("new-note-form")
  

  newNoteForm.addEventListener("submit", function(event){
    event.preventDefault()
    // console.log(event)
    // console.log(newNoteForm.value)
    let newNoteDate = new Date()
    // console.log(newNoteDate.toDateString())

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
      .then(data => {
  
        // console.log('Success:', data)

        // let noteLi = document.createElement("li")
        // noteLi.className = "liNotes"
        // // noteLi.id = `note-${element.noteId}`
    
        // noteLi.innerHTML = 
        // `<h2>${data.note}</h2>
        // <h3>${data.noteDate}</h3>` 
    
        // let deleteButton = document.createElement("button")
        // deleteButton.className = "deleteBtn"
        // deleteButton.innerHTML = "Delete"
    
        // noteLi.appendChild(deleteButton)
        // notesList.appendChild(noteLi)
    
        // deleteButton.addEventListener("click", () => {
    
        //   deleteButtonFunc(data.id, noteLi)
    
        // })

        createOneNote(data)
      
      })

      // fetchNotes()
      newNoteForm.reset()

  })

}


function deleteButtonFunc(noteId, noteLi){
  
  console.log(noteId, noteLi)

  noteLi.remove()

  fetch(`http://localhost:3000/notes/${noteId}/?_embed=likes`,{
    method:'DELETE'
    })
    .then(response => response.json())
    .then(data => {
     
    console.log(data)

    })   
    
}


document.addEventListener("DOMContentLoaded", function() {
  
  fetchNotes()
  formSubmitButtonFunc()

})


