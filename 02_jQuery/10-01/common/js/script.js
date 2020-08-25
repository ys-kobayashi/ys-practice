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

  function searchZodiac(md){
    return (120 <= md && md <= 218) ? "水瓶座"
      : (219 <= md && md <= 320) ? "魚座"
      : (321 <= md && md <= 419) ? "牡羊座"
      : (420 <= md && md <= 520) ? "牡牛座"
      : (521 <= md && md <= 621) ? "双子座"
      : (622 <= md && md <= 722) ? "蟹座"
      : (723 <= md && md <= 823) ? "獅子座"
      : (823 <= md && md <= 922) ? "乙女座"
      : (923 <= md && md <= 1023) ? "天秤座"
      : (1024 <= md && md <= 1122) ? "蠍座"
      : (1123 <= md && md <= 1221) ? "射手座"
      : (md <= 119 || 1222 <= md) ? "山羊座"
      : "エラーです";
  }

  $('#search').click(function(){
    // const year = parseInt($('#birth__selecters--year option:selected').text());
    const month = parseInt($('#birth__selecters--month option:selected').text());
    const day = parseInt($('#birth__selecters--day option:selected').text());

    const md = (month * 100) + day;

    $('#output').text(searchZodiac(md));
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

//   function searchZodiac(md){
//     return (120 <= md && md <= 218) ? "水瓶座"
//       : (219 <= md && md <= 320) ? "魚座"
//       : (321 <= md && md <= 419) ? "牡羊座"
//       : (420 <= md && md <= 520) ? "牡牛座"
//       : (521 <= md && md <= 621) ? "双子座"
//       : (622 <= md && md <= 722) ? "蟹座"
//       : (723 <= md && md <= 823) ? "獅子座"
//       : (823 <= md && md <= 922) ? "乙女座"
//       : (923 <= md && md <= 1023) ? "天秤座"
//       : (1024 <= md && md <= 1122) ? "蠍座"
//       : (1123 <= md && md <= 1221) ? "射手座"
//       : (md <= 119 || 1222 <= md) ? "山羊座"
//       : "エラーです";
//   }

//   document.getElementById('search').addEventListener('click', function(){
//     // const year = parseInt(slctY.value);
//     const month = parseInt(slctM.value);
//     const day = parseInt(slctD.value);

//     const md = (month * 100) + day;

//     document.getElementById('output').textContent = searchZodiac(md);
//   });
// }());