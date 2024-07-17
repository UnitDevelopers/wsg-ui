export function createCollections() {
  const hero = document.createElement("section");
  hero.className = "unit-collections";

  hero.innerHTML = `
<span class="heading">Treat Yourself to Quality Essentials</span>
<div class="container">
<div class="item">
    <div><img src="/category-bed-sheet.png" alt="Bed Sheet"/></div>
    <span class="title">Bed Sheet</span>
</div>
<div class="item">
    <div><img src="/category-duvet.png" alt="Duvet & Duvet Covers"/></div>
    <span class="title">Duvet & Duvet Covers</span>
</div>
<div class="item">
    <div><img src="/category-pillow.png" alt="PILLOWS & PILLOWCASES"/></div>
    <span class="title">PILLOWS & PILLOWCASES</span>
</div>
</div>
  `;

  return hero;
}
