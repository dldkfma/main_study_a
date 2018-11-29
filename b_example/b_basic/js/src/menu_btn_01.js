// menu_btn_01.js

/* */

/*var Fn = function (e) {
  return e+5
};

//함수 표현식(익명함수(이름이 없는함수) 를 변수에 대입처리)
var a = Fn(10);
console.log(a);


//함수 선언식(함수 자체에 이름을 생성)

function fn2(e){
  return e * 2;
}

var b = fn2(5);
console.log(b);


//잠깐 테스트 

var tt = ("sana" + "momo")+ 'jiyoun';
console.log(tt);

//즉시실행함수(IIFE)
(function(e){var j = e *2 +3; console.log(j); return j;})(3);*/

/*==========================================*/

/*(function($){

 var btn = $('.menu_btn_01');
 btn.css({padding:'1rem', borderTop:'1rem solid #fa0'})


})(jQuery);*/

var btn = $('.menu_btn_01');
btn.css({padding:'1rem', borderTop:'1rem solid #fa0'});

var dt = btn.children('dt');
dt.css({backgroundColor:'#faa', color:'#177', fontStyle:'italic'});

var dtChild = dt.children('button');

dtChild.on('mouseenter', function(){
  $(this).css({backgroundColor:'#555', color:'#fff'})
});

dtChild.on('mouseleave', function(){
  $(this).removeAttr('style');
});

var show = $('.show');
var hide = $('.hide');
var btndd = btn.find('dd');

//show를 클릭시 dd를 나타나게 만들기
show.on('click',function(e) {
 e.preventDefault();
 btndd.slideDown(1000);
});

//hide를 클릭시 dd를 나타나게만들기
hide.on('click',function(evt) {
  evt.preventDefault();
  btndd.slideUp(1000);
});

///-----------------------------------

var dual = $('.dual');

dual.on('click',function(e){
   e.preventDefault();
 /* var status = btndd.css('display');
  console.log(status);

  if(status !== 'none'){
    btndd.slideUp(500);
  }else{
  btndd.slideDown(500); 
}
});*/

btndd.slideToggle(500);
});

/*
 //jQuery 선택자 

 /*-css의 선택자 형태와 동일. 
   -단, css현태 그대로 표현할 수는 없기에,$()를 감싸야 한다. 
   -문자일 경우에는 ()안에 ''로 감싸주어야 한다. 

   ------------------------------------------
   -형제,자식,부모,자손인지를 파악하여 메소드형태로 나누어서 처리.
   -순서를 나타낼 때에는 내부에서 처리하는 방법과, 외부에서 순서값을 작성하는 방법. 



 */

/*(function($){


}(jQuery));*/

/*위의 둘이 같은 코드이다.*/


/* $(document/*모든 html가 브라우저에 싱크되면 그 후 실행하라는 명령어).ready(function(){

});


/*=============================*/


