import fish from "./fish.png";
import water from "./water.png";
import cube from "./cube.png";
import smoothie from "./smoothie.png";
import dogfood from "./dogfood.png";
import apple from "./apple.png";

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
        src="${fish}"
        alt=""
      />
      <div class="vertical-line"></div>
      <div class="item-name">Synergy Salmon</div>
      <div class="item-description">A fish guaranteed to have been caught by two fishermen that were friends.</div>
      <div class="item-price">10.99</div>
    </div>
    <div class="menu-item">
      <img
        src="${water}"
        alt=""
      />
      <div class="vertical-line"></div>
      <div class="item-name">Water (Bottled)</div>
      <div class="item-description">Offered on entry. It's almost complimentary.</div>
      <div class="item-price">0.99</div>
    </div>
    <div class="menu-item">
      <img
        src="${cube}"
        alt=""
      />
      <div class="vertical-line"></div>
      <div class="item-name">Basic Food Unit A</div>
      <div class="item-description">We looked up all the advised nutrients for a single day, bought their equivalent supplements, and compressed them into a cube. The theoretical healthiest meal. </div>
      <div class="item-price">21.99</div>
    </div>
    <div class="menu-item">
      <img
        src="${smoothie}"
        alt=""
      />
      <div class="vertical-line"></div>
      <div class="item-name">Agile Shake</div>
      <div class="item-description">A smoothie composed of mystrey materials. After finishing, you design the details of the shake for the next customer.</div>
      <div class="item-price">23.99</div>
    </div>
    <div class="menu-item">
    <img
      src="${apple}"
      alt=""
    />
    <div class="vertical-line"></div>
    <div class="item-name">An Apple</div>
    <div class="item-description">Both red and delicious. A favorite of the most famous business person of all, Issac Newton.</div>
    <div class="item-price">19.99</div>
  </div>
    <div class="menu-item">
      <img
        src="${dogfood}"
        alt=""
      />
      <div class="vertical-line"></div>
      <div class="item-name">Dog food</div>
      <div class="item-description">Has your dog jumped into the back of your car and refuses to leave? Make them an offer they can't refuse, some dog food.</div>
      <div class="item-price">16.99</div>
    </div>
   
  </div>
  
`;
  return menu;
}
