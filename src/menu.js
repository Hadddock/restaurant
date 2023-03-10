export default function menu() {
  const menu = document.createElement("div");
  menu.classList.add("tab");
  menu.id = "menu";
  menu.innerHTML = `
  <h1>MENU</h1>
  <h2>Select from one of our many business-optimized meals</h2>
  <div class="menu-container">
    <div class="menu-item">
      <img
        src="https://cdn.pixabay.com/photo/2023/01/11/23/30/candy-7712992_960_720.png"
        alt=""
      />
      <div class="vertical-line"></div>
      <div class="item-name">Dog food</div>
      <div class="item-description">A meal for the modern man</div>
      <div class="item-price">16.99</div>
    </div>
    <div class="menu-item">
      <img
        src="https://cdn.pixabay.com/photo/2023/01/11/23/30/candy-7712992_960_720.png"
        alt=""
      />
      <div class="vertical-line"></div>
      <div class="item-name">Dog food</div>
      <div class="item-description">A meal for the modern man</div>
      <div class="item-price">16.99</div>
    </div>
    <div class="menu-item">
      <img
        src="https://cdn.pixabay.com/photo/2023/01/11/23/30/candy-7712992_960_720.png"
        alt=""
      />
      <div class="vertical-line"></div>
      <div class="item-name">Dog food</div>
      <div class="item-description">A meal for the modern man</div>
      <div class="item-price">16.99</div>
    </div>
    <div class="menu-item">
      <img
        src="https://cdn.pixabay.com/photo/2023/01/11/23/30/candy-7712992_960_720.png"
        alt=""
      />
      <div class="vertical-line"></div>
      <div class="item-name">Dog food</div>
      <div class="item-description">A meal for the modern man</div>
      <div class="item-price">16.99</div>
    </div>
    <div class="menu-item">
      <img
        src="https://cdn.pixabay.com/photo/2023/01/11/23/30/candy-7712992_960_720.png"
        alt=""
      />
      <div class="vertical-line"></div>
      <div class="item-name">Dog food</div>
      <div class="item-description">A meal for the modern man</div>
      <div class="item-price">16.99</div>
    </div>
    <div class="menu-item">
      <img
        src="https://cdn.pixabay.com/photo/2023/01/11/23/30/candy-7712992_960_720.png"
        alt=""
      />
      <div class="vertical-line"></div>
      <div class="item-name">Dog food</div>
      <div class="item-description">A meal for the modern man</div>
      <div class="item-price">16.99</div>
    </div>
  </div>
  
`;
  return menu;
}
