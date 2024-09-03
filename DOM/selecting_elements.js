// Selecting Elements

//⁡⁣⁢⁣ 𝗕𝘆 𝗜𝗗⁡

let byID = document.getElementById("id-of-test");

console.log(byID);

let byId = document.querySelector("#id-of-test");

console.log(byId);

// ⁡⁣⁢⁣𝗕𝘆 𝗖𝗹𝗮𝘀𝘀⁡

let byCLASS = document.getElementsByClassName("class-of-test");

console.log(byCLASS);

let byClass = document.querySelector(".class-of-test");

console.log(byClass);

//⁡⁣⁢⁣ 𝗕𝘆 𝗧𝗮𝗴⁡

let byTAG = document.getElementsByTagName("h1");

console.log(byTAG);

// ⁡⁣⁣⁢All 'H1' elements with class of test⁡
let byTag = document.querySelectorAll("h2.test");

console.log(byTag);
