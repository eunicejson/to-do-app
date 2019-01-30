function onReady(){
  //properties || elements
  let id = 0;
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if(!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: this.id
    });

    id++;
    newToDoText.value = '';

    renderTheUI();
  }

  function renderTheUI(){
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
     const newLi = document.createElement('li');
     const checkbox = document.createElement('input');
     checkbox.type = "checkbox";

     newLi.textContent = toDo.title;
     toDoList.appendChild(newLi);
     newLi.appendChild(checkbox);
    });
  }

  addToDoForm.addEventListener('submit', event => {
   event.preventDefault();
   createNewToDo();
 });

  renderTheUI();
}

window.onload = function() {

  onReady();
};


function Delete() {
const elements = toDoList.querySelectorAll('li');
elements.forEach(element => {
const input = element.querySelectorAll('input');
if (input && input[0].checked) {
element.remove();
 }
});
 }
