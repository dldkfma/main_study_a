// jsTest.js


(function($){
// viewBox라는 변수에 id=viewBox의 값을 대입해라
var viewBox = $('#viewBox');
// brand라는 변수에 viewBox안에 포함된 id=viewBox 태그에서 class=logo_brand를 찾아 대입해라 
var brand =  viewBox.find('.logo_brand');
// brandUl이라는 변수에 brand안에 포함된 class=logo_brand에서 ul태그를 찾아 대입해라
var brandUl = brand.find('ul');
// brandLi이라는 변수에 brandUl안에 포함된 ul의 자식인 li태그를 찾아 대입해라
var brandLi = brandUl.children('li');

// brandLiClone이라는 변수에  li중 맨 마지막의 아이를 복제한 후 
// ul의 가장 첫번째 자리에 해당 복제된 li가 생성되어 대입된 변수 brandLiClone를 생성해
// 결과값을 해당 변수에 대입해라.
var brandLiClone = brandLi.eq(-1).clone(true);
brandUl.prepend(brandLiClone);

// 위의 과정을 거친 후 li의 갯수를 다시 계산해 해당 변수에 대입해라
var brandLi = brandUl.children('li');

// len이라는 변수에 li의 갯수를 표시한 값을 대입해라
var len = brandLi.length;

//ul에 css로 가로값을 li갯수 * 100%의 수치만큼 늘리고 왼쪽으로 -100%만큼 이동한 후 
//포지션을 부모(기준)로 잡아 위,왼쪽값을 0으로 잡는다.
brandUl.css({width: len * 100 + '%' , marginLeft: -100 + '%' , position:'relative', top:0 , left:0});
// li에 css로 가로값을 100 / li의 개수%만큼 늘려라.
brandLi.css({width: 100 / len + '%'});

// 공통의 작업을 하기위한 num의 변수에 0을 대입.
var num = 0;
//  prevBtn라는 변수에 class=prev_btn의 값을 대입
var prevBtn = $('.prev_btn');
//  nextBtn라는 변수에 class=next_btn의 값을 대입
var nextBtn = $('.next_btn');



// 다음 버튼을 클릭한다면(클릭한 후에)
nextBtn.on('click',function(e){
	// 본래 가지고 있던 클릭 이벤트 삭제
	 e.preventDefault();
	//클릭할때마다 num의 값을 +1씩 더하고 
    num += 1;
    //만약 클릭한 num의 값이 li의 갯수 - 2(5)보다 크다면 (맨마지막 li에서 다음버튼을 클릭한다면)
	if (num > len - 2) {
		//brandUl의 위치를 왼쪽으로 100%만큼 이동하게 해라 
		brandUl.css({left: 100 + '%'});
		//이때 num의 값은 0으로 하고
		num = 0;
		//brandUl의 위치를 왼쪽에서  num * -100%만큼의 값으로 이동하게 해라
		brandUl.stop().animate({left: num * -100 + '%'});
	}else{ //그렇지 않다면(맨 마지막 li가 아니라면)
		//brandUl의 위치를 왼쪽으로 num * - 100%만큼의 값으로 이동하게 해라
		brandUl.stop().animate({left: num * -100 + '%'});
	};
});

// 이전 버튼을 클릭한다면(클릭한 후에)
prevBtn.on('click',function(e){
	//기존의 클릭 이벤트 삭제
	 e.preventDefault();
	 //클릭할때마다 num의 값을 -1씩 더하고.
	num -= 1;
	//만약 num의 값이 0보다 작다면(맨 처음 li에서 이전버튼을 클릭한다면)
	if(num < 0){
		//brandUl의 위치를 자연스럽게 왼쪽으로 100%씩 이동하게 해라
		brandUl.stop().animate({left: 100 + '%' });
		//이때 num의 값을 li개수에서 -2에 해당하는 값으로 하고(5)
		num = len - 2;
		//brandUl의 위치를 왼쪽으로 단번에 num(5)* -100% (-500%) 만큼 이동하게 해라
		brandUl.css({left: num * -100 + '%'});
	}else{//그렇지 않다면
		//brandUl의 위치를 왼쪽으로 num * - 100%만큼의 값으로 이동하게 해라
		brandUl.stop().animate({left: num * -100 + '%'});
	};

});


})(jQuery);