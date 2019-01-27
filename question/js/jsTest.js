// jsTest.js


(function($){

var viewBox = $('#viewBox');
var brand =  viewBox.find('.logo_brand');
var brandUl = brand.find('ul');
var brandLi = brandUl.children('li');

var brandLiClone = brandLi.eq(-1).clone(true);
brandUl.prepend(brandLiClone);

var brandLi = brandUl.children('li');

var len = brandLi.length;

brandUl.css({width: len * 100 + '%' , marginLeft: -100 + '%' , position:'relative', top:0 , left:0});
brandLi.css({wihth: 100 / len + '%'});

var num = 0;
var prevBtn = $('.prev_btn');
var nextBtn = $('.next_btn');


nextBtn.on('click',function(e){
	 e.preventDefault();

	brandUl.css({left: -100 + '%'}); 

});


})(jQuery);