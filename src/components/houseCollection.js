import $ from "jquery";
import "slick-carousel";

export function createHouseCollection() {
  const houseCollection = document.createElement("section");
  houseCollection.className = "unit-homepage-house-collection";

  houseCollection.innerHTML = `
    <div class="container">
      <span class="title">Cosy House Collection at Home</span>
      <div class="row">
        <div><img src="house-collection/house-collection-1.png" alt=""/></div>
        <div><img src="house-collection/house-collection-2.png" alt=""/></div>
        <div><img src="house-collection/house-collection-3.png" alt=""/></div>
        <div><img src="house-collection/house-collection-4.png" alt=""/></div>
        <div><img src="house-collection/house-collection-5.png" alt=""/></div>
      </div>
      <div class="house-collection-carousel">
        <div><img src="house-collection/house-collection-1.png" alt=""/></div>
        <div><img src="house-collection/house-collection-2.png" alt=""/></div>
        <div><img src="house-collection/house-collection-3.png" alt=""/></div>
        <div><img src="house-collection/house-collection-4.png" alt=""/></div>
        <div><img src="house-collection/house-collection-5.png" alt=""/></div>
      </div>
      <div class="button">Shop now</div>
    </div>
  `;

  $(document).ready(function () {
    initSlick();
    $(window).resize(initSlick);
  });

  function initSlick() {
    const width = $(window).width();
    const carousel = $(
      ".unit-homepage-house-collection .house-collection-carousel"
    );

    if (carousel.hasClass("slick-initialized")) {
      carousel.slick("unslick");
    }

    if (width < 420) {
      carousel.slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        adaptiveHeight: true,
        dots: true,
        infinite: true,
      });
    } else if (width >= 420 && width < 640) {
      carousel.slick({
        slidesToShow: 2.5,
        slidesToScroll: 2,
        adaptiveHeight: true,
        dots: true,
        infinite: true,
      });
    } else {
      carousel.slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 2,
        adaptiveHeight: true,
      });
    }
  }

  return houseCollection;
}
