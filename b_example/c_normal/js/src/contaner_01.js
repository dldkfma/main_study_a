(function($){


var beadBox = $('#headBox');
var headOffset = headBox.offset().top;
var nowScroll;

var scrollFn = function(){
	nowScroll = $(window).scrollTop();
	if(headOffset <= nowScroll){
		headBox.addClass('active');
	}else{
		headBox.removeClass('active');
	}
};
scrollFn();

$(window).on('scroll',function(e){
	e.preventDefault();
	scrollFn();
});



})(jQuery);