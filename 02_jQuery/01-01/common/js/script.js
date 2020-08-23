// jQuery版

$(function(){
  $('#by-js').hover(
    function(){
      $(this).css({
        "background-color": "#ff0000"
      });
    },
    function(){
      $(this).css({
        "background-color": "#FDA476"
      })
    }
  );
});



// JavaScript版

// (function(){
//   const elm = document.getElementById('by-js');
//   elm.addEventListener('mouseover', function(e){
//     e.target.style.backgroundColor = "#ff0000";
//   });

//   elm.addEventListener('mouseout', function(e){
//     e.target.style.backgroundColor = "#FDA476";
//   });
// }());