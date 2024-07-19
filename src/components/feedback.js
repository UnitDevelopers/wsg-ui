import $ from "jquery";
import { reviews } from "../data/feedback";

export function createFeedback() {
  const feedback = document.createElement("section");
  feedback.className = "unit-homepage-feedback";
  
  // Updated feedbackHTML to be more suitable for Slick Carousel
  const feedbackHTML = reviews.map(review => `
    <div class="padding">
    <div class="feedback-card ${review.video ? "video-frame" : ""}">
      ${review.video ? `
        <video controls>
          <source src="/public/vid.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <div class="video-overlay">
          <button class="play-btn"><img src="play_button.png" alt="Play"/></button>
          <button class="mute-btn"><img src="mute_button.png" alt="Mute"/></button>
        </div>` : `
        <div class="padding">
          <div>
                        <span class="stars">${"★".repeat(
                          review.rating
                        )}${"☆".repeat(5 - review.rating)}</span>
                    </div>
          <div class="description">${review.content}</div>
          <div class="author">${review.user}</div>
        </div>`}
    </div>
    </div>
  `).join('');

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
    <div class="feedback-list slider">${feedbackHTML}</div> <!-- Notice the added 'slider' class -->
  `;

  document.body.appendChild(feedback);
  initVideoControls();
  initSlickCarousel(); // New function to initialize Slick Carousel

  return feedback;
}

function initSlickCarousel() {
  $('.feedback-list').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3, // Customize number of slides visible
    slidesToScroll: 3, // Customize number of slides to scroll
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true

        }
      }
    ]
  });
  // Custom button functionality
  $('.scroll-left-button').click(function() {
    $('.feedback-list').slick('slickPrev');
  });

  $('.scroll-right-button').click(function() {
    $('.feedback-list').slick('slickNext');
  });
}


function initVideoControls() {
  $(document).on("click", ".play-btn", function () {
    const video = $(this).closest(".video-frame").find("video")[0];
    if (video.paused || video.ended) {
      video.play();
    } else {
      video.pause();
    }
  });

  $(document).on("click", ".mute-btn", function () {
    const video = $(this).closest(".video-frame").find("video")[0];
    video.muted = !video.muted;
  });
}
