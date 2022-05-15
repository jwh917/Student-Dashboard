const notesUrl = "http://localhost:3000/notes"

fetch(notesUrl)
.then(response => response.json())
.then(data => console.log(data))


