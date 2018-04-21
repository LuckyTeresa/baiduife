    window.onload=function(){
    var box=document.createElement('div'),
        chessboard=document.getElementsByClassName('chessboard')[0],
        TRA_TOP=document.getElementById('TRA_TOP'),
        TRA_LEF=document.getElementById('TRA_LEF'),
        TRA_BOT=document.getElementById('TRA_BOT'),
        TRA_RIG=document.getElementById('TRA_RIG'),

        MOV_TOP=document.getElementById('MOV_TOP'),
        MOV_LEF=document.getElementById('MOV_LEF'),
        MOV_BOT=document.getElementById('MOV_BOT'),
        MOV_RIG=document.getElementById('MOV_RIG'),

        angle=0,
        timer=null;

        box.className='box';
        chessboard.appendChild(box);

        TRA_TOP.onclick=tra_top;
        TRA_BOT.onclick=tra_bot;
        TRA_LEF.onclick=tra_lef;
        TRA_RIG.onclick=tra_rig;

        function tra_top(event){
            event=event||window.event;
            var curTop=getStyle(box,'top').split('px')[0];
            if(curTop>=60){
                var tarTop=curTop-30;
                var timer=setInterval(function(){
                    if(tarTop<curTop){
                        curTop-=3;
                    box.style.top=curTop+'px';
                    }else{
                        clearInterval(timer);
                    }
                },50);
                }else{
                    box.style.top='30px';
                }
        }

        function tra_bot(event){
            event=event||window.event;
            var curTop=parseInt(getStyle(box,'top').split('px')[0]);
            if(curTop<=270){
                var tarTop=curTop+30;
                var timer=setInterval(function(){
                    if(tarTop>curTop){
                        curTop+=3;
                    box.style.top=curTop+'px';
                    }else{
                        clearInterval(timer);
                    }
                },50);
                }else{
                    box.style.top='300px';
                }
        }

        function tra_lef(event){
            event=event||window.event;
            var curLeft=parseInt(getStyle(box,'left').split('px')[0]);
            if(curLeft>=60){
                var tarLeft=curLeft-30;
                var timer=setInterval(function(){
                    if(tarLeft<curLeft){
                        curLeft-=3;
                    box.style.left=curLeft+'px';
                    }else{
                        clearInterval(timer);
                    }
                },50);
                }else{
                    box.style.left='30px';
                }
        }

        function tra_rig(event){
            event=event||window.event;
            var curLeft=parseInt(getStyle(box,'left').split('px')[0]);
            if(curLeft<=270){
                var tarLeft=curLeft+30;
                var timer=setInterval(function(){
                    if(tarLeft>curLeft){
                        curLeft+=3;
                    box.style.left=curLeft+'px';
                    }else{
                        clearInterval(timer);
                    }
                },50);
                }else{
                    box.style.left='300px';
                }
        }

        MOV_LEF.onclick=function(){
           angle=-90;
           box.style.transform='rotate('+angle+'deg)';
           tra_lef();

        }

        MOV_RIG.onclick=function(){
            angle=90;
            box.style.transform='rotate('+angle+'deg)';
            tra_rig();
        }

        MOV_TOP.onclick=function(){
            angle=0;
            box.style.transform='rotate('+angle+'deg)';
            tra_top();
        }
        MOV_BOT.onclick=function(){
            angle=180;
            box.style.transform='rotate('+angle+'deg)';
            tra_bot();
        }

        //获取样式
        function getStyle(ele,attr){
        return ele.currentStyle ? ele.currentStyle[attr]:getComputedStyle(ele)[attr];
        }
   }


// 获取元素id的一种方法
   /*function $(id_selector) {
    return document.getElementById(id_selector.substring(1, id_selector.length));
}*/

