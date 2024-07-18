export function createHouseCollection() {
  const houseCollection = document.createElement("section");
  houseCollection.className = "unit-homepage-house-collection";

  houseCollection.innerHTML = `
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

  return houseCollection;
}
