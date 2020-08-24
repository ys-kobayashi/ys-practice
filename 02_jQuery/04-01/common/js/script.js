// jQuery版

$(function(){
  $('#openModal').click(function(){
    $('#modal').addClass('active');
  });

  $('#closeModal').click(function(){
    $('#modal').removeClass('active');
  });
});



// JavaScript版

// (function(){
//   let btn = document.getElementById('openModal');
//   let modal = document.getElementById('modal');
//   let close = document.getElementById('closeModal');

//   btn.addEventListener('click', function(){
//     modal.classList.add('active');
//   });

//   close.addEventListener('click', function(){
//     modal.classList.remove('active');
//   });
// }());