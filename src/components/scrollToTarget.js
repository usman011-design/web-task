// smoothScroll.js
function scrollToTarget(target) {
    const targetElement = document.querySelector(target);
    if (targetElement) {
      const yOffset = -60; // Adjust this value based on your header's height
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
  
  export default scrollToTarget;
  