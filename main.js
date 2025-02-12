import { createHero } from "./src/components/hero.js";
import "./src/styles/hero.css";
import "./src/styles/collections.css";
import "./src/styles/quality.css";
import "./src/styles/materials.css";
import "./src/styles/purchase.css";
import "./src/styles/footer.css";
import "./src/styles/houseCollection.css";
import "./src/styles/products.css";
import "./src/styles/categories.css";
import "./src/styles/feedback.css";
import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createCollections } from "./src/components/collections.js";
import { createQuality } from "./src/components/quality.js";
import { createPurchase } from "./src/components/purchase.js";
import { createMaterials } from "./src/components/materials.js";
import { createHouseCollection } from "./src/components/houseCollection.js";
import { createFooter } from "./src/components/footer.js";
import { createCategories } from "./src/components/categories.js";
import { createFeedback } from "./src/components/feedback.js";
import { createProductSection } from "./src/components/products.js";
import { bestSellingProducts } from "./src/data/best-sellers.js";
import { trendingProducts } from "./src/data/trending.js";

const bestSellersSection = createProductSection(
  bestSellingProducts,
  "unit-homepage-best-sellers",
  "Our Best Sellers"
);
const trendingSection = createProductSection(
  trendingProducts,
  "unit-homepage-trending-section",
  "Trending & Top Rated"
);

document.body.appendChild(createHero());
document.body.appendChild(createCollections());
document.body.appendChild(createQuality());
document.body.appendChild(bestSellersSection);
document.body.appendChild(createPurchase());
document.body.appendChild(createCategories());
document.body.appendChild(trendingSection);

document.body.appendChild(createMaterials());
document.body.appendChild(createHouseCollection());
document.body.appendChild(createFeedback());
document.body.appendChild(createFooter());
