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
.to('.full-background-image',{
    duration:1.6,
    opacity:0,
    ease:'circ.in',
    onComplete: () => document.querySelector('.body').classList.remove('unscrollable')
})
.to('.minimize-logo',{
    opacity:1,
    y:'100px',
})
.to('.title', {
    y:'2vh',
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
gsap.to('.flake',{
    onComplete: function() {
      this.targets().forEach(elem => elem.classList.add("fall"));
      },
    scrollTrigger:{
      trigger:'.snow-container',
      start:"top top",
    }
})
gsap.to('.snow-text',{
opacity:1,
y:'50',
duration:3,
ease:"ease-in",
scrollTrigger:{
    trigger:'.snow-container',
    start:"top top",
}
})
gsap.to('.santa-uki',{
opacity:1,
x:'10vw',
filter:blur(6),
delay:2,
ease:"ease-in",
scrollTrigger:{
    trigger:'.snow-container',
    start:"top top",
}
})
gsap.to('.present-box',{
onComplete: function() {
    this.targets().forEach(elem => elem.classList.add("bounce"));
    },
scrollTrigger:{
    trigger:'.gift',
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

const present=document.querySelector('.present-box');
const cake = document.querySelector('.cake-container');
const topbox=document.querySelector('.top');
const light =document.querySelector('.gift');
const birthdayText = document.querySelector('.birthday-text');
const eatenPart=document.querySelector('.layers');
const decorate= document.querySelector('.display')
const miniUki = document.querySelector('.mini-uki')
const audio=document.getElementById('Happy-birthday');
const table=document.querySelector('.table');
const dish=document.querySelector('.dish');
const snows=document.querySelector('.snows')
present.onclick=function(){
  present.classList.remove('bounce')
  light.classList.add('turn-off')
  topbox.classList.add('fly-up')
  table.classList.add('table-up')
  dish.classList.add('dish-up')
  cake.classList.add('visible')
  eatenPart.classList.remove('invisible')
  present.classList.add('invisible')
  audio.load();
  audio.play();
  }
  eatenPart.onclick=function(){
    decorate.classList.add('invisible')
    eatenPart.classList.add('invisible')
    miniUki.classList.remove('invisible')
    miniUki.classList.add('uki-falling')
  }
  miniUki.onclick=function(){
    birthdayText.classList.remove('invisible');
    miniUki.classList.remove('uki-falling');
    miniUki.classList.add('jump')
    table.classList.add('invisible');
    dish.classList.add('invisible');
    snows.classList.remove('overflow');
  }