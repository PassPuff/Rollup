const launchRollup = (item) => {
  const items = document.querySelectorAll(item);

  if (!items) return;

// Function to remove active class from all items
  function removeActiveClasses() {
    items.forEach((artist) => {
      artist.classList.remove("rollup__item--active");
    });
  }

// Initialize the first artist as active
  if (items.length > 0) {
    items[0].classList.add("rollup__item--active");
  }

// Add mouseover event listeners to all  items
  items.forEach((artist, index) => {
    artist.addEventListener("mouseover", () => {
      removeActiveClasses();
      artist.classList.add("rollup__item--active");
    });
  });
}


launchRollup(".js-rollup-item");