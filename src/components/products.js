import "slick-carousel";

export function createProductSection(products, id, title) {
  const section = document.createElement("section");
  section.className = "product-section";
  section.id = id;

  const getProductTag = (product) => {
    console.log(product.tag, id);
    if (!!product.discount) {
      return `<span class="discount-tag">${product.discount}</span>`;
    }
    if (
      !!product.tag &&
      !!id.includes("best-sellers") &&
      product.tag !== "Bestseller"
    ) {
      return `<span class="product-tag">${product.tag}</span>`;
    }
    if (
      !!product.tag &&
      !!id.includes("trending") &&
      product.tag !== "Bestseller"
    ) {
      return `<span class="product-tag">${product.tag}</span>`;
    }

    return "";
  };

  const getQualityTag = (quality) => {
    const qualities = {
      luxury: `<div class="luxury-badge"><img src="/luxury-icon.svg" alt=""/>Luxury Series</div>`,
      bamboo: `<div class="bamboo-badge"><img src="/bamboo-icon.svg" alt=""/>100% Bamboo</div>`,
      everyday: `<div class="everyday-badge"><img src="/everyday-icon.svg" alt=""/>Everyday Series</div>`,
    };
    return qualities[quality] || "";
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
        ${getProductTag(product)}
        <div class="product-image-card"><img src="${initialImage}" alt="Product Image" class="product-image"></div>
        <div class="product-description">
          <span class="product-title">${product.name}</span>
          ${
            product.discount
              ? `<span class="price">From <span class="discounted-original-price">${product.originalPrice}</span><span class="sale-price"> ${product.salePrice}</span></span>`
              : `<span class="price">From <span class="original-price">${product.originalPrice}</span></span>`
          }
          ${getQualityTag(product.quality)}
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
    productList.innerHTML += productCards;

    const colorElements = productList.querySelectorAll(".color");
    colorElements.forEach((colorElement) => {
      colorElement.addEventListener("click", function () {
        const color = this.getAttribute("data-color");
        const image = this.getAttribute("data-image");
        const productCard = this.closest(".product-card");
        const productImage = productCard.querySelector(".product-image");

        productCard
          .querySelectorAll(".color")
          .forEach((el) => el.classList.remove("active"));
        this.classList.add("active");

        if (image) {
          productImage.setAttribute("src", image);
        }
      });
    });

    const firstColorElement = productList.querySelector(".color");
    if (firstColorElement) {
      firstColorElement.classList.add("active");
    }
  };

  section.innerHTML = `
    <div class="product-section-header">
      <span class=".product-section title">${title}</span>
      <div class="scroll-buttons">
        <button class="scroll-left-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
            <path d="M6.2959 16.7959L1.5 12L6.2959 7.2041" stroke="#052B66" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M21.5 12L1.5 12" stroke="#052B66" stroke-linecap="round" />
          </svg>
        </button>
        <button class="scroll-right-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
            <path d="M16.7041 7.2041L21.5 12L16.7041 16.7959" stroke="#052B66" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M1.5 12H21.5" stroke="#052B66" stroke-linecap="round" />
          </svg>
        </button>
      </div>
    </div>
    <div class="product-list"></div>
  `;

  document.addEventListener("DOMContentLoaded", () => {
    const productList = section.querySelector(".product-list");
    appendProducts(products, productList);
  });

  return section;
}
