// get the object with class "List_TD"
let todoList = document.querySelector('.List_TD');

// get the object with class "List_Completed"
let completedList = document.querySelector('.Completed');

// get all checkboxes from the <ol> with class "List_TD"
let checkboxes = document.querySelectorAll('.TD input[type="checkbox"]');

// link to restore button
let restore_button = document.querySelector('#Restore');

// link to delete button
let delete_button = document.querySelector('#Delete');

// Restore Button Functionality
restore_button.addEventListener('click', function() {
  for (var element of checkboxes){
    if (element.checked == true) {
      element.parentElement.remove();
      element.parentElement.style.textDecoration = 'None';
      todoList.appendChild(element.parentElement);
      // change class
      element.parentElement.classList.remove("Completed");
      element.parentElement.classList.add("TD");
      element.checked = false;
    }
  };
});

// Delete Button Functionality
delete_button.addEventListener('click', function() {
  for (var element of checkboxes){
      if (element.checked == true) {
        element.parentElement.remove();
      }
  };
});

//// this might be unnecessary when we get rid of the placeholder tasks
// add an event listeners to each checkbox
checkboxes.forEach((checkbox) => {
  // add an event listener
  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      // get the parent <li> element of the checkbox
      let taskItem = checkbox.parentElement;
      // strikethrough the text
      taskItem.style.textDecoration = 'line-through';
      if (checkbox.parentElement.classList.contains("TD")){
        // remove the <li> from the to-do list
        taskItem.remove();
        // add the <li> to the completed list
        completedList.appendChild(taskItem);
        // change class
        checkbox.parentElement.classList.remove("TD");
        checkbox.parentElement.classList.add("Completed");
        checkbox.checked = false;
      }
    }
  })
});



// get the text input element
let userTextInput = document.querySelector('.Submit_Task');
// add the event listener for user pressing the enter key
userTextInput.addEventListener('keypress', function(event) {
  // get the user input string
  let userEnteredText = userTextInput.value;
  // if the user pressed the 'Enter' key and the input is not empty
  if (event.keyCode === 13 && userEnteredText.trim() !== '') {
    event.preventDefault();
    // create new <li> element
    let new_li = document.createElement('li');
    // edit the innerHTML to include the text and checkbox
    new_li.innerHTML = `${userEnteredText} <input type="checkbox" name="${userEnteredText}">`;
    new_li.classList.add('TD');
    // add an event listener to the new checkbox
    let checkbox = new_li.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', function() {
      // if this checkbox is checked
      if (this.checked) {
        // get the parent <li> element of the checkbox
        let taskItem = this.parentElement;
        // strikethrough the text
        taskItem.style.textDecoration = 'line-through';
        // remove the <li> from the to-do list
        taskItem.remove();
        // add the <li> to the completed list
        completedList.appendChild(taskItem);
        //// does the old event listener need to be removed?
        //// need to add a new event listener to listen for when the checkbox is unchecked from the Completed List
        //// if the checkbox is unchecked
        //// remove the strikethrough
        //// remove from Completed List
        //// add to the to-do list
        //// add an event listener to wait for user to check the checkbox
      }
    });
    // append the new li as the last item in the to-do list
    todoList.appendChild(new_li);
    // clear the input
    userTextInput.value = '';
  }
});






//// loading the data
// let id_list_from_todolist = document.querySelector("grab all the ids from todolist")
// if (localStorage data exists) {
//   for (const key in id_list_from_todolist) {
//      let value = localStorage.getItem(key);
//      let new_li = document.createElement('li');
//      new_li.id = key;
//      new_li.classList.add('TD');
//      new_li.textContent = value;
//      todoList.appendChild(new_li);
//   }
//
//}
//   load the key, value pairs
// } else {
//   load the default page
// }


//// saving the data
// for (const key in id_list_from_todolist) {
//   let save_string = document.querySelector(key).textContent;
//   localStorage.setItem(key, save_string);

// }


