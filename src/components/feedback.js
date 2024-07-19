import $ from "jquery";
import { reviews } from "../data/feedback";

export function createFeedback() {
  const feedback = document.createElement("section");
  feedback.className = "unit-homepage-feedback";

  const feedbackHTML = reviews.map(
    (review) => `
      <div class="feedback-card ${review.video ? "video-frame" : ""}">
        ${
          review.video
            ? `
            <div class="video-frame">
              <video width="300" height="500">
                <source src="/vid.mp4" type="video/mp4">
              </video>
              <div class="video-overlay">
                 <span class="author">${review.user}</span>
              </div>
              <div class="video-controls-overlay">
                <button class="play-btn"><img src="play.svg" alt=""/></button>
                <button class="mute-btn"><img src="mute.svg" alt=""/></button>
              </div>
            </div>`
            : `
            <div class="padding">
              <div class="stars"><img src="stars.svg" alt="Stars"/></div>
              <div class="description">${review.content}</div>
              <div class="author">${review.user}</div>
            </div>`
        }
      </div>
    `
  );

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
  const feedbackList = document.querySelector(".feedback-list");
  document
    .querySelector(".scroll-left-button")
    .addEventListener("click", () => {
      feedbackList.scrollBy({ left: -500, behavior: "smooth" });
    });

  document
    .querySelector(".scroll-right-button")
    .addEventListener("click", () => {
      feedbackList.scrollBy({ left: 500, behavior: "smooth" });
    });
}

function initVideoControls() {
  $(document).on("click", ".play-btn", function () {
    const video = $(this).closest(".video-frame").find("video")[0];
    if (video.paused || video.ended) {
      video.play();
      $(this).find("img").attr("src", "pause_button.png");
    } else {
      video.pause();
      $(this).find("img").attr("src", "play_button.png");
    }
  });

  $(document).on("click", ".mute-btn", function () {
    const video = $(this).closest(".video-frame").find("video")[0];
    video.muted = !video.muted;
    $(this)
      .find("img")
      .attr("src", video.muted ? "unmute_button.png" : "mute_button.png");
  });
}
