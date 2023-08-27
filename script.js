// Add smooth scrolling to nav links
const navLinks = document.querySelectorAll('nav ul li a');

for (let link of navLinks) {
  link.addEventListener('click', smoothScroll);
}

function smoothScroll(event) {
  event.preventDefault();
  const targetID = event.target.getAttribute('href');
  const targetElement = document.querySelector(targetID);
  const topOffset = 0;
  const elementPosition = targetElement.offsetTop;
  const scrollOptions = {
    top: elementPosition - topOffset,
    behavior: 'smooth'
  };
  window.scrollTo(scrollOptions);
}
