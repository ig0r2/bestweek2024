const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const detectCollision = (bolt, alien) => {
  const boltRect = bolt.getBoundingClientRect();
  const alienRect = alien.getBoundingClientRect();

  return (
    boltRect.left < alienRect.right &&
    boltRect.right > alienRect.left &&
    boltRect.top < alienRect.bottom &&
    boltRect.bottom > alienRect.top
  );
};

const container = document.querySelector("#space-container");
const spaceship = document.querySelector("#spaceship");

const createAlien = () => {
  const alien = document.createElement("img");
  alien.classList.add("alien");
  alien.src = `/images/assets/alien-${random(1, 3)}.png`;

  alien.style.bottom = "70vh";

  container.appendChild(alien);

  alien.addEventListener("animationend", () => alien.remove());
};

const spawnAliens = () => {
  createAlien();
  setInterval(createAlien, 2000);
};

const shootBlaster = () => {
  const bolt = document.createElement("img");
  bolt.src = "/images/assets/spaceship-bolts.png";
  bolt.classList.add("bolt");

  let shipRect = spaceship.getBoundingClientRect();
  let containerRect = container.getBoundingClientRect();
  let shipPosX = shipRect.left - containerRect.left;
  let shipPosY = shipRect.top - containerRect.top;

  bolt.style.left = `${shipPosX}px`;
  bolt.style.top = `${shipPosY + 20}px`;

  container.appendChild(bolt);

  bolt.addEventListener("animationend", () => bolt.remove());

  // Check for collisions every frame
  const intervalId = setInterval(() => {
    const aliens = document.querySelectorAll(".alien");
    aliens.forEach((alien) => {
      if (detectCollision(bolt, alien)) {
        bolt.remove();
        alien.remove();
        clearInterval(intervalId); // Stop checking once collision occurs
      }
    });
  }, 50); // Check every 50ms
};

const autoShoot = () => {
  shootBlaster();
  setTimeout(autoShoot, random(50, 1000));
};

spawnAliens();
autoShoot();
