// Add Items in a list
let addBtn = document.getElementById("add_btn");
addBtn.addEventListener("click", addItem);
let parentList = document.getElementById("parentList");
// default paramater pass e
function addItem(e) {
  // console.log('button clicked!')
  // step 1 : Grap the input value
  if (parentList.children[0].className == "emptyMsg") {
    parentList.children[0].remove();
  }
  let currentBtn = e.currentTarget;
  let currentInput = currentBtn.previousElementSibling;
  let currentItem = currentInput.value;
  // console.log(currentInput.value) //input is printed in console
  // step 2 : create element for new list item
  let newLi = document.createElement("li");
  //   newLi.classList.add("list-group-item");
  //   newLi.textContent = currentInput.value;
  newLi.className = "list-group-item d-flex justify-content-between";
  newLi.innerHTML = `<h3 class="flex-grow-1">${currentItem}</h3>
  <button class="btn btn-warning mx-3" onclick="editItem(this)">Edit</button>
  <button class="btn btn-danger"onclick="removeItem(this)">Remove</button>`;
  // values passed successfully
  // console.log(newLi.textContent)

  // **How to insert into DOM Select particular element
  // select ul u grap the then its child li

  //   let parentList = document.getElementById("parentList"); // here we grap the parent list
  // then append child
  parentList.appendChild(newLi);
}

// Remove element from list

function removeItem(currElement) {
  // console.log(currElement.parentElement)
  currElement.parentElement.remove();
  //   logic for the list is empty or not if empty then display msg....
  let parentList = document.getElementById("parentList");
  if (parentList.children.length <= 0) {
    let newEmptyMsg = document.createElement("h3");
    newEmptyMsg.classList.add("emptyMsg");
    // newEmptyMsg.classList.add("d-flex justify-content-center")
    // newEmpyMsg.className = "d-flex justify-content-center"
    newEmptyMsg.textContent = "Nothing is here. Please Add your todo list...";
    parentList.appendChild(newEmptyMsg);
  }
}

// Add Functionality to EDIT button
// currelement is passed here
function editItem(currElement) {
  if (currElement.textContent == "Done") {
    currElement.textContent = "Edit";
    let currentItem = currElement.previousElementSibling.value;
    let currHeading = document.createElement("h3");
    currHeading.className = "flex-grow-1";
    currHeading.textContent = currentItem;
    currElement.parentElement.replaceChild(
      currHeading,
      currElement.previousElementSibling
    );
  } else {
    
      currElement.textContent = "Done";
      //  console.log(currElement.previousElementSibling)
      let currentItem = currElement.previousElementSibling.textContent;
      let currInput = document.createElement("input");
      currInput.type = "text";
      currInput.placeholder = "Add Item";
      currInput.className = "form-control";
      currInput.value = currentItem;
      //  currInput add into dom
      // replace dom element
      currElement.parentElement.replaceChild(
        currInput,
        currElement.previousElementSibling
      );
    }
  }

  // currElement.textContent = "Done"
  // //  console.log(currElement.previousElementSibling)
  //  let currentItem = currElement.previousElementSibling.textContent
  //  let currInput = document.createElement('input')
  //  currInput.type = 'text'
  //  currInput.placeholder = 'Add Item'
  //  currInput.className = 'form-control'
  //  currInput.value = currentItem
  // //  currInput add into dom
  // // replace dom element
  // currElement.parentElement.replaceChild(currInput,currElement.previousElementSibling)

