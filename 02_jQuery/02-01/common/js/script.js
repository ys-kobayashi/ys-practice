// jQuery版

$(function(){
  let dspHour = $('#clock__hour--value');
  let dspMin = $('#clock__minutes--value');
  let dspSec = $('#clock__seconds--value');

  function clock() {
    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    if(hour < 10) hour = "0" + hour;
    if(min < 10) min = "0" + min;
    if(sec < 10) sec = "0" + sec;

    dspHour.html(hour);
    dspMin.html(min);
    dspSec.html(sec);
  }

  $(window).on('load', clock());
  window.setInterval(() => {
    clock();
  }, 1000);
});



// JavaScript版

// (function(){
//   let dspHour = document.getElementById('clock__hour--value');
//   let dspMin = document.getElementById('clock__minutes--value');
//   let dspSec = document.getElementById('clock__seconds--value');

//   function clock() {
//     let now = new Date();
//     let hour = now.getHours();
//     let min = now.getMinutes();
//     let sec = now.getSeconds();

//     if(hour < 10) hour = "0" + hour;
//     if(min < 10) min = "0" + min;
//     if(sec < 10) sec = "0" + sec;

//     dspHour.innerHTML = hour;
//     dspMin.innerHTML = min;
//     dspSec.innerHTML = sec;
//   }

//   window.onload = function(){
//     clock();
//     setInterval(() => {
//       clock();
//     }, 1000);
//   }
// }());