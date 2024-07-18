export function createFooter() {
  const footer = document.createElement("section");
  footer.className = "unit-homepage-footer";

  footer.innerHTML = `
    <span class="main-text">
        Get in touch with us, we’re always here for you
    </span>
    <div class="flex-container">
        <div class="flex-container">
            <div class="icon-container">
                <img src="/footer-1.png" alt=""/>
            </div>
            <div class="support-container">
                <span class="title">
                    We're available to chat live
                </span>
                <span class="btn-text">
                    Chat with us
                </span>
            </div>
        </div>
        <div class="flex-container">
            <div class="icon-container">
                <img src="/footer-2.png" alt=""/>
            </div>
            <div class="support-container">
                <span class="title">
                    support@cosyhousecollection.com
                </span>
                <span class="btn-text">
                    Email Us
                </span>
            </div>
        </div>
    </div>
  `;

  return footer;
}
