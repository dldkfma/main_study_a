// gnbMenu_01.js 


(function($){

	var gnb = $('#gnb').find('dl');
	var gnbDt = gnb.children('dt');
	var gnbDd = gnb.children('dd');



// =======================================================
	//dt의 자식인 a에 포커스가 클릭하면, 그 부모의 바로 뒤에있는 dd를 보이게 해라

	//1. dt의 자식인 a에 포커스가 클릭하면
	gnbDt.children('a').on('click',function(e){

	//2. 그 부모의 바로 뒤에있는 dd를 보이게 해라 
		var nextDd = $(this).parent('dt').next('dd');
        gnbDd.stop(true, false).slideUp();
		nextDd.stop(true, false).slideDown();
	});
// =======================================================================

	//마지막 a요소에서 포커스가 빠져나간다면 그 부모 dd를 사라지게 해라.
	  //1. 마지막 a요소에서 포커스가 빠져나간다면
	  console.log( gnbDd.find('a').length)

	  gnbDd.find('a').eq(-1).on('blur',function(e){

		// 그 조상인 dd를 사라지게 해라
	  var nextDd = $(this).parents('dd');
      nextDd.slideUp();
    }); 


     /** forEach: forEach는 배열형식에서 각각 상황에따라 수행할 경우에 쓰이는 기능이다.

     ex) var arr = [1,2,3,4]
     arr.forEach(function(data){console.log(data);});

	 for(var i=0; i<arr.length; i++){
	 console.log(arr[i]);

     }); 
    */

    //각 dd의 마지막 a에 포커스가 빠져나가면 해당 dd를 사라지게 해라.

    //console.log(gnbDd);
    //내용중에 마지막a가 blur처리가된다면 해당 dd는 사라져라. 
    

    //dl에 마우스가 빠져나간다면, 모든 dd를 사라지게 만들어라.

    $('#headBox').on('mouseleave',function(e){
    	gnbDd.slideUp();
    });


})(jQuery);