

(function($){
//기능 1 :header기능이 스크롤 처리해 상단에 올라오면 position:fixed 처리
var win = $(window);
var headBox = $('#headBox');
var headOffset = headBox.offset().top;
var headCon = headBox.find('.container');
var gnb = headBox.find('#gnb');
//var headDd = headBox.find('dd');

var winH =  win.height();
var scrollOffset = 0;

// 스크롤 처리시 
win.on('scroll',function(e){

//스크롤이 얼만큼 움직였는지 파악	
var scrollOffset = $(this).scrollTop();

// 스크롤 양과 headOffset의 크기값을 비교하여 처리 
var vs = headOffset <= scrollOffset;


if (vs) {
	headBox.css({position:'fixed',top:0,bottom:'auto'});


}else{
	headBox.removeAttr('style');
}

//화면의 전체 높이를 기준으로 절반 아래로 헤더가 있으면 위로하위메뉴 나타나게 만들기
var heightVs = scrollOffset < winH/2;

if(heightVs){
	//true인경우
	headCon.addClass('up');


}else{
      headCon.removeClass('up');
	//false인경우
}

});

//기능1의 2번째 처리: header메뉴에 마우스 올리거나 포커스었을때 하위메뉴는 어떻게 나타나야 하는가?


var addView = function(e){
	e.preventDefault();
	headCon.addClass('view');
};


var removeView = function(e){
	e.preventDefault();
	headCon.removeClass('view');
};

gnb.on({'mouseenter' : addView , 'mouseleave' : removeView});




//2번째 처리시부차적 문제: header의 위치가 하단에 있는 경우와 상단에 있는 경우에 따라,
// 하위메뉴는 보이는 형태가 어떻게 나타나야 하는가?

// 전체를 기준으로 봐야하는데 이 전체는 어느 크기일까? ($(window).height)





})(jQuery);