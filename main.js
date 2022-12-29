gsap.registerPlugin(ScrollTrigger);
window.onbeforeunload = function () {
  window.scrollTo(0,0);
};
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
  .to('.headerIntro',{
      duration:2,
      y:'-100%',
      onComplete: () => document.querySelector('.body').classList.remove('unscrollable'),
  })
  .to('.Logo',{
    opacity:1,
    y:'40'    
  })
  .to('.welcome-image',2,{
    y:'-100vh',
    scale:'2',
    opacity:1,
    ease:'circ-in',
  })
  .to('.welcome-image',1.5,{
    y:'-87vh',
    scale:'1.5',
    opacity:1,
    ease:'ease-in'
  })
  .to('.title', {
      y:'2vh',
      opacity:1,
      ease:'ease-in',
  })
  .to('.menu-position',0.7,{
    opacity:1,
    ease:"ease-in"
  })
  .to('.gallery',{
      opacity:1,
      ease:'circ.in',
      scrollTrigger:{
          trigger:".scroll-down",
          start:"top top",

      }
  })
  .to('.scroll-down',0.7,{
      y:'2vh',
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
  y:"800%",
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
  y:"900%",
  scrollTrigger:{
      trigger:".gallery",
      start:"top top",
  }
})
gsap.to(".TwitterCard", {
  onComplete: function() {
  this.targets().forEach(elem => elem.classList.add("expand"));
  },
  scrollTrigger:{
    trigger:'.TwitterCard',
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

let expandButton=document.querySelector('.icon-button')
let expandCard=document.querySelector('.TwitterCard')
expandButton.onclick = function(){
    expandCard.classList.toggle('expand')
    expandButton.classList.toggle('expand')
};

let menuToggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu')
menuToggle.onclick = function(){
    menu.classList.toggle('active')
    menuToggle.classList.toggle('active')
 }
let list=document.querySelectorAll('li');
function activeLink(){
    list.forEach((item)=>
    item.classList.remove('active'));
    this.classList.add('active')
}
list.forEach((item)=>
item.addEventListener('click',activeLink)
)

const present=document.querySelector('.present-box');
const cake = document.querySelector('.cake-container');
const topbox=document.querySelector('.top');
const light =document.querySelector('.gift');
const birthdayText = document.querySelector('.birthday-text');
const eatenPart=document.querySelector('.layers');
const decorate= document.querySelector('.display');
const miniUki = document.querySelector('.mini-uki');
const table=document.querySelector('.table');
const dish=document.querySelector('.dish');
const snows=document.querySelector('.snows');
const flake=document.querySelector('.flake');
present.onclick=function(){
  present.classList.remove('bounce')
  light.classList.add('turn-off')
  topbox.classList.add('fly-up')
  table.classList.add('table-up')
  dish.classList.add('dish-up')
  cake.classList.add('visible')
  eatenPart.classList.remove('invisible')
  eatenPart.classList.add('selected')
  present.classList.add('invisible')
  audio.load();
  audio.play();
}
eatenPart.onclick=function(){
  decorate.classList.add('invisible')
  eatenPart.classList.add('invisible')
  miniUki.classList.remove('invisible')
  miniUki.classList.add('uki-falling')
  audio.pause();
  audio.currentTime = 0;
}
miniUki.onclick=function(){
  birthdayText.classList.remove('invisible');
  miniUki.classList.remove('uki-falling');
  miniUki.classList.add('jump')
  table.classList.add('invisible');
  dish.classList.add('invisible');
  snows.classList.remove('overflow');
}
Draggable.create('#drag',{
  bounds:'.body',
});


//ほんとにすみませんん！！！ＷＷ//
//もっといい方法を見つけるために努力します。//
const v1=document.querySelector('.horizontal-one');
const v2=document.querySelector('.horizontal-two');
const v3=document.querySelector('.horizontal-three');
const v4=document.querySelector('.horizontal-four');
const v5=document.querySelector('.horizontal-five');
const v6=document.querySelector('.horizontal-six');
const v7=document.querySelector('.horizontal-seven');
const v8=document.querySelector('.horizontal-eight');
const v9=document.querySelector('.horizontal-nine');
const v10=document.querySelector('.horizontal-ten');
const v11=document.querySelector('.horizontal-eleventh');
const v12=document.querySelector('.horizontal-twelfth');
const v13=document.querySelector('.horizontal-thirteen');
const audio=document.getElementById('Happy-birthday');
const preview1=document.getElementById('song-1');
const preview2=document.getElementById('song-2');
const preview3=document.getElementById('song-3');
const preview4=document.getElementById('song-4');
const preview5=document.getElementById('song-5');
const preview6=document.getElementById('song-6');
const preview7=document.getElementById('song-7');
const preview8=document.getElementById('song-8');
const preview9=document.getElementById('song-9');
const preview10=document.getElementById('song-10');
const preview11=document.getElementById('song-11');
const preview12=document.getElementById('song-12');
const preview13=document.getElementById('song-13');
v1.onmouseenter = function(){
  preview1.play();
};
v1.onmouseleave = function(){
  preview1.pause();
  preview1.currentTime = 0;
};
v2.onmouseenter = function(){
  preview2.play();
};
v2.onmouseleave = function(){
  preview2.pause();
  preview2.currentTime = 0;
};
v3.onmouseenter = function(){
  preview3.play();
};
v3.onmouseleave = function(){
  preview3.pause();
  preview3.currentTime = 0;
};
v4.onmouseenter = function(){
  preview4.play();
};
v4.onmouseleave = function(){
  preview4.pause();
  preview4.currentTime = 0;
};
v5.onmouseenter = function(){
  preview5.play();
};
v5.onmouseleave = function(){
  preview5.pause();
  preview5.currentTime = 0;
};
v6.onmouseenter = function(){
  preview6.play();
};
v6.onmouseleave = function(){
  preview6.pause();
  preview6.currentTime = 0;
};
v7.onmouseenter = function(){
  preview7.play();
};
v7.onmouseleave = function(){
  preview7.pause();
  preview7.currentTime = 0;
};
v8.onmouseenter = function(){
  preview8.play();
};
v8.onmouseleave = function(){
  preview8.pause();
  preview8.currentTime = 0;
};
v9.onmouseenter = function(){
  preview9.play();
};
v9.onmouseleave = function(){
  preview9.pause();
  preview9.currentTime = 0;
};
v10.onmouseenter = function(){
  preview10.play();
};
v10.onmouseleave = function(){
  preview10.pause();
  preview10.currentTime = 0;
};
v11.onmouseenter = function(){
  preview11.play();
};
v11.onmouseleave = function(){
  preview11.pause();
  preview11.currentTime = 0;
};
v12.onmouseenter = function(){
  preview12.play();
};
v12.onmouseleave = function(){
  preview12.pause();
  preview12.currentTime = 0;
};
v13.onmouseenter = function(){
  preview13.play();
};
v13.onmouseleave = function(){
  preview13.pause();
  preview13.currentTime = 0;
};