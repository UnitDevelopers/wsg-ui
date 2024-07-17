export function createQuality() {
  const hero = document.createElement("section");
  hero.className = "unit-homepage-quality";

  hero.innerHTML = `
    <img src="/quality-cover.png" alt=""/>
    <div class="layout">
      <div class="container">
        <span class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        <div class="feature">
            <img src="/feature1.png" alt=""/>
            <div class="section">
                <span class="title">Feature One</span>
                <span class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut eget egestas tellus.</span>
            </div>
        </div>
        <div class="feature">
            <img src="/feature2.png" alt=""/>
            <div class="section">
                <span class="title">Feature Two</span>
                <span class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut eget egestas tellus.</span>
            </div>
        </div>
        <div class="feature">
            <img src="/feature3.png" alt=""/>
            <div class="section">
                <span class="title">Feature Three</span>
                <span class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut eget egestas tellus.</span>
            </div>
        </div>
      </div>
    </div>
  `;

  return hero;
}
