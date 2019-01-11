(function($){

//분리된 html문서를 불러와 합치기
// *원본 html 문서를 기준으로 불러와야 함.
// 반드시 서버가 동작해야 함.

var wrap = $('#wrap');
var allUrl = './all/';

wrap.prepend('<header id="headBox"<>/header>');

var headBox = $('#headBox');

headBox.load( allUrl + 'header.html');

// 1 header#headBox 생성 및 header.html불러오기
//console.log('!!!!!');





//2. section#adbanner를 생성하여 불러오기

headBox.after('<section id="adBanner"></section>');

var adBanner = $('#adBanner');
var mainUrl = './main/';
adBanner.load(mainUrl + 'adbanner.html');


})(jQuery);