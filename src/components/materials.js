export function createMaterials() {
  const materials = document.createElement("section");
  materials.className = "unit-homepage-materials";

  materials.innerHTML = `
    <div class="column">
      <div class="main-section">
        <span class="title">Shop by Material</span>
        <span class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia, magna eget tempor</span>
      </div>
    </div>
    <div class="grid">
      <div class="item">
        <img src="/material-1.png" alt=""/>
      </div>
      <div class="item">
        <div class="group">
          <div class="top-section">
            <img src="material/everyday-icon.svg" alt=""/>
            <span class="title">
              Everyday Series
            </span>
            <span class="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut eget egestas tellus.
            </span>
          </div>
          <span class="button-text">
            SHOP NOW
          </span>
        </div>
      </div>
      <div class="item">
      <div class="group">
          <div class="top-section">
            <img src="/material/luxury-icon.svg" alt=""/>
            <span class="title">
              Luxury Series
            </span>
            <span class="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut eget egestas tellus.
            </span>
          </div>
          <span class="button-text">
            SHOP NOW
          </span>
        </div>
      </div>
      <div class="item">
        <img src="/material-2.png" alt=""/>
      </div>
      <div class="item">
        <img src="/material-3.png" alt=""/>
      </div>
      <div class="item">
      <div class="group">
          <div class="top-section">
            <img src="material/bamboo-icon.svg" alt=""/>
            <span class="title">
              100% Bamboo
            </span>
            <span class="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut eget egestas tellus.
            </span>
          </div>
          <span class="button-text">
            SHOP NOW
          </span>
        </div>
      </div>
    </div>
  `;

  return materials;
}
