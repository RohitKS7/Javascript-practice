// Elements Properties and Methods

const el = document.querySelector("#Heading");

console.log(el);

// Properties for this element ->
console.log(el.classList);
console.log(el.className);
console.log(el.id);
console.log(el.innerHTML);

// Most popular methods
const button = document.querySelector("button");
console.log(button);

// 1. addEventListener()
button.addEventListener("click", () => {
  alert("you clicked on the button");
});

// 2. getBoundingClientRect()
const elementInfo = button.getBoundingClientRect();

console.log(elementInfo); /* DOMReact {
    bottom : 129.875
    height: 21
    left: 8
    right: 61.0625
    top: 108.875
    width: 53.0625
    x: 8
    y: 108.875
} */

// 3. hadAttribute()
const attributeCheck = button.hasAttribute("type");

console.log(attributeCheck);

// 4. removeAttribute()
button.removeAttribute("type");

const isAttributeRemoved = button.hasAttribute("type");
console.log(isAttributeRemoved); // attribute is removed that's why we getting 'False' as result.
