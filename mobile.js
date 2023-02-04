window.onbeforeunload = function () {
window.scrollTo(0,0);
};
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.create({
trigger: ".middle",
start: 'top top',
end:'center top',
onToggle: (self) => gsap.to('.body', {
    backgroundColor: self.isActive ? color : '#b274a8',
    duration: 1.4,
}),
});
ScrollTrigger.create({
trigger: ".return",
start: 'top top',
end:'center top',
onToggle: (self) => gsap.to('.body', {
    backgroundColor: self.isActive ? color : '#7B667F',
    duration: 1.4,
}),
});
const timeline =gsap.timeline( { defaults: {duration: 0.8}})
timeline    
.to('.left',{
    opacity:1,
    x:'200px',
    ease:"ease.out",
  })
  .to('.right',{
    opacity:1,
    x:'-200px',
    ease:"ease.out",
  })
  .to('.fall',{
    opacity:1,
    duration:1.8,
    y:'130vh',
    ease:"ease.out",
    onComplete: () => document.querySelector('.body').classList.remove('unscrollable'),
  })
  .to('.fall',{
    duration:2,
    opacity:0,
    ease:"ease.out",
  })
  .to('.surprise',{
    opacity:0,
    ease:"ease.out",
  })
.to('.minimize-logo',{
    opacity:1,
    y:'100px',
})
.to('.title', {
    y:'-30vh',
    opacity:1,
    ease:'ease-in',
})
.to('.gallery',{
    opacity:1,
    scrollTrigger:{
        trigger:".scroll-down",
        start:"top top",
    }
})
.to('.scroll-down',0.7,{
    opacity:1,
    ease:"ease-in"
})
gsap.to('.section-name',4,{
opacity:1,
ease:"ease-in",
scrollTrigger:{
    trigger:".gallery",
    start:"top top",
}
})
gsap.to('.section-name',2.5,{
opacity:1,
scale:'1.2',
y:"50vh",
ease:"ease-in",
scrollTrigger:{
    trigger:".gallery",
    start:"top top",
}
})
gsap.to('.text',2.5,{
opacity:1,
scale:'0.9',
ease:"ease-in",
y:"80vh",
scrollTrigger:{
    trigger:".gallery",
    start:"top top",
}
})
const observer = new IntersectionObserver((entries)=>{
entries.forEach((entry)=>{
    if(entry.isIntersecting){
        entry.target.classList.add("show");
    }else{
        entry.target.classList.remove("show");
    }
});
});
const hiddenElement =document.querySelectorAll('.hidden');
hiddenElement.forEach((el)=> observer.observe(el));