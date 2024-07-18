export function createPurchase() {
  const purchase = document.createElement("section");
  purchase.className = "unit-homepage-purchase";

  purchase.innerHTML = `
    <img src="/purchase-cover.png" alt=""/>
    <div class="container"></div>
    <div class="section">
            <span class="title">
                Risk Free Purchase
            </span>
            <span class="desc">
                We offer a simple, 100% Satisfaction Guarantee on our products. Love it, or your money back!
            </span>
            <div class="button">
                Shop Now
            </div>
    </div>
  `;

  return purchase;
}
