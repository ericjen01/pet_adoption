//HOME- IMAGE SLIDER----------------------------------------------------------------------
const slideSetting = document.querySelector(".slideSetting");
const images = document.querySelectorAll(".img_text img");
const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");

let counter = 1;
const size = images[counter].clientWidth;
moveSlides(counter);

leftBtn.addEventListener("click", () => {
  setTransition("0.5s");
  counter++;
  moveSlides(counter);
  if (counter >= images.length - 1) {
    endReset();
  }
});

rightBtn.addEventListener("click", () => {
  setTransition("0.5s");
  counter--;
  moveSlides(counter);
  if (counter <= 0) {
    frontReset();
  }
});

autoPlay();

function autoPlay() {
  setTransition("0.5s");
  counter++;
  moveSlides(counter);
  if (counter >= images.length - 1) {
    endReset();
  }
  setTimeout(autoPlay, 5000);
}

function endReset() {
  setTransition("0.001s");
  counter = 0;
  moveSlides(counter);
  slideSetting.addEventListener("webkitTransitionEnd", () => {
    if (counter == 0) {
      setTransition("0.5s");
      counter++;
      moveSlides(counter);
    }
  });
}

function frontReset() {
  setTransition("0.001s");
  counter = images.length - 1;
  moveSlides(counter);
  slideSetting.addEventListener("webkitTransitionEnd", () => {
    if (counter == images.length - 1) {
      setTransition("0.5s");
      counter--;
      moveSlides(counter);
    }
  });
}

function setTransition(timeSpan) {
  slideSetting.style.transition = "transform " + timeSpan + " ease-in-out";
}

function moveSlides(counter) {
  slideSetting.style.transform = "translateX(" + -size * counter + "px)";
}
