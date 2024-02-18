var popupoverlay = document.querySelector(".popup_overlay");
var popupbox = document.querySelector(".popup_box");
var addpopupbutton = document.getElementById("add_popup");

addpopupbutton.addEventListener("click", function () {
  popupoverlay.style.display = "block";
  popupbox.style.display = "block";
});
var cancelbutton=document.getElementById("cancel");
cancelbutton.addEventListener("click", function(event){
  event.preventDefault();
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
})

var container=document.querySelector(".container")
var addbook=document.getElementById("add")
var booktitle=document.getElementById("book_title_input")
var bookauthor=document.getElementById("book_author_input")
var bookdescription=document.getElementById("book_description_input")

addbook.addEventListener("click", function(event){
  event.preventDefault()
  var div=document.createElement("div")
  div.setAttribute("class","book_container")
  div.innerHTML=`<h1>${booktitle.value}</h1>
  <h2>${bookauthor.value}</h2>
  <p>${bookdescription.value}</p>
  <button onclick="deletebook(event)">Delete</button>`
  container.append(div)
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
})
function deletebook(event){
  event.target.parentElement.remove();
}