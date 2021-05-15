$(document).ready(function(){
	var Height = $(window).height();
	$('.Full').css('height',5*Height);
	var oldTop = document.documentElement.scrollTop;
	var Move = 1;
	window.onscroll=function(){
		var newTop = document.documentElement.scrollTop;
		if(newTop>oldTop){
			var Num = $(window).height();
			scrolldelay = setTimeout("window.scrollBy(0,10);",1);
		   	if(document.documentElement.scrollTop >= Move*Num){
		    	clearTimeout(scrolldelay);
		    	Move++;
		    	oldTop = newTop;
		   	}
		}else{
			var Num = $(window).height();
			scrolldelay = setTimeout("window.scrollBy(0,-10);",1);
		   	if(document.documentElement.scrollTop <= (Move-2)*Num){
		    	clearTimeout(scrolldelay);
		    	Move--;
		    	oldTop = newTop;
		   	}
		}
	}
	var Nav = false;
	$('.navBtn').click(function(){
		if(!Nav){
			$('.fixedNav').css('width','220px');
			$(this).css('left','250px');
			$('.Full').css('left','200px');
			$('.Fullblack').css('background','rgba(0,0,0,0.9)');
			Nav=!Nav;
		}else{
			$('.fixedNav').css('width','0');
			$(this).css('left','30px');
			$('.Full').css('left','0');
			$('.Fullblack').css('background','rgba(0,0,0,0.3)');
			Nav=!Nav;
		}
	})
})