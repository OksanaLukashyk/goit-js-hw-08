import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const TIME_KEY = 'videoplayer-current-time';
let savedTime;

player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime(evt) {
  localStorage.setItem(TIME_KEY, JSON.stringify(evt.seconds));
  //   console.log(`You've watched ${Number.parseInt(evt.percent * 100)}% of video`);
}

try {
  savedTime = JSON.parse(localStorage.getItem(TIME_KEY));
} catch (error) {
  savedTime = 0;
}

// savedTime = JSON.parse(localStorage.getItem(TIME_KEY)) || 0;

player.setCurrentTime(savedTime);
