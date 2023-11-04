import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('timeupdate', throttle(savePlayTime, 1000));

 function savePlayTime() {
     player.getCurrentTime().then(function (seconds) {
         localStorage.setItem("videoplayer-current-time", seconds);
     });
 }

 const storedTime = localStorage.getItem('videoplayer-current-time');
    if (storedTime) {
        player.setCurrentTime(storedTime).then(() => {
             player.play();
        });
    } 

