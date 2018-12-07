/*inner_content_01.js*/

(function($){
//console.log('start!');
// text() :작성한 내용을 확인/작성하는 메소드
// html() :html태그를 확인/제작하는 메소드
// clone():내용/태그를 복제하는 메소드
// wrap():선택한 요소의 부모요소를 제작하는 메소드
// before(): 선택요소의 이전(형제)에 요소를 제작하는 메소드
// atfer(): 선택요소의 이후의 요소(형제)에 제작하는 메소드
// prepend():선택요소 자식의 앞에 요소를 제작하는메소드 
// -prependTo():
// oppend():선택요소의 자식의 뒤에 요소를 제작/삽입하는 메소드
// -oppendTo:
// remove(): 선택요소를 삭제하는 메소드
// empty():선택요소의 내부를 비우는 메소드
// removeAfttr():선택요소의 속성을 삭제하는 메소드
// attr(): 선택요소의 속성을 파악/수정/삽입하는 메소드
// val(): form요소의 값을 파악하거나 삽입하는 메소드
/*============================================ =================*/

var h1 = $('h1');

var h1T = h1.text();
var h1Rrewrite = h1.text('링크를 삽입하고 다시 처리하기');
console.log(h1Rrewrite);

var myText = 'jquery 추가기능 사용하기';


var h1Link = h1.html('<a href="#">' + h1T + myText + '</a>');
console.log(h1Link)

var h1Wrap = h1.wrap('<div class="head_wrap"></div>');
var headWrap =$('.head_wrap');
headWrap.css({margin:'auto', padding:1 +'rem', width:60 +'rem', textAlign:'center'});
/*console.log(h1Wrap);*/


var viewBox = $('viewBox');

viewBox.before('<div class="view_before"></div>');
viewBox.after('<div class="view_after"></div>');
$('.view').css({width:'100%', height:'1rem', backgroundColor:'#f0a'});

console.log( viewBox.prev() );
console.log( viewBox.next() );
})(jQuery);