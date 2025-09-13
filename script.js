
document.addEventListener("DOMContentLoaded", function () {
    const topNavSec = document.querySelector(".top-nav-sec");
    const topNavWrapper = document.querySelector(".top-nav-wrapper");
    const stickyMenu = document.querySelector(".sticky-menu");
    const sideMenuBurgerIcon = document.querySelector(".side-menu-burger i");

    // Sticky nav on scroll
    function handleScroll() {
        if (window.scrollY > 100 && window.innerWidth > 768) {
            topNavSec.classList.add("fixed-nav");
        } else if (window.scrollY <= 100) {
            topNavSec.classList.remove("fixed-nav");
        }
    }
    window.addEventListener("scroll", handleScroll);

    // Toggle menu on sticky icon click
    stickyMenu.addEventListener("click", function () {
        topNavWrapper.classList.toggle("clicked");
        const icon = this.querySelector("i");
        if (topNavWrapper.classList.contains("clicked")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    });

    // Side menu burger click
    sideMenuBurgerIcon.addEventListener("click", function () {
        topNavWrapper.classList.toggle("opened");
        if (topNavWrapper.classList.contains("opened")) {
            this.classList.remove("fa-bars");
            this.classList.add("fa-times");
            document.querySelector(".top-nav-wrapper .top-nav .mobile-bottom-contact")
                .style.transition = ".1s .4s";
        } else {
            this.classList.remove("fa-times");
            this.classList.add("fa-bars");
            document.querySelector(".top-nav-wrapper .top-nav .mobile-bottom-contact")
                .style.transition = ".1s";
        }
    });

    // Optional: adjust nav on resize
    window.addEventListener("resize", function () {
        if (window.innerWidth < 991) topNavSec.classList.remove("fixed-nav");
    });
});






// Part-1

var tl = gsap.timeline({scrollTrigger:{
    trigger:"#main",
   //  markers:true,
    start:"50% 50%",
    end:"150% 50%",
    scrub:2,
    pin:true
}});
tl
.to("#center",{
   height: "100vh",
},'a')
.to("#top",{
    top: "-50%",
 },'a')
 .to("#bottom",{
    bottom: "-50%",
 },'a')
.to("#top-h1",{
    top: "60%"
 },'a')
 .to("#bottom-h1",{
    bottom: "-30%"
 },'a')
.to("#center-h1",{
   top: "-30%"
},'a')
.to(".content",{
   delay: -0.2,
   marginTop: "0%"
})





// Part-2

gsap.registerPlugin(ScrollTrigger);

const textElements = gsap.utils.toArray('.text');

textElements.forEach(text => {
  gsap.to(text, {
    backgroundSize: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: text,
      start: 'center 80%',
      end: 'center 20%',
      scrub: true,
    },
  });
});



// Part-3
gsap.config({ trialWarn: false });
gsap.registerPlugin(ScrollTrigger);
gsap.to("#experience", {
  "--target": "0%",
  ease: "none",
  scrollTrigger: {
    trigger: "#experience",

    start: "top top",
    end: "+=1000",
    pin: true,
    scrub: 1
  }
});




// Part-4
const experiences = [
  { 
    companyName: "Barclays UK", 
    companyRole: "Technology Developer Intern", 
    timePeriod: "Jun 2024 - Aug 2024", 
    location: "Northampton, United Kingdom" 
  },
  { 
    companyName: "Tricket", 
    companyRole: "Backend Developer Intern", 
    timePeriod: "Jan 2024 - Mar 2024", 
    location: "Remote" 
  },
  
  { 
    companyName: "AWS AI & ML Scholarship", 
    companyRole: "Scholar - Apprenticeship", 
    timePeriod: "Jul 2023 - Nov 2023", 
    location: "Remote" 
  },
   {
    companyName: "NIT Durgapur", 
    companyRole: "Research Intern - Under Prof. TK Bera", 
    timePeriod: "Jul 2023 - Jan 2024", 
    location: "Durgapur, India" 
  },
  { 
    companyName: "Centre for Cognitive Activities", 
    companyRole: "Web Developer", 
    timePeriod: "Apr 2022 - May 2025", 
    location: "Durgapur, India" 
  },
  
];



const cards = document.querySelectorAll(".card");
const dots = document.querySelectorAll(".dot");

const companyName = document.querySelector(".company-name");
const companyRole = document.querySelector(".company-role");
const timePeriod = document.querySelector(".time-period");
const locationEl = document.querySelector(".location");

const upArrows = document.querySelectorAll(".nav-arrow.up");
const downArrows = document.querySelectorAll(".nav-arrow.down");
let currentIndex = 0;
let isAnimating = false;

function updateCarousel(newIndex) {
	if (isAnimating) return;
	isAnimating = true;

	currentIndex = (newIndex + cards.length) % cards.length;

	cards.forEach((card, i) => {
		const offset = (i - currentIndex + cards.length) % cards.length;

		card.classList.remove(
			"center",
			"up-1",
			"up-2",
			"down-1",
			"down-2",
			"hidden"
		);

		if (offset === 0) {
			card.classList.add("center");
		} else if (offset === 1) {
			card.classList.add("down-1");
		} else if (offset === 2) {
			card.classList.add("down-2");
		} else if (offset === cards.length - 1) {
			card.classList.add("up-1");
		} else if (offset === cards.length - 2) {
			card.classList.add("up-2");
		} else {
			card.classList.add("hidden");
		}
	});

	dots.forEach((dot, i) => {
		dot.classList.toggle("active", i === currentIndex);
	});

	companyName.style.opacity = "0";
companyRole.style.opacity = "0";
timePeriod.style.opacity = "0";
locationEl.style.opacity = "0";

setTimeout(() => {
  companyName.textContent = experiences[currentIndex].companyName;
  companyRole.textContent = experiences[currentIndex].companyRole;
  timePeriod.textContent = experiences[currentIndex].timePeriod;
  locationEl.textContent = experiences[currentIndex].location;

  companyName.style.opacity = "1";
  companyRole.style.opacity = "1";
  timePeriod.style.opacity = "1";
  locationEl.style.opacity = "1";
}, 300);


	setTimeout(() => {
		isAnimating = false;
	}, 800);
}

upArrows.forEach(arrow => {
	arrow.addEventListener("click", () => {
		updateCarousel(currentIndex - 1);
	});
});

downArrows.forEach(arrow => {
	arrow.addEventListener("click", () => {
		updateCarousel(currentIndex + 1);
	});
});

dots.forEach((dot, i) => {
	dot.addEventListener("click", () => {
		updateCarousel(i);
	});
});

cards.forEach((card, i) => {
	card.addEventListener("click", () => {
		updateCarousel(i);
	});
});

document.addEventListener("keydown", (e) => {
	if (e.key === "ArrowUp") {
		updateCarousel(currentIndex - 1);
	} else if (e.key === "ArrowDown") {
		updateCarousel(currentIndex + 1);
	}
});

let touchStartX = 0;
let touchEndX = 0;
let scrollTimeout;
let isScrolling = false;

// Scroll event listener
//if u wnat u can timer to disappear that bottom right scroll button - by gopi
	
	

// Add scroll indicator
function createScrollIndicator() {
	const indicator = document.createElement('div');
	indicator.className = 'scroll-indicator';
	indicator.innerHTML = '';
	document.body.appendChild(indicator);
}

// Initialize scroll indicator
createScrollIndicator();

document.addEventListener("touchstart", (e) => {
	touchStartX = e.changedTouches[0].screenY;
});

document.addEventListener("touchend", (e) => {
	touchEndX = e.changedTouches[0].screenY;
	handleSwipe();
});

function handleSwipe() {
	const swipeThreshold = 50;
	const diff = touchStartX - touchEndX;

	if (Math.abs(diff) > swipeThreshold) {
		if (diff > 0) {
			updateCarousel(currentIndex + 1);
		} else {
			updateCarousel(currentIndex - 1);
		}
	}
}

updateCarousel(0);



// Part-4.1
gsap.to("#education", {
  "--target": "100%", // goes left → right
  ease: "none",
  scrollTrigger: {
    trigger: "#education",
    start: "top top",
    end: "+=1000",
    pin: true,
    scrub: 1
  }
});




// Part-4.2

//Education
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".trigger",
      scrub: 0.5,
      pin: true,
      start: "top top",
      end: "+=150%"
    }
  })
  .to(".box", {
    force3D: true,
    duration: 1,
    xPercent: 100,
    ease: "power1.inOut",
    stagger: { amount: 1 }
  })
  .to(".box", { ease: "power1.out", duration: 1, rotation: "45deg" }, 0)
  .to(".box", { ease: "power1.in", duration: 1, rotation: "0deg" }, 1);








// Part-5
var thatTR;
    class TextRunningEffect {
        constructor() {
            thatTR = this;
            thatTR.interval;
            thatTR.flag = true;
            thatTR.windowScrollTop = 0;
            thatTR.leftWidth = -($(".text-running-way-left .single-services-list").first().outerWidth(true));
            thatTR.leftWidthMove = -($(".text-running-way-left .single-services-list").first().outerWidth(true));
            thatTR.leftTextRow = $(".text-running-way-left .text-row");
            thatTR.rightWidth = -($(".text-running-way-right .single-services-list").first().outerWidth(true));
            thatTR.rightWidthMove = (-($(".text-running-way-right .single-services-list").first().outerWidth(true)) * 2) + window.innerWidth;
            thatTR.rightTextRow = $(".text-running-way-right .text-row");
            thatTR.init();
        }

        init() {
            thatTR.leftTextRow.append($(".text-running-way-left .single-services-list").first().clone(true, true));
            thatTR.leftTextRow.append($(".text-running-way-left .single-services-list").first().clone(true, true));
            thatTR.leftTextRow.css('transform', 'translateX(' + thatTR.leftWidth + 'px)');
            thatTR.rightTextRow.append($(".text-running-way-right .single-services-list").first().clone(true, true));
            thatTR.rightTextRow.append($(".text-running-way-right .single-services-list").first().clone(true, true));
            thatTR.rightTextRow.css('transform', 'translateX(' + (thatTR.rightWidth * 2 + window.innerWidth) + 'px)');
            $(window).scroll(thatTR.windowScroll);
            thatTR.windowScroll();
        }

        windowScroll() {
            var forward;
            if ($(window).scrollTop() > thatTR.windowScrollTop) {
                forward = true;
            } else if ($(window).scrollTop() < thatTR.windowScrollTop) {
                forward = false;
            }
            thatTR.windowScrollTop = $(window).scrollTop();
            if ($(window).scrollTop() + window.innerHeight >= $('.text-running-way-sec').first().offset().top && $(window).scrollTop() <= $('.text-running-way-sec').first().offset().top + $('.text-running-way-sec').innerHeight()) {
                if (thatTR.flag) {
                    thatTR.flag = false;
                    if (forward) {
                        clearInterval(thatTR.interval);
                        thatTR.leftWidthMove -= 200;
                        thatTR.leftTextRow.css({
                            'transition': '.5s',
                            'transform': 'translateX(' + thatTR.leftWidthMove + 'px)',
                        });
                        thatTR.rightWidthMove += 200;
                        thatTR.rightTextRow.css({
                            'transition': '.5s',
                            'transform': 'translateX(' + thatTR.rightWidthMove + 'px)',
                        });
                        setTimeout(thatTR.continueMove, 500);
                    } else if (!forward) {
                        clearInterval(thatTR.interval);
                        if (thatTR.leftWidthMove + 200 > 0 && thatTR.rightWidthMove - 200 < ((thatTR.rightWidth * 3) + window.innerWidth)) {
                            thatTR.leftTextRow.css('transition', 'unset');
                            thatTR.leftWidthMove += thatTR.leftWidth;
                            thatTR.leftTextRow.css('transform', 'translateX(' + thatTR.leftWidthMove + 'px)');
                            thatTR.rightTextRow.css('transition', 'unset');
                            thatTR.rightWidthMove -= thatTR.rightWidth;
                            thatTR.rightTextRow.css('transform', 'translateX(' + thatTR.rightWidthMove + 'px)');
                            setTimeout(function () {
                                thatTR.leftWidthMove += 200;
                                thatTR.leftTextRow.css({
                                    'transition': '.5s',
                                    'transform': 'translateX(' + thatTR.leftWidthMove + 'px)',
                                });
                                thatTR.rightWidthMove -= 200;
                                thatTR.rightTextRow.css({
                                    'transition': '.5s',
                                    'transform': 'translateX(' + thatTR.rightWidthMove + 'px)',
                                });
                                setTimeout(thatTR.continueMove, 500);
                            }, 10);
                        } else if (thatTR.leftWidthMove + 200 > 0) {
                            thatTR.rightWidthMove -= 200;
                            thatTR.rightTextRow.css({
                                'transition': '.5s',
                                'transform': 'translateX(' + thatTR.rightWidthMove + 'px)',
                            });
                            thatTR.leftTextRow.css('transition', 'unset');
                            thatTR.leftWidthMove += thatTR.leftWidth;
                            thatTR.leftTextRow.css('transform', 'translateX(' + thatTR.leftWidthMove + 'px)');
                            setTimeout(function () {
                                thatTR.leftWidthMove += 200;
                                thatTR.leftTextRow.css({
                                    'transition': '.5s',
                                    'transform': 'translateX(' + thatTR.leftWidthMove + 'px)',
                                });
                                setTimeout(thatTR.continueMove, 500);
                            }, 10)
                        } else if (thatTR.rightWidthMove - 200 < ((thatTR.rightWidth * 3) + window.innerWidth)) {
                            thatTR.leftWidthMove += 200;
                            thatTR.leftTextRow.css({
                                'transition': '.5s',
                                'transform': 'translateX(' + thatTR.leftWidthMove + 'px)',
                            });
                            thatTR.rightTextRow.css('transition', 'unset');
                            thatTR.rightWidthMove -= thatTR.rightWidth;
                            thatTR.rightTextRow.css('transform', 'translateX(' + thatTR.rightWidthMove + 'px)');
                            setTimeout(function () {
                                thatTR.rightWidthMove -= 200;
                                thatTR.rightTextRow.css({
                                    'transition': '.5s',
                                    'transform': 'translateX(' + thatTR.rightWidthMove + 'px)',
                                });
                                setTimeout(thatTR.continueMove, 500);
                            }, 10);
                        } else {
                            thatTR.leftWidthMove += 200;
                            thatTR.leftTextRow.css({
                                'transition': '.5s',
                                'transform': 'translateX(' + thatTR.leftWidthMove + 'px)',
                            });
                            thatTR.rightWidthMove -= 200;
                            thatTR.rightTextRow.css({
                                'transition': '.5s',
                                'transform': 'translateX(' + thatTR.rightWidthMove + 'px)',
                            });
                            setTimeout(thatTR.continueMove, 500);
                        }
                    }
                }
            }
        }

        continueMove() {
            thatTR.flag = true;
            thatTR.leftTextRow.css('transition', 'unset');
            thatTR.rightTextRow.css('transition', 'unset');
            thatTR.interval = setInterval(function () {
                if (thatTR.leftWidthMove < thatTR.leftWidth * 2) {
                    var diff = thatTR.leftWidth * 2 - thatTR.leftWidthMove;
                    thatTR.leftWidthMove = thatTR.leftWidth - diff;
                }
                thatTR.leftTextRow.css('transform', 'translateX(' + thatTR.leftWidthMove-- + 'px)');
                if (thatTR.rightWidthMove > thatTR.rightWidth + window.innerWidth) {
                    var diff = thatTR.rightWidthMove - (thatTR.rightWidth + window.innerWidth);
                    thatTR.rightWidthMove = (thatTR.rightWidth * 2) + window.innerWidth + diff;
                }
                thatTR.rightTextRow.css('transform', 'translateX(' + thatTR.rightWidthMove++ + 'px)');
            }, 10);
        }
    }
    new TextRunningEffect();


// Part-6
var tl3 = gsap.timeline({scrollTrigger:{
    trigger: ".part-3",
    start: "50% 50%",
    end: "150% 50%",
    scrub: true,
    pin: true,
    // markers: true,
}})

tl3.to(".cntr-cir",{
   width: "250vw",
   height: "250vw",
})
tl3.to(".cntr-cir h1",{
    opacity: "1",
 })



 document.querySelector(".our-work1").addEventListener("mousemove", function(){
    document.querySelector(".float1").style.display = "initial";
})
document.querySelector(".our-work1").addEventListener("mouseleave", function(){
    document.querySelector(".float1").style.display = "none";
})

document.querySelector(".our-work2").addEventListener("mousemove", function(){
    document.querySelector(".float2").style.display = "initial";
})
document.querySelector(".our-work2").addEventListener("mouseleave", function(){
    document.querySelector(".float2").style.display = "none";
})

document.querySelector(".our-work3").addEventListener("mousemove", function(){
    document.querySelector(".float3").style.display = "initial";
})
document.querySelector(".our-work3").addEventListener("mouseleave", function(){
    document.querySelector(".float3").style.display = "none";
})

document.querySelector(".our-work4").addEventListener("mousemove", function(){
    document.querySelector(".float4").style.display = "initial";
})
document.querySelector(".our-work4").addEventListener("mouseleave", function(){
    document.querySelector(".float4").style.display = "none";
})



var float = document.querySelector(".part-3");
var swing = 0;
var diffswing = 0;

float.addEventListener("mousemove", function(dets){
    diffswing = dets.clientX - swing;
    swing = dets.clientX;
    gsap.to(".float", {
        ease: Power1,
        top: dets.clientY,
        left: dets.clientX,
        xPercent: -60,
        yPercent: -130,
        rotate: gsap.utils.clamp(-100, diffswing*0.3),
    });
})




// Part-7





// Part-7.1
// gsap.registerPlugin(ScrollTrigger);

// const additionalX = { val: 0 };
// let additionalXAnim;
// let offset = 0;
// let originalImages = gsap.utils.toArray(".image");
// const container = document.querySelector(".gallery");
// const sliderWidth = container.scrollWidth; 


// // DUPLICATE IMAGES FOR LOOP
// originalImages.forEach((image) => {
//   var clone = image.cloneNode(true);
//   container.appendChild(clone);
// });

// let images = gsap.utils.toArray(".image");

// // SET ANIMATION
// images.forEach((item) => {
//   gsap.to(item, {
//     x: "-=" + Number(sliderWidth / 2),
//     duration: 50,
//     repeat: -1,
//     ease: "none",
//     modifiers: {
//       x: gsap.utils.unitize((x) => {
//         offset += additionalX.val;
//         x = (parseFloat(x) + offset) % -Number(sliderWidth * 0.5);
//         return x;
//       })
//     }
//   });
// });

// const imagesScrollerTrigger = ScrollTrigger.create({
//   trigger: ".gallery",
//   start: "top 50%",
//   end: "bottom 50%",
//   onUpdate: function (self) {
//     const velocity = self.getVelocity();
//     if (velocity > 0) {
//       if (additionalXAnim) additionalXAnim.kill();
//       additionalX.val = -velocity / 2000;
//       additionalXAnim = gsap.to(additionalX, { val: 0 });
//     }
//     if (velocity < 0) {
//       if (additionalXAnim) additionalXAnim.kill();
//       additionalX.val = -velocity / 4000;
//       additionalXAnim = gsap.to(additionalX, { val: 0 });
//     }
//   }
// });
gsap.registerPlugin(ScrollTrigger);

const additionalX = { val: 0 };
let additionalXAnim;
let offset = 0;
let originalImages = gsap.utils.toArray(".image");
const container = document.querySelector(".gallery");
const sliderWidth = container.offsetWidth;

// DUPLICATE IMAGES FOR LOOP
originalImages.forEach((image) => {
  var clone = image.cloneNode(true);
  container.appendChild(clone);
});

let images = gsap.utils.toArray(".image");

// SET ANIMATION
images.forEach((item) => {
  gsap.to(item, {
    x: "-=" + Number(sliderWidth / 2),
    duration: 30,
    repeat: -1,
    ease: "none",
    modifiers: {
      x: gsap.utils.unitize((x) => {
        offset += additionalX.val;
        x = (parseFloat(x) + offset) % -Number(sliderWidth * 0.5);
        return x;
      })
    }
  });
});

const imagesScrollerTrigger = ScrollTrigger.create({
  trigger: ".gallery",
  start: "top 50%",
  end: "bottom 50%",
  onUpdate: function (self) {
    const velocity = self.getVelocity();
    if (velocity > 0) {
      if (additionalXAnim) additionalXAnim.kill();
      additionalX.val = -velocity / 2000;
      additionalXAnim = gsap.to(additionalX, { val: 0 });
    }
    if (velocity < 0) {
      if (additionalXAnim) additionalXAnim.kill();
      additionalX.val = -velocity / 4000;
      additionalXAnim = gsap.to(additionalX, { val: 0 });
    }
  }
});









//Part-8
// --- GSAP Horizontal Scroll ---
window.addEventListener('load', function() {
    gsap.registerPlugin(ScrollTrigger);

    const scroller = document.querySelector("#cardScroller");

    function getScrollAmount() {
        return scroller.scrollWidth - scroller.clientWidth;
    }

    gsap.to(scroller, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
            trigger: ".horizontal-scroll-wrapper",
            start: "top top",
            end: () => `+=${getScrollAmount()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            // markers: true, // debug purposes
        }
    });

    ScrollTrigger.refresh();
});




