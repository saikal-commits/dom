// const text = document.getElementById("text");
// const button = document.getElementsByClassName("btn");
// const button = document.querySelector(".btn");
// const sub = document.getElementsByTagName("p");
// const input = document.getElementsByName("input");

// text.style.color = "red";
// text.style.textAlign = "center";
// text.style.fontSize = "30px";
// text.style.fontFamily = "sans-serif";

// sub[0].style.color = "green";
// sub[1].style.color = "blue";
// sub[2].style.color = "green";
// sub[3].style.color = "blue";
// sub[4].style.color = "green";

// console.log(text);
// console.log(button);
// console.log(sub);
// console.log(input);

//DOM
//BOM

//document

//? старые
//! getElementById('')
//! getElementsByName('')
//! getElementsByTagName('')
//! getElementsByClassName('')

//? новые
//! querySelector('')
//! querySelectorAll('')

//! innerText добавить текст
//! createElement('') -- создает новый тег

// const text1 = document.querySelector("#text");
// const btn = document.querySelector(".btn");
// const sum = document.querySelector("p");
// const password1 = document.querySelector(".password1");
// const password2 = document.querySelector(".password2");
// password1.style.width = "100px";
// password1.style.heith = "30px";
// password1.style.background = "blue";
// password1.style.display = "flex";
// password1.style.justifyContent = "center";
// password1.style.alignItems = "center";
// password1.style.margin = "0 0 0 37pc";
// password1.style.padding = "8px 20px";
// password1.style.color = "white";
// password1.style.border = "none";
// password1.style.outline = "none";

// password2.style.background = "blue";
// password2.style.width = "100px";
// password2.style.heith = "30px";
// password2.style.display = "flex";
// password2.style.justifyContent = "center";
// password2.style.alignItems = "center";
// password2.style.margin = "0 0 0 37pc";
// password2.style.padding = "8px 20px";
// password2.style.color = "white";
// password2.style.border = "none";
// password2.style.outline = "none";

// const p = document.querySelectorAll("p");

// p.forEach((el, idx) => {
  // el.style.color = "green";
//   el.style.textAlign = "center";
//   el.style.fontSize = "20px";
//   console.log(idx);

//   if (idx % 2 == 0) {
//     el.style.color = "red";
//   } else {
//     el.style.color = "green";
//   }
// });

// console.log(text1);
// console.log(btn);
// console.log(sum);
// console.log(password);
// console.log(p);

//! createElement('') -- создает новый тег
// console.log(document.createElement("button"));

//! innerText добавить текст
// const h1 = document.createElement("h1");
// const body = document.querySelector("body");
// console.log(h1);
// h1.innerText = "Welcome to Javascript";
// h1.style.color = "blue";
// h1.style.textAlign = "center";
// h1.style.marginTop = "100px";

// body.append(h1);

//! append() тегдин ичине тегти киргизип коет

// let btn1 = document.querySelector(".btn1");
// let btn2 = document.querySelector(".btn2");
// let btn3 = document.querySelector(".btn3");
// btn1.style.transform = "translateX(200px)";
// btn2.style.transform = "translateX(200px)";
// btn3.style.transform = "translateX(200px)";
// btn1.style.transition = "1s";
// btn2.style.transition = "1s";
// btn3.style.transition = "1s";
// btn1.style.padding = "10px 20px";
// btn2.style.padding = "10px 20px";
// btn3.style.padding = "10px 20px";
