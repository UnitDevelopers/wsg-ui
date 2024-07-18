export function createCollections() {
  const collections = document.createElement("section");
  collections.className = "unit-homepage-collections";

  collections.innerHTML = `
    <span class="heading">Treat Yourself to Quality Essentials</span>
    <div class="container">
      <div class="item">
        <img src="/category-bed-sheet.png" alt="Bed Sheet"/>
        <span class="title">Bed Sheet</span>
      </div>
      <div class="item">
        <img src="/category-duvet.png" alt="Duvet & Duvet Covers"/>
        <span class="title">Duvet & Duvet Covers</span>
      </div>
      <div class="item">
        <img src="/category-pillow.png" alt="PILLOWS & PILLOWCASES"/>
        <span class="title">PILLOWS & PILLOWCASES</span>
      </div>
    </div>
  `;

  return collections;
}
