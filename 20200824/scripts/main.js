gsap.registerPlugin (CustomEase);

gsap.to(".logo", { duration: 5, ease: CustomEase.create("custom", "M0,0 C0.424,0.382 0.327,1.145 0.54,0.546 0.746,-0.036 0.854,0.85 1,1 "), y: -500 });
//gsap.to(".logo", { duration: 3, rotation: 360, scale: 0.5});