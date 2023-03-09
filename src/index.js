import "./style.scss";
import home from "./home.js";
import about from "./about.js";
import menu from "./menu.js";

const content = document.createElement("div");
content.id = "content";
let currentTab = "home";

const footer = document.createElement("footer");
footer.innerHTML = "<div>© Justin Haddock</div>";

function selectTab(tab) {
  if (tab.name !== currentTab) {
    content.innerHTML = "";
    content.appendChild(tab());
    currentTab = tab.name;
  }
}

function createTabButtons(tabs) {
  const tabButtons = [];
  tabs.forEach((tab) => {
    const currentButton = document.createElement("button");
    currentButton.textContent =
      tab.name.charAt(0).toUpperCase() + tab.name.slice(1);
    currentButton.addEventListener("click", selectTab.bind(this, tab));
    tabButtons.push(currentButton);
  });
  return tabButtons;
}

const header = document.createElement("header");
createTabButtons([home, menu, about]).forEach((tab) => {
  header.appendChild(tab);
});

document.body.appendChild(header);
document.body.appendChild(content);
document.body.appendChild(footer);

content.appendChild(home());
