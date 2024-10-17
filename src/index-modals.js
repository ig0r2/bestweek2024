const body = document.querySelector("body"); // Select body for scroll control
const modal = document.querySelector("#predavaci-modal");
const closeButton = modal.querySelector(".close");

const modalSlika = modal.querySelector("[data-id='slika']");
const modalIme = modal.querySelector("[data-id='ime']");
const modalZvanje = modal.querySelector("[data-id='zvanje']");
const modalBio = modal.querySelector("[data-id='bio']");
const modalTel = modal.querySelector("[data-id='tel']");
const modalPredavanje = modal.querySelector("[data-id='predavanje']");

const cards = document.querySelectorAll(".card-predavaci");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    // Set modal data
    modalSlika.src = card.querySelector("[data-id='slika']")?.src;
    modalIme.textContent = card.querySelector("[data-id='ime']")?.textContent;
    modalZvanje.textContent =
      card.querySelector("[data-id='zvanje']")?.textContent;
    modalBio.textContent = card.querySelector("[data-id='bio']")?.textContent;
    modalTel.textContent = card.querySelector("[data-id='tel']")?.textContent;
    modalTel.setAttribute("href", "tel:" + modalTel.textContent);
    modalPredavanje.textContent = card.querySelector(
      "[data-id='predavanje']",
    )?.textContent;

    // Open modal
    // remove hidden class
    modal.classList.remove("!hidden");
    // add fade-in class for transition
    setTimeout(() => {
      modal.classList.add("fade-in");
    }, 100);

    // Add an entry to the browser history to enable back button functionality
    history.pushState({ modalOpen: true }, "", "");
    history.pushState({ modalOpen: true }, "", "");

    // Disable page scrolling when modal is open
    body.classList.add("overflow-hidden");
  });
});

const closeModal = () => {
  // remove fade-in class for transition
  modal.classList.remove("fade-in");
  // remove hidden class after transition ends
  setTimeout(() => {
    modal.classList.add("!hidden");
  }, 250);

  // Re-enable page scrolling when modal is closed
  body.classList.remove("overflow-hidden");

  // Remove the state so that the back button behavior works
  history.back();
};

// Close modal when clicking outside of modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Close modal on close button
closeButton.addEventListener("click", () => {
  closeModal();
});

// Close modal on browser back button
window.addEventListener("popstate", (event) => {
  // Check if the modal is open, and if so, close it
  if (event.state && event.state.modalOpen) {
    closeModal();
  }
});
