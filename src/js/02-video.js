import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.addEventListener('iframe');
const player = new Player(iframe);

const onPlay = function (data) {};
