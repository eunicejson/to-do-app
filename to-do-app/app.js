function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
   const newToDoText = document.getElementById('newToDoText');
   const toDoList = document.getElementById('toDoList');


  addToDoForm.addEventListener('submit', event => {
  event.preventDefault();

  let title = newToDoText.value;

  let newLi = document.createElement('li');

  // create a new input
  let checkbox = document.createElement('input');

  // set the input's type to checkbox
  checkbox.type = "checkbox";

  // set the title
   newLi.textContent = title;

   // attach the checkbox to the li
   newLi.appendChild(checkbox);

   // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

});
 }

window.onload = function() {

   onReady();
};


function Delete() {
  // get all of the checkboxes that are checked
  // find the nearest parent <li> getElementById
  // remove that element from the DOM
  const elements = toDoList.querySelectorAll('li');
  elements.forEach(element => {
    const input = element.querySelectorAll('input');
    if (input && input[0].checked) {
      element.remove();
    }
  });
}
