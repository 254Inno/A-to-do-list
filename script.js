"use strict";

//Selecting elements
const input = document.querySelector(".main__add-item--input");
const addItem = document.querySelector(".main__add-item--icon");
const listNotDone = document.querySelector(".list__not-done");
const deleteIcon = document.querySelector(".not-done__icon");
const listDone = document.querySelector(".list__done");

//Adding item to the list
addItem.addEventListener("click", function () {
  //Read input value
  const item = input.value;
  if (item) {
    //Add to the ui
    const listItemNotDone = `<li class="main__list--item not-done">
 <svg class="main__list--icon not-done__icon-2">
   <use xlink:href="sprite.svg#list"></use>
 </svg>
 <svg class="main__list--icon not-done__icon">
   <use xlink:href="sprite.svg#xmark" class="delete"></use>
 </svg>
 <span class="main__list--text">${item}</span>
 </li>`;

    listNotDone.insertAdjacentHTML("afterbegin", listItemNotDone);
  }

  //Clear input field

  input.value = "";
});

//deleting an item from the list and add to done-list
listNotDone.addEventListener("click", function (e) {
  const doneList = e.target.closest(".not-done");

  if (
    e.target.classList.contains("delete") ||
    e.target.classList.contains("not-done__icon")
  ) {
    //Add to done list
    const listItemDone = `<li class="main__list--item done" id="3">
    <svg class="main__list--icon done__icon-2">
      <use xlink:href="sprite.svg#trash"></use>
    </svg>
    <svg class="main__list--icon done__icon">
      <use xlink:href="sprite.svg#check" class="restore"></use>
    </svg>
    <span class="main__list--text">${
      e.target.closest(".not-done").lastElementChild.textContent
    }</span>
  </li>`;

    //Delete the item
    doneList?.remove();

    //insert item to UI
    listDone.insertAdjacentHTML("afterbegin", listItemDone);
  }
});

listDone.addEventListener("click", function (e) {
  const notDoneList = e.target.closest(".done");

  if (
    e.target.classList.contains("restore") ||
    e.target.classList.contains("done__icon")
  ) {
    //Add to done list
    const listItemNotDone = `<li class="main__list--item not-done">
    <svg class="main__list--icon not-done__icon-2">
      <use xlink:href="sprite.svg#list"></use>
    </svg>
    <svg class="main__list--icon not-done__icon">
      <use xlink:href="sprite.svg#xmark" class="delete"></use>
    </svg>
    <span class="main__list--text">${
      e.target.closest(".done").lastElementChild.textContent
    }</span>
    </li>`;

    //Delete the item
    notDoneList?.remove();

    //insert item to UI
    listNotDone.insertAdjacentHTML("afterbegin", listItemNotDone);
  }
});
