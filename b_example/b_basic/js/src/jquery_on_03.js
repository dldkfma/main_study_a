(function($){

var btn1 = $('.btn').children('button').eq(0);
var btn2 = $('.btn').children('button').eq(1);
var viewBox = $('.view_box');


btn1.on('click', function(e){

e.preventDefault();

console.log('?');
viewBox.css({transform:'translate(0)', transition:'all 300ms ease'});

});


btn2.on('click', function(e){

e.preventDefault();
viewBox.css({transform:'translate(-50%)', transition:'all 300ms ease'});

});



//clientX,clientY -> 브라우저 기준의 죄표
//offsetX,offsetY -> 이벤트 대상요소의 상대적 좌표.
//pageX,pageY     -> 문서 전체의 기준으로 한 좌표.
//screenX,screenY -> 모니터 화면 기준으로 좌표 위치를 찍는다.  

// swipe 기능 이해하기
//touchstart 터치가 시작되는 지점을 체크하는 것.

$(document).on('touchstart', function(e){

var x = e.touches[0].pageX;
var y = e.touches[0].pageY
console.log(x);

});



$(document).on('touchend', function(e){

var x = e.changedTouches[0].pageX;
console.log('터치끝:' , x);

});


$(window).on('touchmove', function(e){
console.log(e.originalEvent.touches[0].pageX);
var move = e.originalEvent.touches[0].pageX;

$('.view_box').css({marginLeft:move});
});



})(jQuery);

//브라우저 크기값 계산

