import cookSrc from "./asset/img/cook.jpg";
import readySrc from "./asset/img/ready.jpg";
import serveSrc from "./asset/img/serve.jpg";

export function loadAbout() {
  let newElm = (type) => document.createElement(type);
  let aboutContainer = newElm("div");

  aboutContainer.style.width = "100%";
  aboutContainer.style.maxWidth = "1200px";
  aboutContainer.style.fontFamily = "loraregular";
  aboutContainer.classList.add("aboutContainer");
  aboutContainer.style.marginTop = "clamp(25px, 2vw, 50px)";
  aboutContainer.style.marginBottom = "30px";
  // aboutContainer.style.display = "grid";
  aboutContainer.style.gap = "clamp(40px, 5vw, 100px)";
  // aboutContainer.style.gridTemplateColumns =
  //   "minmax(300px, 1fr) minmax(300px, 1fr)";
  // aboutContainer.style.alignItems = "center";

  let aboutUs = newElm("div");
  aboutContainer.appendChild(aboutUs);
  // aboutUs.style.display = "flex";
  aboutUs.style.flexDirection = "column";
  aboutUs.style.gap = "15px";
  // aboutUs.style.alignItems = "flex-end";
  aboutUs.classList.add("aboutUs");

  let heading = newElm("h2");
  aboutUs.appendChild(heading);
  heading.textContent = "About Us";
  heading.style.color = "var(--gold-color)";
  heading.style.fontSize = "clamp(2rem, 2vw, 4rem)";

  let aboutText = newElm("div");
  aboutUs.appendChild(aboutText);

  aboutText.style.width = "clamp(300px, 100%, 400px)";
  aboutText.style.display = "flex";
  aboutText.style.flexDirection = "column";
  aboutText.style.gap = "15px";
  aboutText.style.color = "var(--text-color)";

  let createPara = [
    {
      text: "We are dedicated to serving the finest steaks and seafood in an upscale setting. At The Prime Cut, we use only the highest quality ingredients and time-honored cooking techniques to create a memorable dining experience.",
    },
    {
      text: "Our beef is hand-selected and dry-aged for unmatched flavor and tenderness. We offer premium cuts like filet mignon, New York strip, ribeye and porterhouse, as well as fresh seafood.",
    },
    {
      text: "With a focus on personalized service, an extensive wine list, and decadent side dishes, The Prime Cut aims to make every visit an occasion.",
    },
    {
      text: "Since 1985, we have strived to provide an unparalleled fine dining experience in a warm, sophisticated atmosphere. Our goal is simple: to be the landmark steakhouse in San Francisco. We invite you to join us for lunch, dinner or Sunday brunch.",
    },
  ];

  createPara.forEach((para) => {
    let paragraph = newElm("p");
    aboutText.appendChild(paragraph);
    paragraph.textContent = para.text;
  });

  let aboutImg = newElm("div");
  aboutContainer.appendChild(aboutImg);
  aboutImg.style.display = "flex";
  aboutImg.style.flexDirection = "column";
  aboutImg.style.gap = "15px";

  let cook = newElm("img");
  aboutImg.appendChild(cook);
  cook.src = cookSrc;
  cook.style.width = "clamp(300px, 30vw, 380px)";
  cook.style.borderRadius = "20px";
  cook.style.boxShadow = "var(--shadow-elevation-medium)";

  let ready = newElm("img");
  aboutImg.appendChild(ready);
  ready.src = readySrc;
  ready.style.width = "clamp(300px, 30vw, 380px)";
  ready.style.borderRadius = "20px";
  ready.style.boxShadow = "var(--shadow-elevation-medium)";

  let serve = newElm("img");
  aboutImg.appendChild(serve);
  serve.src = serveSrc;
  serve.style.width = "clamp(300px, 30vw, 380px)";
  serve.style.borderRadius = "20px";
  serve.style.boxShadow = "var(--shadow-elevation-medium)";

  return aboutContainer;
}
