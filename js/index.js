$(document).ready(function(){
	$('.next').click(function(){
		var show = $('.show')
		if(show.next().length == 1){
			show.next().addClass('show');
			show.next().removeClass('hide');
			show.addClass('hide');
			show.removeClass('show');
		}else{
			show.prev().prev().addClass('show');
			show.prev().prev().removeClass('hide');
			show.addClass('hide');
			show.removeClass('show');
		}
		var blue = $('.blue')
		if(blue.next().length == 1){
			blue.next().addClass('blue');
			blue.next().removeClass('white');
			blue.addClass('white');
			blue.removeClass('blue');
		}else{
			blue.prev().prev().addClass('blue');
			blue.prev().prev().removeClass('white');
			blue.addClass('white');
			blue.removeClass('blue');
		}
	})
	$('.last').click(function(){
		var show = $('.show')
		if(show.prev().length == 1){
			show.prev().addClass('show');
			show.prev().removeClass('hide');
			show.addClass('hide');
			show.removeClass('show');
		}else{
			show.next().next().addClass('show');
			show.next().next().removeClass('hide');
			show.addClass('hide');
			show.removeClass('show');
		}
	})
	$('.last').click(function(){
		var blue = $('.blue')
		if(blue.prev().length == 1){
			blue.prev().addClass('blue');
			blue.prev().removeClass('white');
			blue.addClass('white');
			blue.removeClass('blue');
		}else{
			blue.next().next().addClass('blue');
			blue.next().next().removeClass('white');
			blue.addClass('white');
			blue.removeClass('blue');
		}
	})
	$('.subscriptIco').click(function(){
		var index = $(this).index();
		console.log(index)
		$(this).siblings().addClass('white');
		$(this).siblings().removeClass('blue');
		$(this).addClass('blue');
		$(this).removeClass('white');
		$('.carousel').addClass('hide');
		$('.carousel').removeClass('show');
		$('.carouselSpan').children(':eq('+index+')').addClass('show');
		$('.carouselSpan').children(':eq('+index+')').removeClass('hide');
	})
	setInterval(function(){
		$('.next').click();
	},4000);
	//底部播放
	var imglength=document.getElementsByClassName("historyList");
	setInterval(function(){
		var add = imglength[0];
		add.style.width="0px";
		setTimeout(function(){
			document.getElementsByClassName("historyCenterLong")[0].appendChild(add);
			imglength[imglength.length-1].style.width="434px";
		},500)
	},3000);
	$('.Arrow2').click(function(){
		var add = imglength[0];
		add.style.width="0px";
		setTimeout(function(){
			document.getElementsByClassName("historyCenterLong")[0].appendChild(add);
			imglength[imglength.length-1].style.width="434px";
		},500)
	})
	$('.Arrow1').click(function(){
		var add = imglength[imglength.length-1];
		add.style.width="0px";
		setTimeout(function(){
			document.getElementsByClassName("historyCenterLong")[0].insertBefore(add,imglength[0]);
			imglength[0].style.width="434px";
		},50)
	})
})