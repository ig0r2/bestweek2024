import PhotoSwipeLightbox from "photoswipe/lightbox";
import PhotoSwipe from "photoswipe";
import "photoswipe/style.css";

const images = [
  {
    id: 1,
    src: "/images/gallery/bw23/DSC02906-min.jpg",
    width: 1920,
    height: 1280,
  },
  {
    id: 2,
    src: "/images/gallery/bw23/DSC02829-min.jpg",
    width: 1920,
    height: 1280,
  },
  {
    id: 3,
    src: "/images/gallery/bw23/DSC_0215-min.jpg",
    width: 1920,
    height: 1280,
  },
  {
    id: 4,
    src: "/images/gallery/bw23/DSC0381-min.jpg",
    width: 1920,
    height: 1280,
  },
  {
    id: 5,
    src: "/images/gallery/bw23/DSC_0628-min.jpg",
    width: 1920,
    height: 1280,
  },
  {
    id: 6,
    src: "/images/gallery/bw23/DSC_0322-min.jpg",
    width: 1920,
    height: 1280,
  },
  {
    id: 7,
    src: "/images/gallery/bw23/DSC0036-min.jpg",
    width: 1920,
    height: 1280,
  },
  {
    id: 8,
    src: "/images/gallery/bw23/DSC02732-min.jpg",
    width: 1920,
    height: 1280,
  },
  {
    id: 9,
    src: "/images/gallery/bw23/DSC0491-1-min.jpg",
    width: 1920,
    height: 1280,
  },
  {
    id: 10,
    src: "/images/gallery/bw23/DSC0166-min.jpg",
    width: 1920,
    height: 1280,
  },
  {
    id: 11,
    src: "/images/gallery/bw23/DSC0179-min.jpg",
    width: 1920,
    height: 1280,
  },
  {
    id: 12,
    src: "/images/gallery/bw23/DSC0210-min.jpg",
    width: 1920,
    height: 1280,
  },
  {
    id: 13,
    src: "/images/gallery/bw23/DSC0456-min.jpg",
    width: 1920,
    height: 1280,
  },
  {
    id: 14,
    src: "/images/gallery/bw23/DSC0474-min.jpg",
    width: 1920,
    height: 1280,
  },
  {
    id: 15,
    src: "/images/gallery/bw23/DSC0296-min.jpg",
    width: 1920,
    height: 1280,
  },
  {
    id: 16,
    src: "/images/gallery/bw23/DSC0278-min.jpg",
    width: 1920,
    height: 1280,
  },
  {
    id: 17,
    src: "/images/gallery/bw23/DSC0215-min.jpg",
    width: 1920,
    height: 1280,
  },
  {
    id: 18,
    src: "/images/gallery/bw23/DSC02918-min.jpg",
    width: 1920,
    height: 1280,
  },
  {
    id: 19,
    src: "/images/gallery/bw23/DSC0496-min.jpg",
    width: 1920,
    height: 1280,
  },
  {
    id: 20,
    src: "/images/gallery/bw23/DSC_0425-min.jpg",
    width: 1920,
    height: 1280,
  },
  {
    id: 21,
    src: "/images/gallery/bw23/DSC0125-min.jpg",
    width: 1920,
    height: 1280,
  },
  {
    id: 22,
    src: "/images/gallery/bw23/DSC0491-min.jpg",
    width: 1920,
    height: 1280,
  },
  {
    id: 23,
    src: "/images/gallery/bw23/DSC0405-min.jpg",
    width: 1920,
    height: 1280,
  },
  {
    id: 24,
    src: "/images/gallery/bw23/DSC0496-min.jpg",
    width: 1920,
    height: 1280,
  },
  {
    id: 25,
    src: "/images/gallery/bw23/DSC0676-min.jpg",
    width: 1920,
    height: 1280,
  },
  {
    id: 26,
    src: "/images/gallery/bw23/DSC0839-min.jpg",
    width: 1920,
    height: 1280,
  },
  {
    id: 27,
    src: "/images/gallery/bw23/DSC0935-min.jpg",
    width: 1920,
    height: 1280,
  },
  {
    id: 28,
    src: "/images/gallery/bw23/DSC0211-min.jpg",
    width: 1920,
    height: 1280,
  },
  {
    id: 29,
    src: "/images/gallery/bw23/DSC_0188-min.jpg",
    width: 1920,
    height: 1280,
  },
  {
    id: 30,
    src: "/images/gallery/bw23/DSC_0274-min.jpg",
    width: 1920,
    height: 1280,
  },
  {
    id: 31,
    src: "/images/gallery/bw23/DSC_0637-min.jpg",
    width: 1920,
    height: 1280,
  },
  {
    id: 32,
    src: "/images/gallery/bw23/DSC_0644-min.jpg",
    width: 1920,
    height: 1280,
  },
  {
    id: 33,
    src: "/images/gallery/bw23/DSC02903-min.jpg",
    width: 1920,
    height: 1280,
  },
  {
    id: 34,
    src: "/images/gallery/bw23/DSC02713-min.jpg",
    width: 1920,
    height: 1280,
  },
  {
    id: 35,
    src: "/images/gallery/bw23/DSC02734-min.jpg",
    width: 1920,
    height: 1280,
  },
  {
    id: 36,
    src: "/images/gallery/bw23/DSC02735-min.jpg",
    width: 1920,
    height: 1280,
  },
];

const lightbox = new PhotoSwipeLightbox({
  dataSource: images,
  pswpModule: () => PhotoSwipe,
  wheelToZoom: true,
});

const galleryEl = document.querySelector("#gallery-bw23");

lightbox.addFilter("thumbEl", (thumbEl, data, index) => {
  const el = galleryEl.querySelector('[data-id="' + data.id + '"] img');
  if (el) return el;
  return thumbEl;
});
lightbox.addFilter("placeholderSrc", (placeholderSrc, slide) => {
  const el = galleryEl.querySelector('[data-id="' + slide.data.id + '"] img');
  if (el) return el.src;
  return placeholderSrc;
});
lightbox.init();

window.pswpLightbox = lightbox;
