//轮播图
var all=document.getElementsByClassName("lists");
var buttons=document.getElementsByClassName('but');
var arrall=["lists1","lists2","lists3","lists4"];
var i=1;
function nextpeo() {
    arrall.unshift(arrall[3]);
    arrall.pop();
    for(let j=0;j<all.length;j++){
        all[j].className="lists"+ " " +arrall[j];
        buttons[j].className="but float_left";
    }
    buttons[i].className="but on float_left";
    if(i === all.length-1)
        i=0;
    else
       i++;
}
var time=null;
function animated(){
    setTimeout(function () {
        nextpeo();
        time=setInterval(function(){
            nextpeo();
        },5000);

    },0);
}
animated();
// 焦点轮播
function allbutton(){
    for (var bb = 0; bb < buttons.length; bb++) {
        buttons[bb].className="but float_left";
        buttons[bb].onclick=function(){
            for(var cc=0;cc < buttons.length; cc++){
                buttons[cc].className="but float_left";
            }
            this.className="but on float_left";
            clearInterval(time);
            i=parseInt(this.getAttribute("index"));
            animated();
        }
    }
    buttons[0].className="float_left but on";
}
allbutton();
