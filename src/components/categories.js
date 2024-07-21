import $ from "jquery";
import "slick-carousel";

export function createCategories() {
  const quality = document.createElement("section");
  quality.className = "unit-homepage-categories";

  quality.innerHTML = `
    <div class="container">
   <div class="row">
    <div class="item">
        <span class="desc">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia, magna eget tempor”
        </span>
        <img src="category-1.png" alt="" />
    </div>
    <div class="item">
        <span class="desc">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia, magna eget tempor”
        </span>
        <img src="category-2.png" alt="" />
    </div>
    <div class="item">
        <span class="desc">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia, magna eget tempor”
        </span>
        <img src="category-3.png" alt="" />
    </div>
    <div class="item">
        <span class="desc">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia, magna eget tempor”
        </span>
        <img src="category-4.png" alt="" />
    </div><div class="item">
        <span class="desc">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia, magna eget tempor”
        </span>
        <img src="category-1.png" alt="" />
    </div>
    <div class="item">
        <span class="desc">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia, magna eget tempor”
        </span>
        <img src="category-2.png" alt="" />
    </div>
    <div class="item">
        <span class="desc">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia, magna eget tempor”
        </span>
        <img src="category-3.png" alt="" />
    </div>
    <div class="item">
        <span class="desc">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia, magna eget tempor”
        </span>
        <img src="category-4.png" alt="" />
    </div>
   </div>
    </div>

  `;

  $(document).ready(function () {
    initSlick();
    $(window).resize(initSlick);
  });

  function initSlick() {
    const width = $(window).width();
    const carousel = $(".unit-homepage-categories .row");

    if (carousel.hasClass("slick-initialized")) {
      carousel.slick("unslick");
    }

    if (width < 768) {
      carousel.slick({
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        dots: true,
        infinite: true,
      });
    } else if (width > 768 && width < 968) {
      carousel.slick({
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 2,
        slidesToScroll: 2,
        adaptiveHeight: true,
        dots: true,
        infinite: true,
      });
    } else {
      carousel.slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
      });
    }
  }

  return quality;
}
