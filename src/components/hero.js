import $ from "jquery";
import "slick-carousel";

export function createHero() {
  const hero = document.createElement("section");
  hero.className = "unit-hero";

  $(document).ready(function () {
    $(".unit-hero-carousel").slick({
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      arrows: false,
      infinite: true,
      speed: 700,
      fade: true,
      cssEase: "linear",
    });
  });

  hero.innerHTML = `
  <div class="unit-hero-overlay">
  <span class="heading">Affordable Luxury, Delivered Daily</span>
  <span class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut eget egestas tellus.</span>
  <div class="button">SHOP NOW</div>
</div>
<div class="unit-hero-carousel">
  <div><img src="/hero-image.png" alt="Image 1" /></div>
  <div><img src="/hero-image.png" alt="Image 2" /></div>
  <div><img src="/hero-image.png" alt="Image 3" /></div>
</div>
<div class="unit-hero-gradient"></div>
  `;

  return hero;
}
