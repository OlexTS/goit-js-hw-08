import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const playerRef = document.querySelector('#vimeo-player');
const PLAYERTIME_KEY = 'videoplayer-current-time';

const player = new Player(playerRef);
function onChangeTime(data) {
  localStorage.setItem(
    PLAYERTIME_KEY,
    JSON.stringify(data.seconds)
  );
}
player.on('timeupdate', throttle(onChangeTime, 1000));
if(localStorage.getItem(
   PLAYERTIME_KEY)) {
   player.setCurrentTime(localStorage.getItem(PLAYERTIME_KEY));
    }

