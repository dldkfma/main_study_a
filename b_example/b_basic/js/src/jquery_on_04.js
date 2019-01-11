(function($){
var num = 0;
var winH = $(window).height();
//console.log(winH)

$(window).scrollTop(0);
// 각 div요소의 offset값을 확인

var divOffset = [];
divOffset[0] = $('#wrap').children('div').eq(0).offset().top;
divOffset[1] = $('#wrap').children('div').eq(0).offset().top;
divOffset[2] = $('#wrap').children('div').eq(0).offset().top;
$(window).on('mousewheel DOMMouseScroll',function(e){
// firefox를 제외한 브라우저는 wheelDelta값을 가지고있다.
//console.log(e.originalEvent.wheelDelta); 120, - 120수치를 가짐

//firefox 브라우저는 detail값을 가지고있음.나머지브라우저는 표시되지않음. 
//console.log(e.originalEvent.wheelDelta);

var evt = e.originalEvent;
var delta = '';
if(!evt.detail == 0 ){

	delta = evt.delta * -40;



}else{delta = evt.wheelDelta;}

});



})(jQuery);