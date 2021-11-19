import throttle from "lodash.throttle";
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on('play', onReadTime);
player.on('timeupdate', throttle(onSaveTime, 1000));

function onSaveTime(evt) {
  const saveTime = evt.seconds;
  localStorage.setItem(LOCALSTORAGE_KEY, saveTime);
}

function onReadTime() {
  let time = localStorage.getItem(LOCALSTORAGE_KEY);
  if (time) {
    player.setCurrentTime(time);
    // player.off('play', onReadTime);
  }
}
