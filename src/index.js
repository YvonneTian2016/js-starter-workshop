// change require to es6 import style
import $ from 'jquery';
//import './style.scss';
//const $ = require('jquery');

let count = 0;

function counter() {
  count++;
  $('#main').html(`You have been on this page for ${count} seconds`);
}

setInterval(counter, 1000);

//$('#main').html('You‘ve been on this page for ${num} seconds');


//$('#main').html('Here we go!');
//console.log('starting up!');
