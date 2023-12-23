gsap.registerPlugin(ScrollTrigger);
var gallery = document.getElementById("gallery");
var enabler = document.querySelector(".enable-button");
var out = document.querySelector(".out-button");
var imagelinks = document.getElementsByClassName("image-link");
var body = document.querySelector(".body");
var expandButton = document.querySelector(".icon-button");
var expandCard = document.querySelector(".TwitterCard");
var menuToggle = document.querySelector(".toggle");
var menu = document.querySelector(".menu");
var colorBt = document.querySelector(".color");
var list = document.querySelectorAll("li");
const timeline = gsap.timeline({ defaults: { duration: 0.8 } });
timeline
  .to(".left", 1.2, {
    opacity: 1,
    x: "200px",
    y: "-20px",
    ease: Elastic.easeOut.config(0.6, 0.4),
  })
  .to(".right", 1.2, {
    opacity: 1,
    x: "-200px",
    y: "-20px",
    ease: Elastic.easeOut.config(0.6, 0.4),
  })
  .to(".rise", {
    opacity: 1,
    y: "-100vh",
    ease: "ease.out",
    onComplete: () => body.classList.remove("unscrollable"),
  })
  .to(".rise", {
    duration: 1.5,
    opacity: 0,
    ease: "ease.out",
  })
  .to(".surprise", {
    opacity: 0,
    ease: "ease.out",
  })
  .to(".Logo", {
    opacity: 1,
    y: "40",
  })
  .to(".welcome-image", 1.5, {
    y: "-20vh",
    opacity: 1,
    ease: "ease-in",
  })
  .to(".title", 1.5, {
    y: "25vh",
    opacity: 1,
    ease: "ease-in",
  })
  .to(".menu-position", 0.4, {
    opacity: 1,
    position: "fixed",
    ease: "ease-out",
  })
  .to(".gallery-section", {
    opacity: 1,
    ease: "ease.in",
    scrollTrigger: {
      trigger: ".scroll-down",
      start: "top top",
    },
  })
  .to(".scroll-down", 0.7, {
    y: "2vh",
    opacity: 1,
    ease: "ease-in",
  });
gsap.to(".section-name", 2.5, {
  opacity: 1,
  scale: "1.2",
  ease: "ease-in",
  scrollTrigger: {
    trigger: ".scroll-down",
    start: "top top",
  },
});
gsap.to(".TwitterCard", {
  onComplete: function () {
    this.targets().forEach((elem) => elem.classList.add("expand"));
  },
  scrollTrigger: {
    trigger: ".ttExpand",
    start: "top top",
  },
});
const movingMenu = gsap.timeline();
movingMenu.to(".menu", 2, {
  x: "-42vw",
  y: "-40vh",
  ease: "ease-in",
});
const moveMenu = ScrollTrigger.create({
  trigger: ".menu",
  start: "-100% top",
  animation: movingMenu,
});
const Bubble2 = gsap.timeline({ defaults: { duration: 0.8 } });
Bubble2.to(".Youtube-Container", {
  opacity: 1,
})
  .to(".bubbleContainer", {
    duration: 2,
    opacity: 1,
    scale: 1,
    y: "-60vh",
    ease: "ease.out",
    onComplete: () => document.querySelector(".yt-bubble").classList.add("pop"),
  })
  .to(".youtube", {
    opacity: 1,
    ease: "ease-in",
  })
  .to(".playlist", {
    duration: 1.2,
    opacity: 1,
    stagger: {
      each: 0.8,
      from: "start",
      ease: "ease-out",
    },
  });
const scroll1 = ScrollTrigger.create({
  trigger: ".Youtube-Container",
  start: "top top",
  animation: Bubble2,
});

const infoTimeline = gsap.timeline();
infoTimeline
  .to(".info-icon", {
    opacity: 1,
    ease: "ease-out",
    duration: 2.2,
  })
  .to(".info-icon", {
    ease: "ease-in",
    duration: 2,
  })
  .to(".soap-icon", {
    opacity: 0,
  })
  .to(".soap-background", {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    ease: "ease-out",
  })
  .to(".text-container", {
    opacity: 1,
    scale: 1,
    duration: 0.5,
    ease: "ease-in",
  });
const scroll2 = ScrollTrigger.create({
  trigger: ".info-container",
  start: "top top",
  animation: infoTimeline,
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElement = document.querySelectorAll(".hidden");
hiddenElement.forEach((el) => observer.observe(el));

expandButton.onclick = function () {
  expandCard.classList.toggle("expand");
  expandButton.classList.toggle("expand");
};

menuToggle.onclick = function () {
  menu.classList.toggle("active");
  menuToggle.classList.toggle("active");
  colorBt.classList.toggle("show");
};
function ChangeColor() {
  colorBt.classList.toggle("change");
  body.classList.toggle("change");
}

function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
Draggable.create("#drag", {
  bounds: ".bound",
});
list.forEach((item) => item.addEventListener("click", activeLink));

const apiKey = "AIzaSyBi042xGHiRTrCZuq7VntuYkxqbdug8Cuw";
const playlistId = "PLJwM-kGwTsbyv6sJlHmNg7AWATaYv07zC";

function fetchPlaylistVideos(pageToken = "") {
  const apiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?key=${apiKey}&playlistId=${playlistId}&maxResults=50&part=snippet&fields=items(snippet/resourceId/videoId,snippet/thumbnails)&order=date&pageToken=${pageToken}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      data.items.forEach((item) => {
        const videoId = item.snippet.resourceId.videoId;
        const thumbnailUrl = item.snippet.thumbnails.medium.url;

        createVideoThumbnail(videoId, thumbnailUrl);
      });

      if (data.nextPageToken) {
        fetchPlaylistVideos(data.nextPageToken);
      }
    })
    .catch((error) => console.error("Error:", error));
}

function createVideoThumbnail(videoId, thumbnailUrl) {
  const container = document.createElement("div");
  container.className = "video-thumbnail ";
  const transformClasses = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
  ];
  const randomTransformClass =
    transformClasses[Math.floor(Math.random() * transformClasses.length)];
  container.classList.add(randomTransformClass);
  container.innerHTML = `
                <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank" class="image-link">
                    <img src="${thumbnailUrl}" alt="Video Thumbnail" class="horizontal-image">
                </a>`;
  document.getElementById("gallery").appendChild(container);
}
fetchPlaylistVideos();
function galleryToggle() {
  body.classList.add("unscrollable");
  gallery.classList.remove("blur");
  gallery.style.overflowY = "scroll";
  enabler.style.opacity = "0";
  enabler.style.cursor = "auto";
  for (var i = 0; i < imagelinks.length; i++) {
    imagelinks[i].style.display = "block";
  }
  out.style.opacity = "1";
  out.style.cursor = "pointer";
}
function galleryDisable() {
  body.classList.remove("unscrollable");
  gallery.classList.add("blur");
  gallery.style.overflowY = "hidden";
  out.style.opacity = "0";
  out.style.cursor = "auto";
  enabler.style.opacity = "1";
  enabler.style.cursor = "pointer";
  for (var i = 0; i < imagelinks.length; i++) {
    imagelinks[i].style.display = "none";
  }
}

var id = "p8A9Gq7HwIQ";
var key = "AIzaSyBi042xGHiRTrCZuq7VntuYkxqbdug8Cuw";
var xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://www.googleapis.com/youtube/v3/videos?id=" +
    id +
    "&key=" +
    key +
    "&part=snippet",
  true
);
xhr.onload = function () {
  var response = JSON.parse(xhr.responseText);
  var videoTitle = response.items[0].snippet.title;
  var embedCode =
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/' +
    id +
    '" frameborder="0" allowfullscreen></iframe>';

  // Add the embed code to the page.
  document.getElementById("player").innerHTML = embedCode;
};
xhr.send();

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.onload = scrollToTop;
