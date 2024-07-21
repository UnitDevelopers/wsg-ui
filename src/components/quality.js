export function createQuality() {
  const quality = document.createElement("section");
  quality.className = "unit-homepage-quality";

  quality.innerHTML = `
    <img src="/quality-cover.png" alt="Quality Cover Image"/>
    <div class="layout">
      <div class="container">
        <span class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        <div class="feature">
          <img src="/feature1.png" alt="Feature One Icon"/>
          <div class="section">
            <span class="title">Feature One</span>
            <span class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut eget egestas tellus.</span>
          </div>
        </div>
        <div class="feature">
          <img src="/feature2.png" alt="Feature Two Icon"/>
          <div class="section">
            <span class="title">Feature Two</span>
            <span class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut eget egestas tellus.</span>
          </div>
        </div>
        <div class="feature">
          <img src="/feature3.png" alt="Feature Three Icon"/>
          <div class="section">
            <span class="title">Feature Three</span>
            <span class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut eget egestas tellus.</span>
          </div>
        </div>
      </div>
    </div>
  `;

  return quality;
}
