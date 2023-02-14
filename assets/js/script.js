//preloader
window.onload = function () {
  let preloader = document.querySelector(".preloader");
  preloader.style.display = "none";
};

//lazy load
const lazyLoadImage = () => {
  const images = document.querySelectorAll("img");
  const optionsLazyLoad = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  function handleImg(myImg, observerLazyLoad) {
    myImg.forEach((myImgSingle) => {
      if (myImgSingle.intersectionRatio > 0) {
        loadImage(myImgSingle.target);
      }
    });
  }

  function loadImage(image) {
    image.src = image.getAttribute("data");
  }

  const observerLazyLoad = new IntersectionObserver(handleImg, optionsLazyLoad);

  images.forEach((img) => {
    observerLazyLoad.observe(img);
  });
};
lazyLoadImage();

// animation

const animation = () => {
  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add("element-show");
      }
    });
  }

  let options = {
    threshold: [0.2],
  };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll(".title-animation");
  let deviceAnimation = document.querySelectorAll(".device-animation");
  let deviceAnimationRevert = document.querySelectorAll(
    ".device-animation--revert"
  );
  let opacityAnimation = document.querySelectorAll(".opacity-animation");

  for (let elm of elements) {
    observer.observe(elm);
  }

  for (let elm of deviceAnimation) {
    observer.observe(elm);
  }
  for (let elm of deviceAnimationRevert) {
    observer.observe(elm);
  }
  for (let elm of opacityAnimation) {
    observer.observe(elm);
  }
};
animation();
