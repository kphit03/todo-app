let addToDoButton = document.getElementById('addTodo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
// event listener for clicking the add todo button
addToDoButton.addEventListener('click', function(){
    // on clicking the button, it creates a new paragraph, and sets 
    // it's innertext to what was in the input field
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value="";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph)
    })
})