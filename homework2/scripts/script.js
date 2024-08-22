$(function(){
   console.log($('#s1').text());
   console.log($('.s2').text());
   console.log($('#second i').text());
   console.log($('q[title]').text());
   console.log($('[target="_blank"]').text());
   console.log($('span.extra').eq(1).text());
   alert($('#s1').text() + $('.s2').text() + $('#second i').text() + $('q[title]').text() + $('[target="_blank"]').text() + $('span.extra').eq(1).text());

})