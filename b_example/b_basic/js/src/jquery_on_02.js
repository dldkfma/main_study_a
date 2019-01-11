(function($){


var enter = $('.mouseenter');
var over = $ ('.mouseover');
var num1 = 0,
    num2 = 0;



var enterOut = enter.children('.out');

var overOut = over.children('.out');

enter.on('mouseenter',function() {

num1 += 1;

enterOut.text(num1);

});

over.on('mouseover',function() {

num2 += 1;

overOut.text(num2);

});
//============================================================================================

// change 

var sel = $('#sel');
sel.on('change', function(e) {

e.preventDefault();

//var nar = $(this).text();
// 선택된 select요소 내부의 option요소의 경우는 별도의 선택되었을때(selected)의 경우를 지정해주어야 한다. 
var nar = $(this).children('option:selected').text();
$('.change').find('p').children('span').text(nar);

});
 // ==============================================================================

//scroll 

var st = $(window).scrollTop();
var pt = $('.position').offset().top;


$(window).on('scroll',function(){
st = $(window).scrollTop();
$('body').css({backgroundColor:"#ccc"});


if(st >= pt){
	$('.fix').css({position:'fixed', top:0});
}else{
	$('.fix').removeAttr('style');
}

//scroll이벤트 수행시 다음과 같은 메소드를 함께 알고 있어야한다.
//scrollTop : 현재 스크롤바의 상단부분이 얼만큼 떨어져있는지를 파악.
//offset().top : scrollTop(0)기준| offset().left
});
//====================================================================

var porOffset = $('.por').offset().top;
var pofOffset = $('.pof').offset().top;

console.log(porOffset, ' * ',pofOffset);
$('.por').children('span').text(porOffset);
$('.pof').children('span').text(pofOffset);


$(window).on('scroll', function() {

var porOffset = $('.por').offset().top;
var pofOffset = $('.pof').offset().top;

console.log(porOffset, ' * ',pofOffset);
$('.por').children('span').text(porOffset);
$('.pof').children('span').text(pofOffset);

});

})(jQuery);