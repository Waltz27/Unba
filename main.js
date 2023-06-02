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
  .to('.left',1.2,{
    opacity:1,
    x:'200px',
    y:"-20px",
    ease:Elastic.easeOut.config(0.6,0.4),
  })
  .to('.right',1.2,{
    opacity:1,
    x:'-200px',
    y:"-20px",
    ease:Elastic.easeOut.config(0.6,0.4),
  })
  .to('.rise',{
    opacity:1,
    y:'-100vh',
    ease:"ease.out",
    onComplete: () => document.querySelector('.body').classList.remove('unscrollable'),
  })
  .to('.rise',{
    duration:1.5,
    opacity:0,
    ease:"ease.out",
  })
  .to('.surprise',{
    opacity:0,
    ease:"ease.out",
  })
  .to('.Logo',{
    opacity:1,
    y:'40'    
  })
  .to('.welcome-image',1.5,{
    y:'-20vh',
    opacity:1,
    ease:'ease-in',
  })
  .to('.title',1.5, {
      y:'25vh',
      opacity:1,
      ease:'ease-in',
  })
  .to('.menu-position',0.7,{
    opacity:1,
    ease:"ease-out",
  })
  .to('.gallery',{
      y:'-10vh',
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
gsap.to('.menu',2,{
  x:"-42vw",
  y:"-40vh",
  ease:"ease-in",
  scrollTrigger:{
      trigger:".welcome-image",
      start:"top top",
  }
})
gsap.to('.section-name',2.5,{
  opacity:1,
  scale:'1.2',
  ease:"ease-in",
  scrollTrigger:{
      trigger:".scroll-down",
      start:"top top",
  }
})
gsap.to(".TwitterCard", {
  onComplete: function() {
  this.targets().forEach(elem => elem.classList.add("expand"));
  },
  scrollTrigger:{
    trigger:'.ttExpand',
    start:"top top",
  }
})
const Bubble2 =gsap.timeline( { defaults: {duration: 0.8}})
Bubble2
.to('.Youtube-Container',{
  opacity:1,
}) 
.to('.bubbleContainer',{
    duration:2,
    opacity:1,
    scale:1,
    y:'-60vh',
    ease:"ease.out",
    onComplete: () => document.querySelector('.yt-bubble').classList.add('pop'),
})
.to('.youtube',{
    opacity:1,
    ease:"ease-in",
  })
.to(".playlist",{
    duration:1.2,
    opacity:1,
    stagger:{
      each: 0.8,
      from:"start",
      ease:"ease-out",
    },
  })
const scroll1=ScrollTrigger.create({
  trigger:".Youtube-Container",
  start:"top top",
  animation:Bubble2
});

const infoTimeline=gsap.timeline ();
infoTimeline
.to(".info-icon",{
    opacity:1,
    ease:"ease-out",
    duration:2.2,
})
.to(".info-icon",{
    y:'-30vh',
    ease:"ease-in",
    duration:2,
    })
.to(".soap-icon",{
    opacity:0,
    })
.to(".soap-background",{
    width:"80vw",
    height:"200vh",
    y:"40vh",
    position:"relative",
    borderRadius:"20px",
    duration:1.8,
    ease:"ease-out",
})
.to(".info-text",{
    opacity:1,
    y:"-5vh",
})
.to(".profile-card-link",{
  opacity:1,
})
const scroll2=ScrollTrigger.create({
    trigger:".info-container",
    start:"top top",
    animation:infoTimeline,
  });


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
Draggable.create('#drag',{
  bounds:'.body',
});
const imageContainers = document.querySelectorAll('.img-wrapper');

imageContainers.forEach(container => {
  const audio = container.querySelector('audio');
  const image = container.querySelector('.expand-image');
  
  container.addEventListener('mouseover', () => {
    audio.currentTime = 0; 
    audio.play();
  });
  
  container.addEventListener('mouseout', () => {
    audio.pause();
  });
});

var videoId = 'p8A9Gq7HwIQ';

  // Replace the API key below with your own API key.
  var apiKey = 'AIzaSyBi042xGHiRTrCZuq7VntuYkxqbdug8Cuw';

  // Retrieve information about the video using the YouTube API.
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://www.googleapis.com/youtube/v3/videos?id=' + videoId + '&key=' + apiKey + '&part=snippet', true);
  xhr.onload = function() {
    var response = JSON.parse(xhr.responseText);
    var videoTitle = response.items[0].snippet.title;
    var embedCode = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen></iframe>';

    // Add the embed code to the page.
    document.getElementById('player').innerHTML = embedCode;
  };
  xhr.send();

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
}

window.onload = scrollToTop;
