import $ from "jquery";
import { bestSellingProducts } from "../data/best-sellers";

export function createBestSellers() {
  const bestSellers = document.createElement("section");
  bestSellers.className = "unit-homepage-best-sellers";

  const getTagByCategory = (category) => {
    const tags = {
      luxury: `<div class="luxury-badge"><img src="/luxury-icon.svg" alt=""/>Luxury Series</div>`,
      bamboo: `<div class="bamboo-badge"><img src="/bamboo-icon.svg" alt=""/>100% Bamboo</div>`,
      everyday: `<div class="everyday-badge"><img src="/everyday-icon.svg" alt=""/>Everyday Series</div>`,
    };
    return tags[category] || "";
  };

  const createProductCard = (product) => {
    const initialImage = product.colors?.length
      ? product.colors[0].image
      : "p3.png";
    const colorOptions =
      product.colors
        ?.slice(0, 5)
        .map(
          (color) =>
            `<span class="color" style="background:${color.code}" data-color="${color.code}" data-image="${color.image}"></span>`
        )
        .join("") || "";

    return `
      <div class="product-card" id="${product.id}">
        ${
          product.discount
            ? `<div class="discount-tag">${product.discount}</div>`
            : ""
        }
        <div class="product-image-card"><img src="${initialImage}" alt="Product Image" class="product-image"></div>
        <div class="product-description">
          <span class="product-title">${product.name}</span>
          ${
            product.discount
              ? `<span class="price">From <span class="discounted-original-price">${product.originalPrice}</span><span class="sale-price"> ${product.salePrice}</span></span>`
              : `<span class="price">From <span class="original-price">${product.originalPrice}</span></span>`
          }
          ${getTagByCategory(product.tag)}
          <div><span class="stars">${"★".repeat(product.rating)}${"☆".repeat(
      5 - product.rating
    )}</span><span class="reviews">(${product.reviews})</span></div>
          ${
            product.colors?.length
              ? `<div class="color-options">${colorOptions}${
                  product.colors.length > 5
                    ? `<span>+${product.colors.length - 5} more</span>`
                    : ""
                }</div>`
              : ""
          }
        </div>
      </div>`;
  };

  const appendProducts = (productArray, productList) => {
    const productCards = productArray.map(createProductCard).join("");
    productList.append(productCards);

    productList.find(".color").on("click", function () {
      const color = $(this).data("color");
      const image = $(this).data("image");
      const productCard = $(this).closest(".product-card");
      const productImage = productCard.find(".product-image");

      productCard.find(".color").removeClass("active");
      $(this).addClass("active");

      if (image) {
        productImage.attr("src", image);
      }
    });

    productList.find(".color").first().addClass("active");
  };

  $(document).ready(function () {
    const products = bestSellingProducts;

    const productList = $(".product-list");

    appendProducts(products, productList);

    productList.on("scroll", function () {
      if (
        productList[0].scrollWidth - productList.scrollLeft() <=
        productList.outerWidth()
      ) {
        appendProducts(products, productList);
      }
    });

    $(".scroll-left-button").on("click", function () {
      productList.animate({ scrollLeft: "-=500" }, 200);
    });

    $(".scroll-right-button").on("click", function () {
      productList.animate({ scrollLeft: "+=500" }, 200);
    });
  });

  bestSellers.innerHTML = `
    <div class="best-sellers-header">
      <span class="title">Our Best Sellers</span>
      <div class="scroll-buttons">
        <button class="scroll-left-button">Scroll Left</button>
        <button class="scroll-right-button">Scroll Right</button>
      </div>
    </div>
    <div class="product-list"/>
  `;

  return bestSellers;
}
