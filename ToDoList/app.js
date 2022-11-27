let AddToDoButton = document.getElementById("AddToDo");
let ToDoContainer = document.getElementById("ToDo_s");
let inputField = document.getElementById("inputField");

AddToDoButton.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  str = "•  " + inputField.value;
  paragraph.innerText = str;
  ToDoContainer.appendChild(paragraph);
  inputField.value = "";
  paragraph.addEventListener("click", function () {
    if (paragraph.style.textDecoration == "line-through") {
      paragraph.style.textDecoration = "none";
    } else {
      paragraph.style.textDecoration = "line-through";
    }
  });
  paragraph.addEventListener("dblclick", function () {
    paragraph.style.display = "none";
  });
});
