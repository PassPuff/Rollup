document.addEventListener("DOMContentLoaded", function () {
  const artists = document.querySelectorAll(".js-rollup-item");

  // Function to remove active class from all artists
  function removeActiveClasses() {
    artists.forEach((artist) => {
      artist.classList.remove("rollup__item--active");
    });
  }

  // Initialize the first artist as active
  if (artists.length > 0) {
    artists[0].classList.add("rollup__item--active");
  }

  // Add mouseover event listeners to all  artists
  artists.forEach((artist, index) => {
    artist.addEventListener("mouseover", () => {
      removeActiveClasses();
      artist.classList.add("rollup__item--active");
    });
  });
});
