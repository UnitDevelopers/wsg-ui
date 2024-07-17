import $ from "jquery";

export function createBestSellers() {
  const hero = document.createElement("section");
  hero.className = "unit-homepage-best-sellers";

  const getTagByCategory = (category) => {
    switch (category) {
      case "luxury":
        return `<div class="luxury-badge">
                    <img src="/luxury-icon.svg" alt=""/>
                    Luxury Series
                </div>`;

      case "bamboo":
        return `<div class="bamboo-badge">
                    <img src="/bamboo-icon.svg" alt=""/>
                    100% Bamboo
                </div>`;

      case "everyday":
        return `<div class="everyday-badge">
                    <img src="/everyday-icon.svg" alt=""/>
                    Everyday Series
                </div>`;

      default:
        return "";
    }
  };

  $(document).ready(function () {
    const products = [
      {
        id: "1",
        name: "Luxury Down Alternative Comforter",
        discount: "38% off",
        originalPrice: "$144.95",
        salePrice: "$89.95",
        tag: "luxury",
        rating: 5,
        reviews: 255,
        colors: [
          { code: "#ffffff", image: "p1.png" },
          { code: "#808080", image: "p2.png" },
          { code: "#f5f5dc", image: "p3.png" },
          { code: "#800080", image: "p4.png" },
          { code: "#ffffff", image: "p1.png" },
          { code: "#808080", image: "p2.png" },
          { code: "#f5f5dc", image: "p3.png" },
          { code: "#800080", image: "p4.png" },
        ],
      },
      {
        id: "2",
        name: "Comforter Everyday Series",
        discount: "25% off",
        originalPrice: "$129.95",
        salePrice: "$97.45",
        tag: "everyday",
        rating: 4,
        reviews: 150,
        colors: [
          { code: "#ffffff", image: "p1.png" },
          { code: "#808080", image: "p2.png" },
          { code: "#f5f5dc", image: "p3.png" },
          { code: "#800080", image: "p4.png" },
        ],
      },
      {
        id: "3",
        name: "Comforter bamboo",
        originalPrice: "$199.95",
        salePrice: "$99.95",
        tag: "bamboo",
        rating: 4,
        reviews: 100,
        colors: [
          { code: "#ffffff", image: "p1.png" },
          { code: "#808080", image: "p2.png" },
          { code: "#f5f5dc", image: "p3.png" },
          { code: "#800080", image: "p4.png" },
        ],
      },
      {
        id: "4",
        name: "Luxury Down Alternative Comforter",
        discount: "38% off",
        originalPrice: "$144.95",
        salePrice: "$89.95",
        tag: "luxury",
        rating: 5,
        reviews: 255,
        colors: [
          { code: "#ffffff", image: "p1.png" },
          { code: "#808080", image: "p2.png" },
          { code: "#f5f5dc", image: "p3.png" },
          { code: "#800080", image: "p4.png" },
        ],
      },
      {
        id: "5",
        name: "Comforter Everyday Series",
        discount: "25% off",
        originalPrice: "$129.95",
        salePrice: "$97.45",
        tag: "everyday",
        rating: 4,
        reviews: 150,
        colors: [],
      },
      {
        id: "6",
        name: "Comforter bamboo",
        discount: "50% off",
        originalPrice: "$199.95",
        salePrice: "$99.95",
        tag: "bamboo",
        rating: 4,
        reviews: 100,
        colors: [],
      },
      {
        id: "7",
        name: "Luxury Down Alternative Comforter",
        discount: "38% off",
        originalPrice: "$144.95",
        salePrice: "$89.95",
        tag: "luxury",
        rating: 5,
        reviews: 255,
        colors: [
          { code: "#ffffff", image: "p1.png" },
          { code: "#808080", image: "p2.png" },
          { code: "#f5f5dc", image: "p3.png" },
          { code: "#800080", image: "p4.png" },
        ],
      },
      {
        id: "8",
        name: "Comforter Everyday Series",
        discount: "25% off",
        originalPrice: "$129.95",
        salePrice: "$97.45",
        tag: "everyday",
        rating: 4,
        reviews: 150,
        colors: [
          { code: "#ffffff", image: "p1.png" },
          { code: "#808080", image: "p2.png" },
          { code: "#f5f5dc", image: "p3.png" },
          { code: "#800080", image: "p4.png" },
        ],
      },
      {
        id: "9",
        name: "Comforter bamboo",
        discount: "50% off",
        originalPrice: "$199.95",
        salePrice: "$99.95",
        tag: "bamboo",
        rating: 4,
        reviews: 100,
        colors: [
          { code: "#ffffff", image: "p1.png" },
          { code: "#808080", image: "p2.png" },
          { code: "#f5f5dc", image: "p3.png" },
          { code: "#800080", image: "p4.png" },
        ],
      },
      {
        id: "10",
        name: "Luxury Down Alternative Comforter",
        discount: "38% off",
        originalPrice: "$144.95",
        salePrice: "$89.95",
        tag: "luxury",
        rating: 5,
        reviews: 255,
        colors: [],
      },
      {
        id: "11",
        name: "Comforter Everyday Series",
        discount: "25% off",
        originalPrice: "$129.95",
        salePrice: "$97.45",
        tag: "everyday",
        rating: 4,
        reviews: 150,
        colors: [
          { code: "#ffffff", image: "p1.png" },
          { code: "#808080", image: "p2.png" },
          { code: "#f5f5dc", image: "p3.png" },
          { code: "#800080", image: "p4.png" },
        ],
      },
      {
        id: "12",
        name: "Comforter bamboo",
        discount: "50% off",
        originalPrice: "$199.95",
        salePrice: "$99.95",
        tag: "bamboo",
        rating: 4,
        reviews: 100,
        colors: [],
      },
    ];

    const productList = $(".product-list");

    products.forEach((product) => {
      const initialImage = product.colors?.length
        ? product.colors[0].image
        : "p3.png";

      const productCard = $(`
            <div class="product-card" id="${product.id}">
                ${
                  product.discount
                    ? `<div class="discount-tag">${product.discount}</div>`
                    : ""
                }
                <div class="product-image-card">
                    <img src="${initialImage}" alt="Product Image" class="product-image">
                </div>
                <div class="product-description">
                    <span class="product-title">${product.name}</span>
                    ${
                      product.discount
                        ? `<span class="price">
                        From <span class="discounted-original-price">${product.originalPrice}</span><span class="sale-price"> ${product.salePrice}</span></span>`
                        : `<span class="price">From <span class="original-price">${product.originalPrice}</span></span>`
                    }
                ${getTagByCategory(product.tag)}
                    <div>
                        <span class="stars">${"★".repeat(
                          product.rating
                        )}${"☆".repeat(5 - product.rating)}</span>
                        <span class="reviews">(${product.reviews})</span>
                    </div>
                    ${
                      product.colors.length
                        ? `
                <div class="color-options">
                    ${product.colors
                      .slice(0, 5)
                      .map(
                        (color) =>
                          `<span class="color" style="background:${color.code}" data-color="${color.code}" data-image="${color.image}"></span>`
                      )
                      .join("")}
                      ${
                        product.colors?.length > 5
                          ? `<span>+${product.colors.length - 5} more</span>`
                          : ""
                      }
                </div>
                `
                        : ""
                    }
                </div>
            </div>
        `);

      productList.append(productCard);

      if (product.colors.length) {
        productCard.find(".color").on("click", function () {
          const color = $(this).data("color");
          const image = $(this).data("image");
          const productImage = productCard.find(".product-image");

          productCard.find(".color").removeClass("active");
          $(this).addClass("active");

          if (image) {
            productImage.attr("src", image);
          }
        });

        productCard.find(".color").first().addClass("active");
      }
    });
  });

  hero.innerHTML = `
    <span class="title">Our Best Sellers</span>
    <div class="product-list"/>
    `;

  return hero;
}
