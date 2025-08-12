window.addEventListener("DOMContentLoaded", main);

function main() {
  window.addEventListener("mousemove", handleMouseMove);
}

const cursor = document.getElementById("cursor");

function handleMouseMove(e) {
  if (e.type !== "mousemove") return;

  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
}
