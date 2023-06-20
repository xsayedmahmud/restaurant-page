import "./style.css";
import logoSrc from "./asset/logo/logo.png";
import { loadAbout } from "./about";
import { loadMenu } from "./menu";
import { loadReservation } from "./reservation";
import { loadContact } from "./contact";

(function mainPage() {
  let newElm = (type) => document.createElement(type);

  let container = document.getElementById("container");
  container.style.maxWidth = "1200px";
  container.style.width = "100%";
  container.style.height = "100%";
  container.style.fontFamily = "loraregular";
  container.style.display = "grid";
  container.style.gridTemplateRows =
    "clamp(60px, 7vw, 100px) 1fr clamp(60px, 7vw, 100px) ";

  createHeader(container, newElm);
  createContent(container, newElm);
  createFooter(container, newElm);
})();

function createHeader(container, newElm) {
  let heading = newElm("header");
  container.appendChild(heading);
  heading.style.display = "flex";
  heading.style.padding = "clamp(5px, 2vw, 10px)";
  heading.style.alignItems = "center";
  heading.style.justifyContent = "space-between";

  let logo = newElm("img");
  logo.src = logoSrc;
  heading.appendChild(logo);
  logo.style.height = "100%";

  let navBar = newElm("nav");
  heading.appendChild(navBar);

  let ul = newElm("ul");
  navBar.appendChild(ul);
  ul.style.display = "flex";
  ul.style.listStyleType = "none";
  ul.style.gap = "clamp(20px, 3vw, 50px) ";

  let buttons = [
    { text: "About", action: loadAbout },
    { text: "Menu", action: loadMenu },
    { text: "Reservation", action: loadReservation },
    { text: "Contact", action: loadContact },
  ];

  buttons.forEach((buttonInfo) => {
    let li = newElm("li");

    let button = newElm("button");
    button.style.border = "none";
    button.style.borderBlockStart = "2px solid transparent";
    button.style.borderBlockEnd = "2px solid transparent";
    button.style.backgroundColor = "transparent";
    button.style.color = "#fff";
    button.style.fontSize = "clamp(1rem, 2vw, 1.3rem)";
    button.style.borderRadius = "5px";
    button.textContent = buttonInfo.text;
    li.appendChild(button);

    button.addEventListener("mouseover", () => {
      button.style.borderBlockEnd = "2px solid #D4AF37";
      button.style.cursor = "pointer";
    });

    button.addEventListener("mouseout", () => {
      button.style.borderBlockEnd = "2px solid transparent";
    });

    button.addEventListener("click", () => {
      const content = document.querySelector("#container > div");
      while (content.firstChild) {
        content.removeChild(content.firstChild);
      }
      content.appendChild(buttonInfo.action());
    });

    ul.appendChild(li);
  });
}

function createContent(container, newElm) {
  let wrapper = newElm("div");
  container.appendChild(wrapper);
  wrapper.style.width = "100%";
  wrapper.style.paddingTop = "100px";
  // wrapper.style.height = "100%";

  let content = newElm("div");
  wrapper.appendChild(content);
  content.style.height = "100%";
  content.style.width = "clamp(400px, 50%, 600px)";
  content.style.display = "flex";
  content.style.flexDirection = "column";
  content.style.gap = "clamp(20px, 3vw, 40px)";

  let heading = newElm("div");
  content.appendChild(heading);
  heading.style.display = "flex";
  heading.style.flexDirection = "column";
  // heading.style.alignItems = "center";
  heading.style.gap = "0.5rem";

  let line1 = newElm("span");
  heading.appendChild(line1);
  line1.textContent = "Savor the Flavor";
  line1.style.color = "#D4AF37";
  line1.style.fontFamily = "arvobold";
  line1.style.fontSize = "clamp(2rem, 5vw, 4rem)";
  line1.style.lineHeight = "1";

  let line2 = newElm("span");
  heading.appendChild(line2);
  line2.textContent = "at ";
  line2.style.color = "#D4AF37";
  line2.style.fontFamily = "arvobold";
  line2.style.fontSize = "clamp(2rem, 5vw, 4rem)";
  line2.style.lineHeight = "1";

  let thePrimeCut = newElm("span");
  line2.appendChild(thePrimeCut);
  thePrimeCut.textContent = "The Prime Cut";
  thePrimeCut.style.color = "red";

  let line3 = newElm("span");
  heading.appendChild(line3);
  line3.textContent = "Steakhouse";
  line3.style.color = "#D4AF37";
  line3.style.fontFamily = "arvobold";
  line3.style.fontSize = "clamp(2rem, 5vw, 4rem)";
  line3.style.lineHeight = "1";

  let para = newElm("p");
  content.appendChild(para);
  para.textContent =
    "Welcome to The Prime Cut Steakhouse, where the finest cuts of meat are grilled to perfection and served in an elegant, warm atmosphere. Our passion for quality and flavor is evident in every succulent bite. Join us for an unforgettable culinary experience.";
  para.style.color = "#F0EAE1";
  para.style.fontSize = "clamp(1rem, 1.5vw, 1.2rem)";

  let c2aBtn = newElm("div");
  content.appendChild(c2aBtn);
  c2aBtn.style.display = "flex";
  c2aBtn.style.gap = "clamp(16px, 2vw, 2rem)";

  let orderNow = newElm("button");
  c2aBtn.appendChild(orderNow);
  orderNow.textContent = "Order Now";
  orderNow.style.border = "none";
  orderNow.style.width = "clamp(110px, 13vw, 150px)";
  orderNow.style.padding = "clamp(3px, .3em, 6px) clamp(5px, .4em, 10px)";
  orderNow.style.backgroundColor = "#A4243B";
  orderNow.style.color = "#fff";
  orderNow.style.fontSize = "clamp(1rem, 2vw, 1.3rem)";
  orderNow.style.borderRadius = "50px";
  orderNow.style.cursor = "pointer";

  let bookTable = newElm("button");
  c2aBtn.appendChild(bookTable);
  bookTable.textContent = "Book a Table";
  bookTable.textContent = "Book Table";
  bookTable.style.border = "none";
  bookTable.style.width = "clamp(110px, 13vw, 150px)";
  bookTable.style.padding = "clamp(3px, .3em, 6px) clamp(5px, .4em, 10px)";
  bookTable.style.backgroundColor = "#ffffff30";
  bookTable.style.color = "#fff";
  bookTable.style.fontSize = "clamp(1rem, 2vw, 1.3rem)";
  bookTable.style.borderRadius = "50px";
  bookTable.style.cursor = "pointer";
}

function createFooter(container, newElm) {
  let footer = newElm("footer");
  container.appendChild(footer);
  footer.style.backgroundColor = "white";
}
