import "./style.css";
import logoSrc from "./asset/logo/logo.png";
import { loadAbout } from "./about";
import { loadMenu } from "./menu";
import { loadReservation } from "./reservation";
import { loadContact } from "./contact";
import fbSrc from "./asset/icons/facebook.svg";
import igSrc from "./asset/icons/instagram.svg";
import twitterSrc from "./asset/icons/twitter.svg";
import tiktokSrc from "./asset/icons/tiktok.svg";
import vibe from "./asset/img/vibe.jpg";

(function mainPage() {
  let newElm = (type) => document.createElement(type);

  let container = document.getElementById("container");

  container.style.height = "100vh";
  container.style.fontFamily = "loraregular";
  // container.style.display = "grid";
  // container.style.gridTemplateRows =
  //   "clamp(60px, 7vw, 100px) 1fr clamp(60px, 7vw, 100px) ";
  container.style.display = "flex";
  container.style.flexDirection = "column";

  createHeader(container, newElm);
  createContent(container, newElm);
  createFooter(container, newElm);
})();

function createHeader(container, newElm) {
  let headingWrapper = newElm("div");
  container.appendChild(headingWrapper);
  headingWrapper.style.backgroundColor = "#000";
  headingWrapper.style.width = "100%";
  headingWrapper.style.display = "flex";
  headingWrapper.style.justifyContent = "center";
  headingWrapper.style.padding = "0 clamp(20px, 5vw, 140px)";
  headingWrapper.style.height = "clamp(60px, 7vw, 100px)";
  headingWrapper.style.position = "fixed";
  headingWrapper.style.top = 0;
  headingWrapper.style.left = 0;
  headingWrapper.style.zIndex = 10;

  let heading = newElm("header");
  headingWrapper.appendChild(heading);
  heading.style.display = "flex";
  heading.style.padding = "clamp(5px, 2vw, 10px)";
  heading.style.alignItems = "center";
  heading.style.justifyContent = "space-between";
  heading.style.width = "100%";
  heading.style.height = "100%";
  heading.style.maxWidth = "1200px";

  let logo = newElm("img");
  logo.src = logoSrc;
  heading.appendChild(logo);
  logo.style.height = "100%";
  logo.style.cursor = "pointer";

  logo.addEventListener("click", () => {
    const content = document.querySelector("#container > .wrapper");
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
    content.appendChild(createContent(container, newElm));
  });

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
    button.style.borderInlineStart = "2px solid transparent";
    button.style.backgroundColor = "transparent";
    button.style.color = "#fff";
    button.style.fontSize = "clamp(1rem, 2vw, 1.3rem)";
    button.style.borderRadius = "5px";
    button.textContent = buttonInfo.text;
    li.appendChild(button);

    button.addEventListener("mouseover", () => {
      button.style.borderInlineStart = "2px solid var(--gold-color)";
      button.style.cursor = "pointer";
      // button.style.boxShadow = "var(--shadow-elevation-low)";
    });

    button.addEventListener("mouseout", () => {
      button.style.borderInlineStart = "2px solid transparent";
      // button.style.boxShadow = "none";
    });

    button.addEventListener("click", () => {
      const content = document.querySelector("#container > .wrapper");
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
  // wrapper.style.paddingTop = "100px";
  wrapper.style.width = "100%";
  wrapper.style.display = "flex";
  wrapper.style.justifyContent = "center";
  wrapper.style.padding = "clamp(60px, 7vw, 100px) clamp(40px, 5vw, 140px)";
  wrapper.classList.add("wrapper");

  let heroWrapper = newElm("div");
  wrapper.appendChild(heroWrapper);
  heroWrapper.style.width = "100%";
  heroWrapper.style.maxWidth = "1200px";
  heroWrapper.style.display = "flex";
  heroWrapper.style.gap = "clamp(50px, 5vw, 100px)";
  heroWrapper.classList.add("heroWrapper");
  heroWrapper.style.marginTop = "clamp(30px, 5vw, 100px)";

  let content = newElm("div");
  heroWrapper.appendChild(content);
  content.style.display = "flex";
  content.style.flexDirection = "column";
  content.classList.add("content");
  content.style.gap = "clamp(20px, 3vw, 40px)";

  let heading = newElm("div");
  content.appendChild(heading);
  heading.style.display = "flex";
  heading.style.flexDirection = "column";
  heading.style.gap = "0.5rem";

  let line1 = newElm("span");
  heading.appendChild(line1);
  line1.textContent = "Savor the Flavor";
  line1.style.color = "var(--gold-color)";
  line1.style.fontFamily = "arvobold";
  line1.style.fontSize = "clamp(2rem, 4vw, 60px)";
  line1.style.lineHeight = "1";

  let line2 = newElm("span");
  heading.appendChild(line2);
  line2.textContent = "at ";
  line2.style.color = "var(--gold-color)";
  line2.style.fontFamily = "arvobold";
  line2.style.fontSize = "clamp(2rem, 4vw, 60px)";
  line2.style.lineHeight = "1";

  let thePrimeCut = newElm("span");
  line2.appendChild(thePrimeCut);
  thePrimeCut.textContent = "The Prime Cut";
  thePrimeCut.style.color = "var(--red-color)";

  let line3 = newElm("span");
  heading.appendChild(line3);
  line3.textContent = "Steakhouse";
  line3.style.color = "var(--gold-color)";
  line3.style.fontFamily = "arvobold";
  line3.style.fontSize = "clamp(2rem, 4vw, 60px)";
  line3.style.lineHeight = "1";

  let para = newElm("p");
  content.appendChild(para);
  para.textContent =
    "Welcome to The Prime Cut Steakhouse, where the finest cuts of meat are grilled to perfection and served in an elegant, warm atmosphere. Our passion for quality and flavor is evident in every succulent bite. Join us for an unforgettable culinary experience.";
  para.style.color = "var(--text-color)";
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
  orderNow.style.backgroundColor = "var(--red-color)";
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
  bookTable.style.backgroundColor = "var(--gold-color)";
  bookTable.style.color = "#fff";
  bookTable.style.fontSize = "clamp(1rem, 2vw, 1.3rem)";
  bookTable.style.borderRadius = "50px";
  bookTable.style.cursor = "pointer";

  let heroImg = newElm("div");
  heroWrapper.appendChild(heroImg);

  heroImg.classList.add("heroImg");

  let img1 = newElm("img");
  heroImg.appendChild(img1);
  img1.src = vibe;
  img1.style.borderRadius = "25px";
  img1.style.boxShadow = "var(--shadow-elevation-medium)";

  return heroWrapper;
}

function createFooter(container, newElm) {
  let footerWrapper = newElm("div");

  container.appendChild(footerWrapper);
  footerWrapper.style.backgroundColor = "#000";
  footerWrapper.style.width = "100%";

  footerWrapper.style.display = "flex";
  footerWrapper.style.justifyContent = "center";
  footerWrapper.style.padding = "0 clamp(20px, 5vw, 140px)";

  footerWrapper.style.height = "clamp(60px, 7vw, 100px)";
  footerWrapper.style.position = "fixed";
  footerWrapper.style.bottom = 0;
  footerWrapper.style.left = 0;
  footerWrapper.style.zIndex = 10;

  let footer = newElm("footer");
  footerWrapper.appendChild(footer);
  footer.style.display = "flex";
  footer.style.justifyContent = "space-between";
  footer.style.alignItems = "center";

  footer.style.width = "100%";
  footer.style.height = "100%";
  footer.style.maxWidth = "1200px";

  let contact = newElm("div");
  footer.appendChild(contact);
  contact.style.color = "#F0EAE1";
  contact.style.display = "flex";
  contact.style.flexDirection = "column";
  contact.style.alignItems = "center";

  let number = newElm("a");
  contact.appendChild(number);
  number.href = "tel:+1 (360) 642 6941";
  number.textContent = "+1 (360) 642 6941";
  number.style.textDecoration = "none";
  number.style.color = "var(--gold-color)";
  number.style.fontSize = "clamp(14px, 2vw, 1.5rem)";

  let openTime1 = newElm("p");
  contact.appendChild(openTime1);
  openTime1.textContent = "Monday - Thursday: 5:00 PM - 10:00 PM";
  openTime1.style.fontSize = "clamp(10px, 0.8vw, 14px)";

  let openTime2 = newElm("p");
  contact.appendChild(openTime2);
  openTime2.textContent = "Friday - Sunday: 12:00 PM - 11:00 PM";
  openTime2.style.fontSize = "clamp(10px, 0.8vw, 14px)";

  let links = newElm("div");
  footer.appendChild(links);
  links.style.display = "flex";
  links.style.gap = "clamp(10px, 2vw, 20px)";

  let linksSrc = [
    { logo: fbSrc, link: "#" },
    { logo: igSrc, link: "#" },
    { logo: twitterSrc, link: "#" },
    { logo: tiktokSrc, link: "#" },
  ];

  linksSrc.forEach((socialLink) => {
    let anchor = newElm("a");
    links.appendChild(anchor);
    anchor.href = socialLink.link;

    let logoImg = newElm("img");
    anchor.appendChild(logoImg);
    logoImg.src = socialLink.logo;
  });
}
