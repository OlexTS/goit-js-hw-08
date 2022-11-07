import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const playerRef = document.querySelector('#vimeo-player');
const playerTime = 'videoplayer-current-time';

const player = new Player(playerRef);
function onChangeTime(data) {
  localStorage.setItem(
    playerTime,
    JSON.stringify(data.seconds)
  );
}
player.on('timeupdate', throttle(onChangeTime, 1000));
if(localStorage.getItem(
   playerTime)) {
   player.setCurrentTime(localStorage.getItem(playerTime));
    }

