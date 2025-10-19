# Lazarev Agency Page Clone - README

## 1. Introduction

This project is a fully responsive, single-page clone of the Lazarev.agency website, focusing on its hero section and several other key animated components. It is built using modern web technologies to create a fluid, high-performance user experience with complex animations and a layout that adapts seamlessly across mobile, tablet, and desktop devices.

The primary goal is to recreate advanced animations, including scroll-based effects, hover interactions, and a dynamic navigation system, all powered by the GreenSock Animation Platform (GSAP).

---

## 2. Core Features

* **Fully Responsive Design:** The layout uses a mobile-first approach with fluid typography (`clamp()`) and adaptive grids, ensuring a polished look on all screen sizes.
* **Smooth Scrolling:** Implemented using the **Lenis** library, providing a smooth, high-performance scrolling experience that integrates perfectly with GSAP's ScrollTrigger.
* **Adaptive Navigation:**
    * **Mobile/Tablet:** A clean, functional hamburger menu that toggles a full-screen navigation overlay.
    * **Desktop:** A multi-column dropdown menu that animates elegantly on hover.
* **Advanced Animations with GSAP:**
    * **Loading Animation:** An engaging initial animation where the page appears to "unfold" into view.
    * **Scroll-Triggered Effects:** Elements animate into view as the user scrolls down the page.
    * **Hover Interactions:** Various interactive elements, including buttons with a 3D text-reveal effect and videos that play automatically on hover.
    * **Marquee/Ticker:** An infinite horizontal scroll of logos at the bottom of the hero section.

---

## 3. Technologies Used

* **HTML5:** For the core structure of the website.
* **CSS3:** For all styling, layout (Flexbox/Grid), and responsive media queries.
* **JavaScript (ES6):** For interactivity and orchestrating all animations.
* **GSAP (GreenSock Animation Platform):** The primary library for all animations.
    * **ScrollTrigger:** A GSAP plugin used for creating scroll-based animations.
* **Lenis:** A lightweight library for smooth scrolling that is compatible with ScrollTrigger.
* **SplitType:** A library used to split text into characters for advanced text animations.

---

## 4. Code Highlight: Conditional Navigation Animation

A key aspect of the site's responsive behavior is how it handles different navigation animations for different screen sizes. The selected code snippet is central to this logic:

```javascript
if (window.innerWidth >= 1024) {
    setupNavAnimation();
}
