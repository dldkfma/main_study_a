(function($){

// #viewBox에서 마우스 스크롤시 화면이 이동처리되는 기능 
// 1. 마우스 버튼 (sambtn)클릭시 오른쪽 내용 나타나게 하는 기능 
// 2. 마우스 휠 기능으로 대체

//

var viewbox = $('#viewBox');
var close = viewbox.children('.close');
var sambtn = viewbox.children('.sambtn');
var viewOuter = $('.view_outer');
var viewOuterUl = viewOuter.children('ul');
var viLi = viewOuterUl.find('li');
var viewLiwidth = viewOuterUl.children('li').eq(0).width();
var per = 0;
var i = 0;
//$viewbox.scrollTop();

 //sambtn.on('click',function(){
 //  i +=1;
 //  per -= viewLiwidth
 //  if(i < viLi.length){
 //  viewOuterUl.animate({marginLeft: per});
 //   }

 //});





// 스크롤 처리시 스크롤 바를 보이지 않게 수정

var viewCon = viewOuterUl.wrap('<div class="scroll_box">');
$('.scroll_box').css({width:'100%',height:'103%', paddingBottom:'10px',overflow:'auto'});
viewOuter.css({overflow:'hidden'});




// 마우스 스크롤 처리


var go = true;

if (go){E.wheelDelta}{
	go = false;

}else{

}

viewOuter.on('mousewheel DOMMouseScroll',function(e){
   e.preventDefault();

   var E = e.originalEvent;
   var delta;

   if(E.wheelDelta){
   delta = E.wheelDelta;
   }else{
   	delta = E.derail * -40;
   }

   if(delta <0 ){
   	//마우스를 아래로 움직였을때
     
     i +=1;

   }else{
   	//마우스를 위로 움직였을때
   	 i -=1;
    
   }

   per = i * -100 + '%';
   viewOuterUl.animate({marginLeft: per});


});




//viewOuter.on('scroll', function(){
//	var sl = $(this).scrollLeft();

//    console.log(sl);
//});





close.on('click',function(){
   viewBox.remove();
   
});

//----------------------------------------------------------------------------



})(jQuery);
