const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const fishData = [
  {
    src: "/images/assets/32bit-basic-whale-optimized.gif",
    width: "9",
  },
  {
    src: "/images/assets/32bit-shark-thresher-optimized.gif",
    width: "6",
  },
  {
    src: "/images/assets/32bit-fish-tuna-optimized.gif",
    width: "4",
  },
  {
    src: "/images/assets/16bit-squid-vampire-export-optimized.gif",
    width: "4",
  },
  {
    src: "/images/assets/32bit-seaturtle-optimized.gif",
    width: "6",
  },
  {
    src: "/images/assets/32bit-fish-parrot-optimized.gif",
    width: "4",
  },
  {
    src: "/images/assets/shark-hammerhead-swimming-optimized.gif",
    width: "7",
  },
  {
    src: "/images/assets/seahorse-hippocampus-kuda-optimized.gif",
    width: "3",
  },
  {
    src: "/images/assets/fish-angler-optimized.gif",
    width: "5",
  },
];

const container = document.getElementById("fish-container");
let generateBubblesInterval;

const addFish = (fishType, count) => {
  const containerHeight = container.getBoundingClientRect().height;

  for (let i = 0; i < count; i++) {
    const fish = document.createElement("img");
    fish.classList.add("fish");
    fish.classList.add("absolute");
    fish.src = fishType.src;
    fish.style.width = fishType.width + "rem";
    // Random vertical position 30%-90%
    fish.style.top = `${(random(30, 90) / 100) * containerHeight}px`;

    // Randomly choose one of the animations
    const randomAnimation = `moveFish${random(1, 10)}`;
    const randomDuration = random(20, 60);
    fish.style.animation = `${randomAnimation} ${randomDuration}s ease-in-out infinite`;

    container.appendChild(fish);
  }
};

// Add 3-5 fish of each type (wait 2sec for container to gain proper height)
setTimeout(
  () =>
    fishData.forEach((fishType) => {
      addFish(fishType, random(3, 5));
    }),
  2000,
);

const generateBubbles = (count) => {
  for (let i = 0; i < count; i++) {
    const bubble = document.createElement("img");
    bubble.classList.add("bubble");
    bubble.classList.add("absolute");
    bubble.src = "/images/assets/bubble-fill.png";
    bubble.style.bottom = "50px";
    bubble.style.left = `${random(0, 100)}vw`;
    bubble.style.width = `${random(4, 12)}px`;

    const randomDuration = random(8, 30);
    bubble.style.animation = `moveBubble ${randomDuration}s linear`;

    container.appendChild(bubble);

    // Remove bubble after animation ends
    bubble.addEventListener("animationend", () => {
      bubble.remove();
    });
  }
};

const startAnimation = () => {
  // Generate 10 bubbles every 2 seconds
  generateBubblesInterval = setInterval(() => {
    generateBubbles(10);
  }, 2000);
  container.classList.remove("paused");
};

const stopAnimation = () => {
  clearInterval(generateBubblesInterval);
  container.classList.add("paused");
};

// Observer to track when the container enters or leaves the viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // If the container is visible
        startAnimation();
      } else {
        // If the container is not visible
        stopAnimation();
      }
    });
  },
  {
    threshold: 0.1, // stop when less than 10% of the container is visible
  },
);
observer.observe(container);
