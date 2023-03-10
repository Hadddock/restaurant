import "./style.scss";
import home from "./home.js";
import contact from "./contact.js";
import menu from "./menu.js";

const content = document.createElement("div");
content.id = "content";
let currentTab;

const footer = document.createElement("footer");
footer.innerHTML = `<div>© BUSINESS FOODS ${new Date().getFullYear()} </div><div>All icons created by Freepik</div>`;

function selectTab(tab) {
  if (tab.name !== currentTab) {
    header.childNodes.forEach((node) => {
      if (node.textContent.toLowerCase() === tab.name) {
        node.classList.add("active");
        console.log("FOUND!");
      } else {
        node.classList.remove("active");
        console.log(node);
      }
    });
    content.innerHTML = "";
    content.appendChild(tab());
    currentTab = tab.name;
    console.log(currentTab);
  }
}

function createTabButtons(tabs) {
  const tabButtons = [];
  tabs.forEach((tab) => {
    const currentButton = document.createElement("button");
    currentButton.classList.add("header-button");
    currentButton.textContent =
      tab.name.charAt(0).toUpperCase() + tab.name.slice(1);
    currentButton.addEventListener("click", selectTab.bind(this, tab));
    tabButtons.push(currentButton);
  });
  currentTab = tabButtons[0];
  return tabButtons;
}

const header = document.createElement("header");
createTabButtons([home, menu, contact]).forEach((tab) => {
  header.appendChild(tab);
});

document.body.appendChild(header);
document.body.appendChild(content);
document.body.appendChild(footer);

content.appendChild(home());
