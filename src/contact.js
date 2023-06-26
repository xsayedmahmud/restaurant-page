import waiterSrc from "./asset/img/waiter.jpg";

export function loadContact() {
  let newElm = (type) => document.createElement(type);
  let contactContainer = newElm("div");

  contactContainer.style.width = "100%";
  contactContainer.style.maxWidth = "1200px";
  contactContainer.style.fontFamily = "loraregular";
  contactContainer.classList.add("contactContainer");
  contactContainer.style.marginTop = "clamp(25px, 2vw, 50px)";
  contactContainer.style.marginBottom = "30px";
  contactContainer.style.gap = "clamp(40px, 5vw, 100px)";

  let contactInfo = newElm("div");
  contactContainer.appendChild(contactInfo);
  contactInfo.style.flexDirection = "column";
  contactInfo.style.gap = "25px";
  contactInfo.classList.add("contactInfo");

  let heading = newElm("h3");
  contactInfo.appendChild(heading);
  heading.textContent =
    "We value your feedback and questions. Please use the form below to contact us. We will get back to you as soon as possible.";
  heading.style.color = "var(--gold-color)";
  heading.style.fontSize = "1rem";
  heading.style.alignItems = "center";
  heading.style.maxWidth = "400px";

  createForm(contactInfo, newElm);

  let contactImg = newElm("div");
  contactContainer.appendChild(contactImg);
  contactImg.style.display = "flex";
  contactImg.style.flexDirection = "column";
  contactImg.style.gap = "15px";
  contactImg.classList.add("contactImg");

  let waiter = newElm("img");
  contactImg.appendChild(waiter);
  waiter.src = waiterSrc;
  waiter.style.width = "clamp(370px, 40vw, 400px)";
  waiter.style.borderRadius = "20px";
  waiter.style.boxShadow = "var(--shadow-elevation-medium)";

  return contactContainer;
}

function createForm(contactInfo, newElm) {
  function commonStyle(input) {
    contactForm.appendChild(input);
    input.style.border = "none";
    input.style.height = "2.5rem";
    input.style.backgroundColor = "#f1f6f9";
    input.style.borderRadius = "10px";
    input.style.outline = "none";
    input.style.padding = "0 10px";
    input.style.marginBottom = "15px";
    input.addEventListener("focus", () => {
      input.style.border = "2px solid var(--red-color)";
    });
    input.addEventListener("blur", () => {
      input.style.border = "2px solid transparent";
    });
  }

  let contactForm = newElm("form");
  contactInfo.appendChild(contactForm);
  contactForm.style.width = "clamp(300px, 100%, 400px)";
  contactForm.style.display = "flex";
  contactForm.style.flexDirection = "column";
  contactForm.style.gap = "15px";
  contactForm.style.color = "var(--text-color)";

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  let nameLabel = newElm("label");
  nameLabel.textContent = "Name*";
  contactForm.appendChild(nameLabel);
  nameLabel.style.lineHeight = 0;
  let name = newElm("input");
  name.type = "text";
  name.name = "name";
  name.placeholder = "Your name";
  commonStyle(name);

  let emailLabel = newElm("label");
  emailLabel.textContent = "Email*";
  contactForm.appendChild(emailLabel);
  emailLabel.style.lineHeight = 0;
  let email = newElm("input");
  email.type = "email";
  email.name = "email";
  email.placeholder = "Your email";
  commonStyle(email);

  let phoneLabel = newElm("label");
  phoneLabel.textContent = "Phone";
  contactForm.appendChild(phoneLabel);
  phoneLabel.style.lineHeight = 0;
  let phone = newElm("input");
  phone.type = "tel";
  phone.name = "phone";
  phone.placeholder = "Your phone number";
  commonStyle(phone);

  let messageLabel = newElm("label");
  messageLabel.textContent = "Message*";
  contactForm.appendChild(messageLabel);
  messageLabel.style.lineHeight = 0;
  let message = newElm("textarea");
  message.name = "message";
  message.placeholder = "Your message";
  message.rows = "4";
  message.cols = "50";
  message.style.resize = "none";
  commonStyle(message);
  message.style.height = "";

  let submit = newElm("button");
  submit.type = "submit";
  submit.textContent = "Submit";
  contactForm.appendChild(submit);
  submit.style.width = "120px";
  submit.style.border = "none";
  submit.style.borderRadius = "10px";
  submit.style.backgroundColor = "var(--red-color)";
  submit.style.color = "#fff";
  submit.style.padding = "4px 0";
}
