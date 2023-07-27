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
.to('.rise',{
    opacity:1,
    y:'-100vh',
    ease:"ease.out",
})
.to('.rise',{
    duration:1.5,
    opacity:0,
    ease:"ease.out",
    onComplete: () => document.querySelector('.body').classList.remove('unscrollable'),
})
.to('.minimize-logo',{
    opacity:1,
    y:'20vh',
})
.to('.title', {
    y:'-50vh',
    opacity:1,
    ease:'ease-in',
})
.to('.scroll-down',0.7,{
    opacity:1,
    y:'-20vh',
    ease:"ease-in"
})
.to('.gallery',{
    opacity:1,
    scrollTrigger:{
        trigger:".gallery",
        start:"-5% top",
    }
})
.to('.section-name',{
    opacity:1,
    ease:"ease-in",
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

function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  }
  
  window.onload = scrollToTop;
  