import $ from "jquery";
import "slick-carousel";

export function createHero() {
  const hero = document.createElement("section");
  hero.className = "unit-homepage-hero";

  document.addEventListener("DOMContentLoaded", () => {
    const slickElement = $(".unit-homepage-hero-carousel").slick({
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      arrows: false,
      infinite: true,
      speed: 700,
      fade: true,
      cssEase: "linear",
    });

    $(".slick-dots").hide();

    const slideCount = $(".unit-homepage-hero-carousel .slick-slide").length;
    const customDotsContainer = $(".custom-dots-container");
    for (let i = 0; i < slideCount; i++) {
      customDotsContainer.append('<span class="custom-dot"></span>');
    }

    slickElement.on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        $(".custom-dot").removeClass("slick-active");
        $(`.custom-dot:eq(${nextSlide % slideCount})`).addClass("slick-active");
      }
    );

    $(".custom-dot:first").addClass("slick-active");
  });

  hero.innerHTML = `
    <div class="unit-homepage-hero-overlay">
      <span class="heading">Affordable Luxury, Delivered Daily</span>
      <span class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut eget egestas tellus.</span>
      <span class="shop-button">SHOP NOW</span>
    </div>
    <div class="unit-homepage-hero-carousel">
      <div><img src="/hero-image.png" alt="Hero Image 1" /></div>
      <div><img src="/category-duvet.png" alt="Hero Image 2" /></div>
      <div><img src="/category-bed-sheet.png" alt="Hero Image 3" /></div>
    </div>
    <div class="unit-homepage-hero-gradient"></div>
    <div class="unit-homepage-hero-mobile-gradient-container">
      <div class="mobile-gradient"></div>
    </div>
    <div class="custom-dots-container">
    </div>
  `;

  return hero;
}
