const countdownTarget = Date.parse("2024-12-06T00:00:00Z");
let timer = 0;
let tickInterval = null;

const elementCountdownDays = document.querySelector("#countdown-days");
const elementCountdownHours = document.querySelector("#countdown-hours");
const elementCountdownMinutes = document.querySelector("#countdown-minutes");
const elementCountdownSeconds = document.querySelector("#countdown-seconds");

const elementCountdownDaysText = document.querySelector("#countdown-days-text");
const elementCountdownHoursText = document.querySelector(
  "#countdown-hours-text",
);
const elementCountdownMinutesText = document.querySelector(
  "#countdown-minutes-text",
);
const elementCountdownSecondsText = document.querySelector(
  "#countdown-seconds-text",
);

const countdownInit = () => {
  countdownTick();

  tickInterval = setInterval(() => {
    countdownTick();
  }, 1000);
};

const countdownTick = () => {
  timer = (countdownTarget - Date.now()) / 1000;

  if (timer <= 0) {
    timer = 0;
    clearInterval(tickInterval);
    tickInterval = null;
  }

  countdownText();
};

const countdownText = () => {
  elementCountdownDays.textContent = Math.floor(timer / 86400);
  elementCountdownHours.textContent = Math.floor((timer % 86400) / 3600);
  elementCountdownMinutes.textContent = Math.floor((timer % 3600) / 60);
  elementCountdownSeconds.textContent = Math.floor(timer % 60);

  elementCountdownDaysText.textContent = countdownPadezi(
    1,
    elementCountdownDays.textContent,
  );
  elementCountdownHoursText.textContent = countdownPadezi(
    2,
    elementCountdownHours.textContent,
  );
  elementCountdownMinutesText.textContent = countdownPadezi(
    3,
    elementCountdownMinutes.textContent,
  );
  elementCountdownSecondsText.textContent = countdownPadezi(
    4,
    elementCountdownSeconds.textContent,
  );
};

const countdownPadezi = (id, value) => {
  //dani
  if (id == 1) {
    if (value % 10 == 1 && value != 11) return "Dan";
    else return "Dana";
  }
  //sati
  else if (id == 2) {
    if (value % 10 == 1 && value != 11) return "Sat";
    else if (value % 10 >= 2 && value % 10 <= 4) return "Sata";
    else return "Sati";
  }
  //minuti
  else if (id == 3) {
    if (value % 10 == 1 && value != 11) return "Minut";
    else return "Minuta";
  }
  //sekunde
  else if (id == 4) {
    if (value % 10 == 1 && value != 11) return "Sekunda";
    else if (value % 10 >= 2 && value % 10 <= 4) return "Sekunde";
    else return "Sekundi";
  }
  return "";
};

countdownInit();
