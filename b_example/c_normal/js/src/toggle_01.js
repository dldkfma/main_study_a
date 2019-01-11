(function($){
var viewBox = $('.view_box');
var viewP = viewBox.children('p');

var showBtn = $('.btn_01-1');
var hideBtn = $('.btn_01-2');
var toggleBtn = $('.btn_01-3');
var timed = 1000;


showBtn.on(  'click', function(e){e.preventDefault(); viewP.stop().show(timed);    });
hideBtn.on(  'click', function(e){e.preventDefault(); viewP.stop().hide(timed);    });
toggleBtn.on('click', function(e){e.preventDefault(); viewP.stop().toggle(timed);  });

// =============================================


var inBtn = $('.btn_02-1');
var outBtn = $('.btn_02-2');
var fadeBtn = $('.btn_02-3');

inBtn.on(  'click', function(e) {e.preventDefault(); viewP.stop(false,true).fadeIn(timed,function(){
$(this).removeAttr('style');

}); });
outBtn.on( 'click', function(e) {e.preventDefault(); viewP.stop(false,true).fadeOut(timed);    });
fadeBtn.on('click', function(e) {e.preventDefault(); viewP.stop(false,true).fadeToggle(timed); });

// =============================================

var downBtn = $('.btn_03_1');
var upBtn = $('.btn_03_2');
var slideBtn = $('.btn_03_3');


downBtn.on(  'click', function(e) {e.preventDefault(); viewP.stop(false,true).slideDown(timed);    });
upBtn.on(    'click', function(e) {e.preventDefault(); viewP.stop(false,true).slideUp(timed);      });
slideBtn.on( 'click', function(e) {e.preventDefault(); viewP.stop(false,true).slideToggle(timed);  });



// =============================================

var addBtn = $('.btn_04_1');
var removeBtn = $('.btn_04_2');
var classBtn = $('.btn_04_3');


addBtn.on(   'click', function(e) {e.preventDefault(); viewP.stop(false,true).addClass(timed);     });
removeBtn.on('click', function(e) {e.preventDefault(); viewP.stop(false,true).removeClass(timed);  });
classBtn.on( 'click', function(e) {e.preventDefault(); viewP.stop(false,true).toggleClass(timed);  });

//========================================================
var rot     = $('.rotate');
var widthBtn = $('.btn_05-1');
var narrowBtn = $('.btn_05-2');
var slideWBtn = $('.btn_05-3');


widthBtn.on('click', function(e){
console.log('????');
e.preventDefault();
rot.stop().slideDown();
});

narrowBtn.on('click', function(e){
e.preventDefault();
rot.stop().slideUp();
});


slideWBtn.on('click', function(e){
e.preventDefault();
rot.stop().slideToggle();
});




// 가로확인

var pWidth = viewP.width();

// padding 확인
var pPad = {};
    pPad.left =  viewP.css('paddingLeft');
    pPad.right = viewP.css('paddingRight');

    console.log(pWidth, pPad.left,pPad,right);


var wiewWidth = $('btn_06-1');
var closeWidth = $('.btn_06-2');

closeWidth.on('click',function(e){
e.preventDefault();

});

})(jQuery);