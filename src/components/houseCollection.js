import $ from "jquery";
import "slick-carousel";

export function createHouseCollection() {
  const houseCollection = document.createElement("section");
  houseCollection.className = "unit-homepage-house-collection";

  houseCollection.innerHTML = `
    <div class="container">
      <span class="title">Cosy House Collection at Home</span>
      <div class="row">
        <div><img src="/material-1.png" alt=""/></div>
        <div><img src="/material-2.png" alt=""/></div>
        <div><img src="/material-3.png" alt=""/></div>
        <div><img src="/material-1.png" alt=""/></div>
        <div><img src="/material-2.png" alt=""/></div>
      </div>
      <div class="house-collection-carousel">
        <div><img src="/material-1.png" alt=""/></div>
        <div><img src="/material-2.png" alt=""/></div>
        <div><img src="/material-3.png" alt=""/></div>
        <div><img src="/material-1.png" alt=""/></div>
        <div><img src="/material-2.png" alt=""/></div>
      </div>
      <div class="button">Shop now</div>
    </div>
  `;

  $(document).ready(function () {
    if ($(window).width() < 768) {
      $(".unit-homepage-house-collection .house-collection-carousel").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        adaptiveHeight: true,
      });
    }
  });

  return houseCollection;
}
