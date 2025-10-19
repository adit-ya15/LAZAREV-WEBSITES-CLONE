function loadingAnimation() {
  var tl = gsap.timeline();
  tl.from("#page1", {
    opacity: 0,
    duration: 0.2,
    delay: 0.2,
  });
  tl.from("#page1", {
    transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
    borderRadius: "150px",
    duration: 2,
    ease: "expo.out",
  });
  tl.from("nav", {
    opacity: 0,
    delay: -0.2,
  });
  tl.from("#page1 h1, #page1 p, #page1 div", {
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
  });
}
loadingAnimation();

function navAnimation() {
  let nav = document.querySelector("nav");

  nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline();

    tl.to("#nav-bottom", {
      height: "21vh",
      duration: 0.5,
    });
    tl.to(".nav-part2 h5", {
      display: "block",
      duration: 0.1,
    });
    tl.to(".nav-part2 h5 span", {
      y: 0,
      // duration:0.3,
      stagger: {
        amount: 0.5,
      },
    });
  });
  nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline();
    tl.to(".nav-part2 h5 span", {
      y: 25,
      stagger: {
        amount: 0.2,
      },
    });
    tl.to(".nav-part2 h5", {
      display: "none",
      duration: 0.1,
    });
    tl.to("#nav-bottom", {
      height: 0,
      duration: 0.2,
    });
  });
}

if (window.innerWidth >= 1024) {
  navAnimation();
}
function page3Animation() {
  document.addEventListener("DOMContentLoaded", () => {
    const circle = document.querySelector(".circle");
    const container = document.querySelector(".videoContainer");

    const circleRadius = 50;

    container.addEventListener("mousemove", (e) => {
      const rect = container.getBoundingClientRect();

      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;

      const maxX = rect.width + circleRadius;
      const maxY = rect.height + circleRadius;
      const minX = -circleRadius;
      const minY = -circleRadius;

      x = Math.max(minX, Math.min(x, maxX));
      y = Math.max(minY, Math.min(y, maxY));

      gsap.to(circle, {
        x: x,
        y: y,
        duration: 1,
        ease: "back.out(3)",
      });
    });
  });
}
page3Animation();

function page4Animation() {
  const cards = document.querySelectorAll(".cardpage1");

  cards.forEach((card) => {
    const video = card.querySelector("video");

    card.addEventListener("mouseenter", () => {
      video.play();
    });

    card.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });
  });
}
page4Animation();

gsap.registerPlugin(MorphSVGPlugin);

function page1Animation() {
  const navButton = document.getElementById("nav-button");
  const svgPath = navButton.querySelector("svg path");
  const svg = navButton.querySelector("svg");
  const originalPath = svgPath.getAttribute("d");
  const hoverPath =
    "M12.6254 5.56286H2.90643V3H17V17.0946H14.4371V7.37464L3.81179 18L2 16.1893L12.6254 5.56286Z";

  navButton.addEventListener("mouseenter", () => {
    gsap.to(svgPath, {
      duration: 0.5,
      morphSVG: hoverPath,
      ease: "power2.inOut",
    });
    gsap.to(navButton, {
      backgroundColor: "#111",
      duration: 0.5,
      color: "#0ba34e",
    });
    gsap.to(svg, {
      backgroundColor: "#0ba34e",
      height: 50,
      width: 50,
      padding: 10,
      borderRadius: "50%",
    });
  });

  navButton.addEventListener("mouseleave", () => {
    gsap.to(svgPath, {
      duration: 0.5,
      morphSVG: originalPath,
      ease: "power2.inOut",
      fill: "#fff", //
    });

    gsap.to(navButton, {
      backgroundColor: "#0ba34e",
      duration: 0.5,
      color: "#fff",
    });

    gsap.to(svg, {
      width: "0.8vw",
      height: "0.8vw",
      backgroundColor: "transparent",
      borderRadius: 0,
      padding: 0,
      duration: 0.5,
    });
  });
}
page1Animation();

const page7 = document.querySelector("#page7");
const content1 = document.querySelector(".content1");
const content2 = document.querySelector(".content2");

const page8 = document.querySelector(".uiux-button");
const com = document.querySelector(".com");
const arrow = page8.querySelector("svg");

let isOpen = true;

page8.addEventListener("click", () => {
  if (!isOpen) {
    gsap.to(com, {
      height: "auto",
      duration: 0.5,
      ease: "power2.out",
      display: "block",
    });

    gsap.to(arrow, {
      rotate: 180,
      duration: 0.2,
      ease: "power2.out",
    });
  } else {
    gsap.to(com, {
      height: 0,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        com.style.display = "none";
      },
    });

    gsap.to(arrow, {
      rotate: 0,
      duration: 0.2,
      ease: "power2.in",
    });
  }

  isOpen = !isOpen;
});

const page9 = document.querySelector(".product-design-button");
const com1 = document.querySelector(".com1");
const arrow1 = page9.querySelector("svg");

let isOpen1 = false;

page9.addEventListener("click", () => {
  if (!isOpen1) {
    gsap.set(com1, { display: "block" });
    gsap.fromTo(
      com1,
      { height: 0, opacity: 0 },
      { height: "auto", opacity: 1, duration: 0.2, ease: "power2.out" }
    );

    gsap.to(arrow1, {
      rotate: 180,
      duration: 0.5,
      ease: "power2.out",
    });
  } else {
    gsap.to(com1, {
      height: 0,
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        gsap.set(com1, { display: "none" });
      },
    });

    gsap.to(arrow1, {
      rotate: 0,
      duration: 0.2,
      ease: "power2.in",
    });
  }

  isOpen1 = !isOpen1;
});

const elem = document.querySelector(".page12-circle");
const elemParent = document.querySelector(".page12");
const elemRight = document.querySelector(".page12-right");
const svgPath12 = document.querySelector(
  '.page12-right svg path[data-morph="start"]'
);
const hoverPath12 = document
  .querySelector('.page12-right svg path[data-morph="end"]')
  .getAttribute("d");

const svg12 = elemRight.querySelector("svg");
const originalPath12 = svgPath12.getAttribute("d");

const xTo = gsap.quickTo(elem, "x", { duration: 0.4, ease: "power2.out" });
const yTo = gsap.quickTo(elem, "y", { duration: 0.4, ease: "power2.out" });

elemParent.addEventListener("mouseenter", () => {
  gsap.to(elem, {
    opacity: 1,
    scale: 1,
    duration: 0.3,
    ease: "power2.out",
  });
  gsap.to(svgPath12, {
    duration: 0.5,
    morphSVG: hoverPath12,
    ease: "power2.inOut",
  });
});

elemParent.addEventListener("mouseleave", () => {
  gsap.to(elem, { opacity: 0, scale: 0, duration: 0.3, ease: "power2.in" });
  gsap.to(svgPath12, {
    duration: 0.5,
    morphSVG: originalPath12,
    ease: "power2.inOut",
    fill: "#fff",
  });
});

elemParent.addEventListener("mousemove", (e) => {
  const rect = elemParent.getBoundingClientRect();

  const x = e.clientX - rect.left - elem.offsetWidth / 2;
  const y = e.clientY - rect.top - elem.offsetHeight / 2;

  xTo(x);
  yTo(y);
});

const elem15 = document.querySelector(".page15-circle");
const elemParent15 = document.querySelector(".page15");
const elemRight15 = document.querySelector(".page15-right");
const svgPath15 = document.querySelector(
  '.page15-right svg path[data-morph="start"]'
);
const hoverPath15 = document
  .querySelector('.page15-right svg path[data-morph="end"]')
  .getAttribute("d");

const svg15 = elemRight.querySelector("svg");
const originalPath15 = svgPath15.getAttribute("d");

const xTo15 = gsap.quickTo(elem15, "x", { duration: 0.4, ease: "power2.out" });
const yTo15 = gsap.quickTo(elem15, "y", { duration: 0.4, ease: "power2.out" });

elemParent15.addEventListener("mouseenter", () => {
  gsap.to(elem15, {
    opacity: 1,
    scale: 1,
    duration: 0.3,
    ease: "power2.out",
  });
  gsap.to(svgPath15, {
    duration: 0.5,
    morphSVG: hoverPath15,
    ease: "power2.inOut",
  });
});

elemParent15.addEventListener("mouseleave", () => {
  gsap.to(elem15, { opacity: 0, scale: 0, duration: 0.3, ease: "power2.in" });
  gsap.to(svgPath15, {
    duration: 0.5,
    morphSVG: originalPath15,
    ease: "power2.inOut",
    fill: "#fff", //
  });
});

elemParent15.addEventListener("mousemove", (e) => {
  const rect = elemParent15.getBoundingClientRect();

  const x = e.clientX - rect.left - elem15.offsetWidth / 2;
  const y = e.clientY - rect.top - elem15.offsetHeight / 2;

  xTo15(x);
  yTo15(y);
});

document.addEventListener("DOMContentLoaded", () => {
  const animatedButtons = document.querySelectorAll(".animated-button");

  animatedButtons.forEach((button) => {
    const spans = button.querySelectorAll("span");
    const textDefaultEl = spans[0];
    const textHoverEl = spans[1];

    const textColor = window.getComputedStyle(textDefaultEl).color;

    textDefaultEl.classList.add("button-text-default");
    textHoverEl.classList.add("button-text-hover");

    const container = document.createElement("div");
    container.className = "button-text-container";
    button.prepend(container);
    container.append(textDefaultEl, textHoverEl);

    const splitTextDefault = new SplitType(textDefaultEl, { types: "chars" });
    const splitTextHover = new SplitType(textHoverEl, { types: "chars" });

    const height = textDefaultEl.offsetHeight;
    container.style.height = `${height}px`;

    gsap.set(splitTextDefault.chars, { color: textColor });
    gsap.set(splitTextHover.chars, { color: textColor });

    gsap.set(splitTextHover.chars, {
      yPercent: 100,
      rotateX: -90,
      opacity: 0,
      transformOrigin: "top center",
    });

    const hoverTimeline = gsap.timeline({ paused: true });

    hoverTimeline
      .to(splitTextDefault.chars, {
        yPercent: -100,
        rotateX: 90,
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        stagger: 0.03,
        transformOrigin: "bottom center",
        color: textColor,
      })
      .to(
        splitTextHover.chars,
        {
          yPercent: 0,
          rotateX: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
          stagger: 0.03,
          color: textColor,
        },
        "-=0.4"
      );

    button.addEventListener("mouseenter", () => hoverTimeline.play());
    button.addEventListener("mouseleave", () => hoverTimeline.reverse());
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const containers = gsap.utils.toArray(".page10-container");

  containers.forEach((container) => {
    const headings = container.querySelectorAll("h1");

    gsap.from(headings, {
      opacity: 0,
      x: (index) => (index + 1) * -10 + "%",
      duration: 1,
      ease: "power2.out",
      stagger: 0.5,
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "bottom 30%",
        scrub: 1,
      },
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const svg = document.querySelector(".rotating-svg");

  gsap.to(svg, {
    rotation: 90,
    duration: 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".page16-card-left",
      scrub: 1,
      start: "top center",
      end: "bottom center",
    },
  });
});
const card = document.querySelector(".lc2");
const video = card.querySelector("video");

card.addEventListener("mouseenter", () => {
  video.play();
});

card.addEventListener("mouseleave", () => {
  video.pause();
  video.currentTime = 0;
});

const card1 = document.querySelector(".lc1");
const video1 = card1.querySelector("video");

card1.addEventListener("mouseenter", () => {
  video1.play();
});

card1.addEventListener("mouseleave", () => {
  video1.pause();
  video1.currentTime = 0;
});

const card2 = document.querySelector(".c1");
const video2 = card2.querySelector("video");

card2.addEventListener("mouseenter", () => {
  video2.play();
});

card2.addEventListener("mouseleave", () => {
  video2.pause();
  video2.currentTime = 0;
});

const card3 = document.querySelector(".c2");
const video3 = card3.querySelector("video");

card3.addEventListener("mouseenter", () => {
  video3.play();
});

card3.addEventListener("mouseleave", () => {
  video3.pause();
  video3.currentTime = 0;
});
