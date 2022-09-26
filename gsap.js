// testing out gsap
gsap.registerPlugin(ScrollTrigger);

// wrap gsap in media query
var w = window.innerWidth;
console.log(w);

if (w >= 1560) {
  // Part 1
  gsap.to("#content", {
    autoAlpha: 0,
    scrollTrigger: {
      id: "Hero Fade",
      trigger: "#aboutheader",
      start: "top top+=0",
      end: "+=700",
      scrub: true,
      // markers: true
    },
  });
  // Part 2
  gsap.to(".section-divider", {
    autoAlpha: 0,
    yPercent: 0,
    scrollTrigger: {
      id: "Fade About Me",
      trigger: "#about",
      start: "-=500",
      end: "+=600",
      scrub: true,
      // markers: true,
    },
  });
  // Part 2
  gsap.to(".about-text h3, .about-text p, .about-images", {
    autoAlpha: 0,
    yPercent: 15,
    scrollTrigger: {
      id: "Fade About Me",
      trigger: "#about",
      start: "+=0",
      end: "+=700",
      scrub: true,
      // markers: true
    },
  });
  // Part 3
  gsap.to(".about-text h3, .about-text p, .about-images", {
    autoAlpha: 0,
    yPercent: 15,
    scrollTrigger: {
      id: "Fade About Me",
      trigger: "#about",
      start: "+=0",
      end: "+=700",
      scrub: true,
      markers: false,
      // markers: true
    },
  });
  // Part 4
  gsap.to(".services-icons, .services-cards", {
    autoAlpha: 0,
    yPercent: 15,
    scrollTrigger: {
      id: "Services Cards",
      trigger: "#services",
      start: "+=0",
      end: "+=700",
      scrub: true,
      markers: false,
      // markers: true
    },
  });
  // Hero to About
  gsap.to(".hero-wrapper", {
    xPercent: 0,
    yPercent: -30,
    scrollTrigger: {
      markers: false,
      trigger: "#about",
      pin: false,
      ease: "power2",
      start: "-=1000",
      end: "+=900",
      scrub: 1,
      // duration: 4,
      toggleActions: "restart play pause restart",
    },
  });
  // About Marker
  gsap.to("[attribute=about]", {
    xPercent: 0,
    yPercent: 0,
    rotate: 90,
    scrollTrigger: {
      markers: false,
      trigger: ".about-wrapper",
      pin: false,
      ease: "power2",
      start: "-=700",
      end: "+=400",
      scrub: 1,
      // duration: 4,
      toggleActions: "restart play pause restart",
    },
  });
  // Services Marker
  gsap.to("[attribute=services]", {
    xPercent: 0,
    yPercent: 0,
    rotate: 90,
    scrollTrigger: {
      markers: false,
      trigger: ".work-wrapper",
      pin: false,
      ease: "power2",
      start: "-=1700",
      end: "+=500",
      scrub: 1,
      // duration: 4,
      toggleActions: "restart play pause restart",
    },
  });
  // Work Marker
  gsap.to("[attribute=work]", {
    xPercent: 0,
    yPercent: 0,
    rotate: 90,
    scrollTrigger: {
      markers: false,
      trigger: "#work",
      pin: false,
      ease: "power2",
      start: "-=900",
      end: "+=400",
      scrub: 1,
      // duration: 4,
      toggleActions: "restart play pause restart",
    },
  });
  // Contact Marker
  gsap.to("[attribute=contact]", {
    xPercent: 0,
    yPercent: 0,
    rotate: 90,
    scrollTrigger: {
      markers: false,
      trigger: "#contact",
      pin: false,
      ease: "power2",
      start: "-=700",
      end: "+=400",
      scrub: 1,
      // duration: 4,
      toggleActions: "restart play pause restart",
    },
  });
}
