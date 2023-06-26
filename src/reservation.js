import reservationSrc from "./asset/img/reservation.jpg";
import groupSrc from "./asset/img/group.jpg";

export function loadReservation() {
  let newElm = (type) => document.createElement(type);
  let reservationContainer = newElm("div");

  reservationContainer.style.width = "100%";
  reservationContainer.style.maxWidth = "1200px";
  reservationContainer.style.fontFamily = "loraregular";
  reservationContainer.classList.add("reservationContainer");
  reservationContainer.style.marginTop = "clamp(25px, 2vw, 50px)";
  reservationContainer.style.marginBottom = "30px";
  // reservationContainer.style.display = "grid";
  reservationContainer.style.gap = "clamp(40px, 5vw, 100px)";
  // reservationContainer.style.gridTemplateColumns =
  // "minmax(300px, 400px) minmax(300px, 1fr)";
  // reservationContainer.style.alignItems = "center";

  let reservationInfo = newElm("div");
  reservationContainer.appendChild(reservationInfo);
  // reservationInfo.style.display = "flex";
  reservationInfo.style.flexDirection = "column";
  reservationInfo.style.gap = "15px";
  reservationInfo.classList.add("reservationInfo");

  let heading = newElm("h2");
  reservationInfo.appendChild(heading);
  heading.textContent = "Reserve Your Table";
  heading.style.color = "var(--gold-color)";
  heading.style.fontSize = "clamp(1.5rem, 2vw, 2.5rem)";

  let reservationText = newElm("div");
  reservationInfo.appendChild(reservationText);

  reservationText.style.width = "clamp(300px, 100%, 400px)";
  reservationText.style.display = "flex";
  reservationText.style.flexDirection = "column";
  reservationText.style.gap = "15px";
  reservationText.style.color = "var(--text-color)";

  let createPara = [
    {
      text: "At The Prime Cut, we recommend booking at least 1-2 weeks in advance for the best availability. While we do accept walk-ins based on availability, reserving ensures you get the perfect table for your special evening.",
    },
    {
      text: "To reserve your table, please call us at 123-123-1234 or email reservations@theprimecut.com. Provide the date and time you would like to dine, the number of guests in your party, and we will reserve your table. For parties of 6 or more, we recommend reserving at least 1 month in advance.",
    },
  ];

  createPara.forEach((para) => {
    let paragraph = newElm("p");
    reservationText.appendChild(paragraph);
    paragraph.textContent = para.text;
  });

  let addressInfo = [
    {
      text: "The Prime Cut Steakhouse",
    },
    {
      text: "123 Steakhouse Lane",
    },
    {
      text: "San Francisco, CA 94122",
    },
  ];

  let address = newElm("div");
  reservationText.appendChild(address);

  addressInfo.forEach((info) => {
    let para = newElm("p");
    reservationText.appendChild(para);
    para.textContent = info.text;
    para.style.lineHeight = "0.5";
  });

  let reservationImg = newElm("div");
  reservationContainer.appendChild(reservationImg);
  reservationImg.style.display = "flex";
  reservationImg.style.flexDirection = "column";
  reservationImg.style.gap = "15px";
  reservationImg.classList.add("reservationImg");

  let reservation = newElm("img");
  reservationImg.appendChild(reservation);
  reservation.src = reservationSrc;
  reservation.style.width = "clamp(400px, 40vw, 500px)";
  reservation.style.borderRadius = "20px";
  reservation.style.boxShadow = "var(--shadow-elevation-low)";

  let group = newElm("img");
  reservationImg.appendChild(group);
  group.src = groupSrc;
  group.style.width = "clamp(400px, 40vw, 500px)";
  group.style.borderRadius = "20px";
  group.style.boxShadow = "var(--shadow-elevation-low)";

  return reservationContainer;
}
