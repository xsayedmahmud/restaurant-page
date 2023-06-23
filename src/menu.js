import bakedMushroomCaps from "./asset/img/bakedMushroomCaps.jpeg";
import crispyCalamari from "./asset/img/crispyCalamari.jpeg";
import grilledShrimpSkewers from "./asset/img/grilledShrimpSkewers.jpeg";
import classicCaesarSalad from "./asset/img/classicCaesarSalad.jpeg";
import mixedGreensSalad from "./asset/img/mixedGreensSalad.jpeg";
import wedgeSalad from "./asset/img/wedgeSalad.jpeg";
import filetMignon from "./asset/img/filetMignon.jpeg";
import newYorkStrip from "./asset/img/newYorkStrip.jpeg";
import ribeye from "./asset/img/ribeye.jpeg";
import porterhouse from "./asset/img/porterhouse.jpeg";
import surf_Turf from "./asset/img/surf_Turf.jpeg";
import grilledSalmon from "./asset/img/grilledSalmon.jpeg";
import searedScallops from "./asset/img/searedScallops.jpeg";
import blackenedMahiMahi from "./asset/img/blackenedMahiMahi.jpeg";
import newYorkCheescake from "./asset/img/newYorkCheescake.jpeg";
import chocolateLavaCake from "./asset/img/chocolateLavaCake.jpeg";
import cremeBrulee from "./asset/img/cremeBrulee.jpeg";

export function loadMenu() {
  let newElm = (type) => document.createElement(type);
  let menuContainer = newElm("div");

  menuContainer.style.width = "100%";
  menuContainer.style.maxWidth = "1200px";
  menuContainer.style.display = "grid";
  menuContainer.style.gap = "clamp(15px, 2vw, 50px)";
  menuContainer.style.gridTemplateColumns = "100px 1fr";
  menuContainer.style.fontFamily = "loraregular";
  menuContainer.classList.add("menuContainer");

  let menuNav = newElm("div");
  menuContainer.appendChild(menuNav);
  menuNav.style.display = "flex";
  menuNav.style.flexDirection = "column";
  menuNav.style.gap = "clamp(10px, 2vw, 30px)";
  menuNav.style.color = "var(--text-color)";

  let menuNavLinks = [
    { text: "Appetizers", link: "#appetizers" },
    { text: "Salad", link: "#salad" },
    { text: "Mains", link: "#mains" },
    { text: "Desserts", link: "#desserts" },
  ];

  menuNavLinks.forEach((menuLink) => {
    let menu = newElm("a");
    menuNav.appendChild(menu);
    menu.textContent = menuLink.text;
    menu.href = menuLink.link;
    menu.style.textDecoration = "none";
    menu.style.color = "var(--text-color)";
    menu.style.width = "min-content";
    menu.style.padding = "4px 10px";
    menu.style.borderRadius = "5px";

    menu.addEventListener("mouseover", () => {
      menu.style.color = "var(--red-color)";
      menu.style.cursor = "pointer";
      menu.style.boxShadow = "var(--shadow-elevation-low)";
    });

    menu.addEventListener("mouseout", () => {
      menu.style.color = "var(--text-color)";
      menu.style.boxShadow = "none";
    });
  });

  let menuItems = newElm("div");
  menuContainer.appendChild(menuItems);
  menuItems.style.display = "grid";
  menuItems.style.gap = "50px";

  appetizersItem(menuItems, newElm);
  saladItems(menuItems, newElm);
  mainsItems(menuItems, newElm);
  dessertsItems(menuItems, newElm);

  return menuContainer;
}

function createMenuItem(container, name, price, description, newElm, imgUrl) {
  const menuItem = newElm("div");
  container.appendChild(menuItem);
  // menuItem.style.backgroundColor = "#F1F6F9";
  menuItem.style.padding = "10px";
  menuItem.style.borderRadius = "15px";
  menuItem.style.display = "flex";
  menuItem.style.flexDirection = "column";
  menuItem.style.gap = "10px";
  menuItem.style.boxShadow = "var(--shadow-elevation-low)";
  menuItem.style.borderTop = "3px solid var(--gold-color)";

  const imgDiv = newElm("div");
  menuItem.appendChild(imgDiv);

  const itemImg = newElm("img");
  imgDiv.appendChild(itemImg);
  itemImg.src = imgUrl;
  itemImg.style.objectFit = "cover";
  itemImg.style.borderRadius = "15px";
  itemImg.style.boxShadow = "var(--shadow-elevation-low)";

  const itemInfo = newElm("div");
  menuItem.appendChild(itemInfo);

  itemInfo.style.display = "grid";
  itemInfo.style.gridTemplateAreas = `
  "name price"
  "description description"
  ". btn"
`;
  itemInfo.style.gridTemplateRows = "30px 1fr 30px";
  itemInfo.style.gridTemplateColumns = "4fr 1fr";
  itemInfo.style.flex = "1";

  const itemName = newElm("h3");
  itemInfo.appendChild(itemName);
  itemName.textContent = name;
  itemName.style.gridArea = "name";
  itemName.style.color = "var(--gold-color)";
  itemName.style.fontSize = "1rem";

  const itemPrice = newElm("h3");
  itemInfo.appendChild(itemPrice);
  itemPrice.textContent = `$${price}`;
  itemPrice.style.gridArea = "price";
  itemPrice.style.justifySelf = "end";
  itemPrice.style.color = "var(--gold-color)";

  itemPrice.style.fontSize = "1rem";

  const itemDescription = newElm("p");
  itemInfo.appendChild(itemDescription);
  itemDescription.textContent = description;
  itemDescription.style.gridArea = "description";
  itemDescription.style.color = "#00000080";
  itemDescription.style.fontSize = ".8rem";

  const addBtn = newElm("button");
  itemInfo.appendChild(addBtn);
  addBtn.textContent = "Add";
  addBtn.style.alignSelf = "end";
  addBtn.style.gridArea = "btn";
  addBtn.style.borderRadius = "5px";

  addBtn.style.border = "none";
  addBtn.style.backgroundColor = "var(--red-color)";
  addBtn.style.color = "#fff";
  addBtn.style.borderRadius = "25px";
  addBtn.style.cursor = "pointer";
}

function itemContainerStyle(itemContainer) {
  itemContainer.style.display = "grid";
  itemContainer.style.gridTemplateColumns = "repeat(auto-fit, 240px";
  itemContainer.style.gap = "clamp(10px, 2vw, 30px)";
}

function menuHeader(id, name) {}

function appetizersItem(menuItems, newElm) {
  let wrapper = newElm("div");
  menuItems.appendChild(wrapper);
  wrapper.style.display = "grid";
  wrapper.style.gridTemplateRows = "30px 1fr";
  wrapper.style.gap = "16px";
  wrapper.id = "appetizers";

  let h2 = newElm("h2");
  wrapper.appendChild(h2);
  h2.textContent = "Appetizers";
  h2.style.color = "var(--red-color)";
  h2.style.padding = "0 16px";

  let appetizersContainer = newElm("div");
  wrapper.appendChild(appetizersContainer);
  itemContainerStyle(appetizersContainer);

  let items = [
    {
      url: bakedMushroomCaps,
      name: "Baked Mushroom Caps",
      price: 12,
      description:
        "Button mushrooms stuffed with a blend of cream cheese, garlic, and herbs, topped with melted parmesan.",
    },
    {
      url: crispyCalamari,
      name: "Crispy Calamari",
      price: 14,
      description:
        "Tender calamari rings, lightly breaded and fried, served with zesty marinara sauce.",
    },
    {
      url: grilledShrimpSkewers,
      name: "Grilled Shrimp Skewers",
      price: 16,
      description:
        "Succulent shrimp grilled to perfection, served with a zesty dipping sauce",
    },
  ];

  items.forEach((item) => {
    createMenuItem(
      appetizersContainer,
      item.name,
      item.price,
      item.description,
      newElm,
      item.url
    );
  });
}

function saladItems(menuItems, newElm) {
  let wrapper = newElm("div");
  menuItems.appendChild(wrapper);
  wrapper.style.display = "grid";
  wrapper.style.gridTemplateRows = "30px 1fr";
  wrapper.style.gap = "16px";
  wrapper.id = "salad";

  let h2 = newElm("h2");
  wrapper.appendChild(h2);
  h2.textContent = "Salad";
  h2.style.color = "var(--red-color)";
  h2.style.padding = "0 16px";

  let saladContainer = newElm("div");
  wrapper.appendChild(saladContainer);
  itemContainerStyle(saladContainer);

  let items = [
    {
      url: classicCaesarSalad,
      name: "Classic Caesar Salad ",
      price: 10,
      description:
        " Crisp romaine lettuce, house-made croutons, and shaved parmesan, tossed withCaesar dressing.",
    },
    {
      url: mixedGreensSalad,
      name: "Mixed Greens Salad",
      price: 9,
      description:
        "Fresh mixed greens, cherry tomatoes, cucumber, red onions, and crumbled goat cheese.",
    },
    {
      url: wedgeSalad,
      name: "Wedge Salad",
      price: 11,
      description:
        "A crisp iceberg lettuce wedge, topped with blue cheese crumbles, diced tomatoes, red onions, and bacon bits, drizzled with creamy ranch dressing.",
    },
  ];

  items.forEach((item) => {
    createMenuItem(
      saladContainer,
      item.name,
      item.price,
      item.description,
      newElm,
      item.url
    );
  });
}

function mainsItems(menuItems, newElm) {
  let wrapper = newElm("div");
  menuItems.appendChild(wrapper);
  wrapper.style.display = "grid";
  wrapper.style.gridTemplateRows = "30px 1fr";
  wrapper.style.gap = "16px";
  wrapper.id = "mains";

  let h2 = newElm("h2");
  wrapper.appendChild(h2);
  h2.textContent = "Mains";
  h2.style.color = "var(--red-color)";
  h2.style.padding = "0 16px";

  let mainsContainer = newElm("div");
  wrapper.appendChild(mainsContainer);
  itemContainerStyle(mainsContainer);

  let items = [
    {
      url: filetMignon,
      name: "Filet Mignon",
      price: 38,
      description:
        "Most tender cut, a perfectly seasoned 8 oz center-cut filet, grilled to desired temperature.",
    },
    {
      url: newYorkStrip,
      name: "New York Strip",
      price: 36,
      description:
        "A 12 oz flavorful and juicy strip steak, seared to seal in its rich beefiness.",
    },
    {
      url: ribeye,
      name: "Ribeye Steak",
      price: 40,
      description:
        "A well-marbled 14 oz boneless ribeye, bursting with flavor and grilled to perfection.",
    },

    {
      url: porterhouse,
      name: "Porterhouse",
      price: 50,
      description:
        "A 20 oz king of steaks, featuring both the filet and the New York strip.",
    },
    {
      url: surf_Turf,
      name: "Surf & Turf",
      price: 55,
      description:
        "Tender 8 oz filet mignon paired with a broiled lobster tail, served with drawn butter.",
    },
    {
      url: grilledSalmon,
      name: "Grilled Salmon ",
      price: 32,
      description:
        "Fresh Atlantic salmon, seasoned and grilled, served with a lemon-dill beurre blanc sauce.",
    },

    {
      url: searedScallops,
      name: "Seared Scallops",
      price: 38,
      description:
        "served with a creamy cauliflower purée and crispy bacon bits.",
    },
    {
      url: blackenedMahiMahi,
      name: "Blackened Mahi-Mahi",
      price: 30,
      description:
        "8 oz. fillet, seasoned with Cajun spices and seared to perfection, served with a mango salsa.",
    },
  ];

  items.forEach((item) => {
    createMenuItem(
      mainsContainer,
      item.name,
      item.price,
      item.description,
      newElm,
      item.url
    );
  });
}

function dessertsItems(menuItems, newElm) {
  let wrapper = newElm("div");
  menuItems.appendChild(wrapper);
  wrapper.style.display = "grid";
  wrapper.style.gridTemplateRows = "30px 1fr";
  wrapper.style.gap = "16px";
  wrapper.id = "desserts";

  let h2 = newElm("h2");
  wrapper.appendChild(h2);
  h2.textContent = "Desserts";
  h2.style.color = "var(--red-color)";
  h2.style.padding = "0 16px";

  let dessertsContainer = newElm("div");
  wrapper.appendChild(dessertsContainer);
  itemContainerStyle(dessertsContainer);

  let items = [
    {
      url: newYorkCheescake,
      name: "New York Cheesecake",
      price: 9,
      description:
        "A velvety smooth cheesecake with a graham cracker crust, served with fresh berries and whipped cream.",
    },
    {
      url: chocolateLavaCake,
      name: "Chocolate Lava Cake",
      price: 10,
      description:
        "A decadent warm chocolate cake with a molten center, served with vanilla ice cream and raspberry coulis.",
    },
    {
      url: cremeBrulee,
      name: "Crème Brûlée",
      price: 9,
      description:
        "A classic French custard dessert, topped with a torched caramelized sugar crust.",
    },
  ];

  items.forEach((item) => {
    createMenuItem(
      dessertsContainer,
      item.name,
      item.price,
      item.description,
      newElm,
      item.url
    );
  });
}
