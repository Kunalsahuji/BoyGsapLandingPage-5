var menu = document.querySelector(".nav i");
var cross = document.querySelector(".nav-right i");
// gsap.from("h1", {
//   x : -100,
//   stagger: 2,
//   yoyo: true,
//   delay: 1,
//   duration: 1,
//   opacity: 0,
// });
gsap.from("img", {
  scale: 0.5,
  stagger: true,
  yoyo: true,
  delay: .5,
  duration: 2,
  opacity: 1,
  repeat: Infinity
});

var tl = gsap.timeline();
gsap.from("h1", {
  y: -100,
  delay: 1,
  duration: 1.5,
  opacity: 1,
  stagger: true,
  yoyo: true,
});
gsap.from(".nav-right i", {
  y: 100,
  delay: 2.5,
  duration: 1.5,
  opacity: 0,
  stagger: true,
  yoyo: true,
});
gsap.from("h1", {
  delay: 3,
  duration: 1.5,
  opacity: 1,
  stagger: true,
  yoyo: true,
  scale: 1.2,
  repeat: Infinity,
});

tl.to(".nav-right", {
  right: 0,
});
tl.from(".nav-right h3", {
  duration: 0.5,
  x: 400,
  stagger: 0.3,
  opacity: 0,
});

tl.pause();

menu.addEventListener("click", function () {
  tl.play();
});

cross.addEventListener("click", function () {
  tl.reverse();
});

