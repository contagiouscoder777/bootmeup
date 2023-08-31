// Function to simulate typing animation while ignoring <br> tags
function typeEffect(element, speed) {
  const text = element.innerHTML.replace(/<br\s*[\/]?>/gi, ""); // Remove <br> tags
  element.innerHTML = "";

  let i = 0;
  const typingInterval = setInterval(function () {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(typingInterval);
    }
  }, speed);
}

// Function to initiate typing animation
function initiateTypingAnimation() {
  const heading1 = document.getElementById("h11");
  const heading2 = document.getElementById("underh19");

  // Speed of typing animation (adjust as needed)
  const typingSpeed = 70; // milliseconds per character
  const typingSpeed2 = 50; // milliseconds per character

  typeEffect(heading1, typingSpeed);
  setTimeout(function () {
    typeEffect(heading2, typingSpeed2);
  }, heading1.textContent.replace(/<br\s*[\/]?>/gi, "").length * typingSpeed);
}

// Check if the page has finished loading
document.addEventListener("DOMContentLoaded", function () {
  initiateTypingAnimation();
});
