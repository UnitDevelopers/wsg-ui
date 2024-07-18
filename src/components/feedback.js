import $ from "jquery";
import { reviews } from "../data/feedback";

export function createFeedback() {
  const feedback = document.createElement("section");
  feedback.className = "unit-homepage-feedback";

  const feedbackHTML = reviews
    .map(
      (review) => `
    <div class="feedback-card ${review.video ? "video-frame" : ""}">
        
        ${
          review.video
            ? `<div class="feedback-card video-frame">
              <iframe width="300" height="500" src="${review.video}" title="Customer Feedback Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <div class="video-overlay">
                <button class="play-btn">Play</button>
                <button class="mute-btn">Mute</button>
              </div>
            </div>`
            : `<div class="padding">
              <div class="stars">${"★".repeat(review.rating)}${"☆".repeat(
                5 - review.rating
              )}</div>
            <div class="description">${review.content}</div>
            <div class="author">${review.user}</div>
          </div>`
        }
      </div>
  `
    )
    .join("");

  feedback.innerHTML = `
    <div class="best-sellers-header">
      <span class="title">Why our Customers Love Cosy House Collection</span>
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
    <div class="feedback-list">${feedbackHTML}</div>
  `;

  document.body.appendChild(feedback);
  initScrolling();
  initVideoControls();

  return feedback;
}

function initScrolling() {
  const productList = $(".feedback-list");
  $(".scroll-left-button").on("click", function () {
    productList.animate({ scrollLeft: "-=300" }, 200);
  });

  $(".scroll-right-button").on("click", function () {
    productList.animate({ scrollLeft: "+=300" }, 200);
  });
}

function initVideoControls() {
  $(document).on("click", ".play-btn", function () {
    const iframe = $(this).closest(".feedback-card.video").find("iframe")[0];
    const src = iframe.src;
    iframe.src = src.includes("autoplay=1")
      ? src
      : src + (src.includes("?") ? "&" : "?") + "autoplay=1";
  });

  $(document).on("click", ".mute-btn", function () {});
}
