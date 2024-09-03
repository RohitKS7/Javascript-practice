const menuClicked = (currentElement) => {
  const menuItems = document.getElementsByClassName("menu_item");

  for (let i = 0; i < menuItems.length; i++) {
    // remove active classes from elements
    menuItems[i].classList.remove("active");
  }

  // add active class on the clicked item
  currentElement.classList.add("active");
};
