const notesContainer = document.querySelector('.notes-container'); // selects the notes container
const createBtn = document.querySelector('.btn'); // selects the btn class on the button
let notes = document.querySelectorAll('.input-box'); // selects all the notes and everything inside the box

createBtn.addEventListener('click',()=> { // when button is clicked it will run this function
    let inputBox = document.createElement('p'); // creates a p
    let img = document.createElement('img'); // creates an image
    inputBox.className = 'input-box'; // sets the class name 
    inputBox.setAttribute('contenteditable', 'true'); // sets the attrubute - similar to the html
    img.src = 'assets/images/delete.png'; // where to get the image
    notesContainer.appendChild(inputBox).appendChild(img); // display input box inside the notes container then add the image of the delete
})

notesContainer.addEventListener('click', function(e) { // e is event object
    if (e.target.tagName === 'IMG') { // e.target is the element that was clicked - IMG is the imgage which checked if the image was clicked
        e.target.parentElement.remove(); // if the image was clciked - remove the paragragh text(the parent)
    }
})