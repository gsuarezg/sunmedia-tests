const eventsViewport = ["DOMContentLoaded", "load", "scroll", "resize"]
const target = document.getElementById("sunmedia");

/**
 *
 * @param {string} src The video media file url
 * @return {HTMLVideoElement}
 */
var createVideoElement = (url) => {
  const video = document.createElement("video");
  video.src = url;
  video.autoplay = true;
  video.controls = true;
  video.addEventListener("ended", () => video.parentNode.removeChild(video));
  return video;
};

var isElementInViewport = (element) => {
  const r = element.getBoundingClientRect();
  const w = window.innerWidth || document.documentElement.clientWidth;
  const h = window.innerHeight || document.documentElement.clientHeight;
  return r.bottom > 0 && r.right > 0 && r.left < w && r.top < h;
};

var onInsertVideoWhenTargetIsVisible = () => {
  if (isElementInViewport(target)) {
    if (target.firstChild){
      target.removeChild(target.firstChild);
    }
    const videoElm = createVideoElement("https://vod.addevweb.com/sunmedia/demos/v/normal.mp4");
    target.appendChild(videoElm);
    eventsViewport.forEach((event) =>
      window.removeEventListener(event, viewChangedHandler, false)
    );
  }
};

var viewChangedHandler = function (e) {
  onInsertVideoWhenTargetIsVisible();
};

window.addEventListener("load", () => {
    viewChangedHandler();

    eventsViewport.forEach((event) =>
      window.addEventListener(event, viewChangedHandler, false)
    );
}, false);