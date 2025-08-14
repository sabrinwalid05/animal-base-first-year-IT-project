document.addEventListener("DOMContentLoaded", () => {
  const learnMoreButtons = document.querySelectorAll(".btn");
  const arachnidCards = document.querySelectorAll(".arachnids-card");
  const header = document.querySelector("header");

  learnMoreButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      const card = button.closest(".arachnids-card");
      card.classList.toggle("highlighted");
      console.log("Learn More clicked!", card);

      let messageElement = card.querySelector(".user-message");
      if (!messageElement) {
        messageElement = document.createElement("p");
        messageElement.classList.add("user-message");
        card.appendChild(messageElement);
      }
      messageElement.textContent = " Always remember ! Arachnids differ totally from other insects as they have 4 pairs of legs";
    });
  });

  arachnidCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("hovered");
    });
    card.addEventListener("mouseleave", () => {
      card.classList.remove("hovered");
    });
  });

  header.addEventListener("click", () => {
    header.classList.toggle("header-clicked");
  });
});
