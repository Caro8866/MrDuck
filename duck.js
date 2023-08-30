const duckImage = document.querySelector(".duck-image");
const popupBubble = duckImage.querySelector(".popup-bubble");
const quackAudio = document.getElementById("quackAudio");

duckImage.addEventListener("mousemove", (event) => {
  const xOffset = 20; // Adjust the X offset as needed
  const yOffset = -30; // Adjust the Y offset as needed

  popupBubble.style.left = event.clientX + xOffset + "px";
  popupBubble.style.top = event.clientY + yOffset + "px";
});

duckImage.addEventListener("mouseenter", () => {
  quackAudio.currentTime = 0; // Reset audio to the beginning
  quackAudio.play(); // Play the quack sound
  setTimeout(() => {
    quackAudio.play(); // Play the quack sound again after a delay
  }, 500); // Adjust the delay (in milliseconds) as needed
});
