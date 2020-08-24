// jQuery版

$(function(){
  let images = $('.bnr__list--img');
  let lists = $('.bnr__list li');

  const imgW = images[0].width;
  const imgH = images[0].height;

  $('.bnr').width(imgW).height(imgH);

  for(let i = 0; i < lists.length; i++){
    $(lists[i]).css({
      "top": imgH * i,
      "transition": "all 0.5s ease"
    });
    $('.bnr__scrollCircles').append('<li></li>');
  }

  $('.bnr__scrollCircles li:first').addClass('active');

  let circles = $('.bnr__scrollCircles li');
  let activeIndex = 0;

  function setCircles(){
    if(activeIndex < circles.length - 1){
      $(circles).removeClass('active');
      $(circles[activeIndex + 1]).addClass('active');
      activeIndex++;
    } else {
      activeIndex = 0;
      $(circles).removeClass('active');
      $(circles[activeIndex]).addClass('active');
    }
  }

  let wthrToInit = false;

  setInterval(function(){
    if(!wthrToInit){
      for(let i = 0; i < lists.length; i++){
        const elmH = $(lists[i]).position().top;
        $(lists[i]).css({
          "top": elmH - imgH
        });
      }
      if($(lists[lists.length - 2]).position().top == 0){
        wthrToInit = !wthrToInit;
      }
    } else {
      for(let i = 0; i < lists.length; i++){
        $(lists[i]).css({
          "top": imgH * i
        });
      }
      wthrToInit = !wthrToInit;
    }

    setCircles();
  }, 2000);
});



// JavaScript版

// (function(){
//   let images = document.querySelectorAll('.bnr__list--img');
//   let lists = document.querySelectorAll('.bnr__list li');

//   const imgW = images[0].clientWidth;
//   const imgH = images[0].clientHeight;

//   document.getElementById('bnr').style.width = imgW + "px";
//   document.getElementById('bnr').style.height = imgH + "px";

//   for(let i = 0; i < lists.length; i++){
//     lists[i].style.top = imgH * i + "px";
//     lists[i].style.transition = "all 0.5s ease";
//     document.querySelector('.bnr__scrollCircles').insertAdjacentHTML("beforeend", "<li></li>");
//   }

//   document.querySelector('.bnr__scrollCircles').firstElementChild.classList.add('active');

//   let circles = document.querySelectorAll('.bnr__scrollCircles li');
//   let activeIndex = 0;

//   function setCircles(){
//     if(activeIndex < circles.length - 1){
//       [...circles].forEach(circle => {
//         circle.classList.remove('active');
//       });
//       circles[activeIndex + 1].classList.add('active');
//       activeIndex++;
//     } else {
//       activeIndex = 0;
//       [...circles].forEach(circle => {
//         circle.classList.remove('active');
//       });
//       circles[activeIndex].classList.add('active');
//     }
//   }

//   let wthrToInit = false;

//   setInterval(function(){
//     if(!wthrToInit){
//       for(let i = 0; i < lists.length; i++){
//         const elmH = parseInt(lists[i].style.top);
//         lists[i].style.top = (elmH - imgH) + "px";
//       }
//       if(lists[lists.length - 1].style.top == "0px"){
//         wthrToInit = !wthrToInit;
//       }
//     } else {
//       for(let i = 0; i < lists.length; i++){
//         lists[i].style.top = (imgH * i) + "px";
//       }
//       wthrToInit = !wthrToInit;
//     }

//     setCircles();
//   }, 2000);
// }());