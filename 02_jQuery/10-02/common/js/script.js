// jQuery版

$(function(){
  const slctY = $('#birth__selecters--year');
  const slctM = $('#birth__selecters--month');
  const slctD = $('#birth__selecters--day');

  const now = new Date();

  for(let i = now.getFullYear() - 120; i <= now.getFullYear(); i++){
    $(slctY).prepend(`<option>${i}</option>`);
    if(i == now.getFullYear() - 30){
      $('#birth__selecters--year option:first').attr('selected', 'selected');
    }
  }

  for(let i = 0; i < 12; i++){
    $(slctM).append(`<option>${i+1}</option>`);
    if(i == 0){
      $('#birth__selecters--month option:first').attr('selected', 'selected');
    }
  }

  for(let i = 0; i < 31; i++){
    $(slctD).append(`<option>${i+1}</option>`);
    if(i == 0){
      $('#birth__selecters--day option:first').attr('selected', 'selected');
    }
  }

  function searchZodiac(remainder){
    switch(remainder){
      case 0: return "申";
      case 1: return "酉";
      case 2: return "戌";
      case 3: return "亥";
      case 4: return "子";
      case 5: return "丑";
      case 6: return "寅";
      case 7: return "卯";
      case 8: return "辰";
      case 9: return "巳";
      case 10: return "午";
      case 11: return "未";
      default: break;
    }
  }

  $('#search').click(function(){
    const year = parseInt($('#birth__selecters--year option:selected').text());

    $('#output').text(searchZodiac(((year + 12) % 12)));
  });
});



// JavaScript版

// (function(){
//   const slctY = document.getElementById('birth__selecters--year');
//   const slctM = document.getElementById('birth__selecters--month');
//   const slctD = document.getElementById('birth__selecters--day');

//   const now = new Date();

//   for(let i = now.getFullYear() - 120; i <= now.getFullYear(); i++){
//     slctY.insertAdjacentHTML("afterbegin", `<option value="${i}">${i}</option>`);
//     if(i == now.getFullYear() - 30){
//       slctY.firstElementChild.setAttribute('selected', 'selected');
//     }
//   }

//   for(let i = 0; i < 12; i++){
//     slctM.insertAdjacentHTML("afterbegin", `<option value="${i+1}">${i+1}</option>`);
//     if(i == 0){
//       slctM.firstElementChild.setAttribute('selected', 'selected');
//     }
//   }

//   for(let i = 0; i < 31; i++){
//     slctD.insertAdjacentHTML("afterbegin", `<option value="${i+1}">${i+1}</option>`);
//     if(i == 0){
//       slctD.firstElementChild.setAttribute('selected', 'selected');
//     }
//   }

//   function searchZodiac(remainder){
//     switch(remainder){
//       case 0: return "申";
//       case 1: return "酉";
//       case 2: return "戌";
//       case 3: return "亥";
//       case 4: return "子";
//       case 5: return "丑";
//       case 6: return "寅";
//       case 7: return "卯";
//       case 8: return "辰";
//       case 9: return "巳";
//       case 10: return "午";
//       case 11: return "未";
//       default: break;
//     }
//   }

//   document.getElementById('search').addEventListener('click', function(){
//     const year = parseInt(slctY.value);

//     document.getElementById('output').textContent = searchZodiac(((year + 12) % 12));
//   });
// }());