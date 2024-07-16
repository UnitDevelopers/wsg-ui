export function createHouseCollection() {
  const hero = document.createElement("section");
  hero.className = "unit-house-collection";

  hero.innerHTML = `
    <div class="container">
      <span class="title">
        Cosy House Collection at Home
      </span>
      <div class="row">
        <img src="/material-1.png" alt=""/>
        <img src="/material-2.png" alt=""/>
        <img src="/material-3.png" alt=""/>
        <img src="/material-1.png" alt=""/>
        <img src="/material-2.png" alt=""/>
      </div>
      <div class="button">
        Shop now
      </div>
    </div>
  `;

  return hero;
}
