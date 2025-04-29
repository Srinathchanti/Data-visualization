function scrollToBlog() {
  const blogSection = document.getElementById("blog");
  blogSection.scrollIntoView({ behavior: "smooth" });
}

// Scroll Animation
document.addEventListener('DOMContentLoaded', function () {
  const faders = document.querySelectorAll('.fade-in');

  function appearOnScroll() {
    faders.forEach(fader => {
      const rect = fader.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        fader.classList.add('show');
      }
    });
  }

  window.addEventListener('scroll', appearOnScroll);
  appearOnScroll(); // Run once on page load
});
