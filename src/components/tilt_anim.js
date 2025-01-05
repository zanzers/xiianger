import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


gsap.to(".hero_container", {
    rotateX:  35,
    rotateY: -10,
    scaleX: 0.9,
    ease: "power1.out",
    scrollTrigger: {
        trigger: ".hero_section",
        start: "top top",           
        end: "bottom",          
        scrub: true,               
    }
});




gsap.to(".hero_main", {
    borderRadius: "20px",
    ease: "power2.out",   
    scrollTrigger: {
        trigger: ".hero_section", 
        start: "top top",          
        end: "bottom top",          
        scrub: true,                
    }
});



gsap.to(".about_main", {
    width: "100vw",         
    height: "100vh",         
    borderRadius: "0px",      
    ease: "power2.out",       
    scrollTrigger: {
        trigger: ".about_section", 
        start: "center center",       
        end: "+=800 center",      
        scrub: true,               
        // markers: true,     
        pin: true,
        pinSpacer: true
    },
});



