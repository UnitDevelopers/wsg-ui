import { createHero } from "./src/components/hero.js";
import "./src/styles/hero.css";
import "./src/styles/collections.css";
import "./src/styles/quality.css";
import "./src/styles/materials.css";
import "./src/styles/purchase.css";
import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createCollections } from "./src/components/collections.js";
import { createQuality } from "./src/components/quality.js";
import { createPurchase } from "./src/components/purchase.js";
import { createMaterials } from "./src/components/materials.js";

document.body.appendChild(createHero());
document.body.appendChild(createCollections());
document.body.appendChild(createQuality());
document.body.appendChild(createPurchase());
document.body.appendChild(createMaterials());
