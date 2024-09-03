// ADDING an element from script.
const heading = document.createElement("h1");

const body = document.querySelector("body");

// append or add the heading variable/h1-element in body.
body.appendChild(heading);

// Content of Heading
heading.innerText = "JavaScript Document Nodes";

// REMOVING an element
heading.remove();

// Getting Subjects List
const subjects = document.querySelector(".subjects");
console.log(subjects);

// Getting First Child Element from subjects list
const firstElement = subjects.firstElementChild;
console.log(firstElement);

// Getting Last Child Element from subjects list
const lastElement = subjects.lastElementChild;
console.log(lastElement);

// Getting Element of specific CLASS from subjects list
const favSubject = document.querySelector(".fav-subject");
console.log(favSubject);

// Getting Previous Sibling of certain element
const previousElement = favSubject.previousElementSibling;
console.log(previousElement);

// Getting Parent element of an element
const parentElement = favSubject.parentElement;
console.log(parentElement);
