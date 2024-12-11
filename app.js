gsap.registerPlugin(ScrollTrigger)

// YOUR CODE HERE

const oneLineTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.line-one',
    start: 'top top',
    pin: true,
    scrub: true,
    // markers: true
  }
});
oneLineTimeline
  .from('.line-one span',{y: '100vh', duration: 1, stagger: .2})
  .to('.line-one', {backgroundColor: 'yellow', duration: 1})
  .from('.sun', {x: '50vw', duration: 1})
  .to('.line-one span', {x: '100vw', duration: 1})
  .to('.sun', {x:'-100vw', duration: 1}, "<")
  .to('.line-one', {backgroundColor: 'white', duration: 1}, "<")

const twoLineTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.line-two',
    start: 'top top',
    pin: true,
    scrub: true,
    // markers: true
  }
});

twoLineTimeline
  .from('.line-two span:first-child', {x: '-100vw', scale: 20, opacity: 0, duration: 1})
  .from('.line-two span:last-child', {x: '100vw', scale: 20, opacity: 0, duration: 1}, "<")
  .to('.line-two span:first-child', {y: '-15px', duration: .5})
  .to('.line-two span:first-child', {y: '0', duration: .5})
  .to('.line-two span:last-child', {y: '-15px', duration: .5}, "<")
  .to('.line-two span:last-child', {y: '0', duration: .5});

const threeLineTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.line-three',
    start: 'top top',
    pin: true,
    scrub: true,
    // markers: true
  }
});

threeLineTimeline
  .from('.line-three span', {y: '100vh', duration: 1, stagger: .5})
  .to('.line-three', {backgroundPositionX: 0, color: 'gray', duration: 2})
  .from('.moon', {x: '50vw', duration: 1}, "-=1");
