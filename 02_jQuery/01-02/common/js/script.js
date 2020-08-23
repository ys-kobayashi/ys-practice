// jQuery版

$(function(){
  $('#by-js').hover(
    function(){
      $(this).css({
        "width": "58%",
        "padding-top": "58%"
      });
    },
    function(){
      $(this).css({
        "width": "38%",
        "padding-top": "38%"
      });
    }
  );
});



// JavaScript版

// (function(){
//   const elm = document.getElementById('by-js');
//   elm.addEventListener('mouseover', function(e){
//     e.target.style.width = "58%";
//     e.target.style.paddingTop = "58%";
//   });

//   elm.addEventListener('mouseout', function(e){
//     e.target.style.width = "38%";
//     e.target.style.paddingTop = "38%";
//   });
// }());