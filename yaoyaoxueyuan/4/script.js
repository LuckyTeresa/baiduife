    window.onload=function(){
    var box=document.createElement('div'),
        chessboard=document.getElementsByClassName('chessboard')[0],
        turnLeft=document.getElementById('turnLeft'),
        turnRight=document.getElementById('turnRight'),
        turnBack=document.getElementById('turnBack'),
        go=document.getElementById('go'),
        angle=0;

        box.className='box';
        chessboard.appendChild(box);

        turnLeft.onclick=function(){
            angle-=90;
            if(angle >(-360)){
            box.style.transform='rotate('+angle+'deg)';
            }else{/*当角度等于-360时将angle归零*/
            angle=0;
            box.style.transform='rotate('+angle+'deg)';
            }
        }

        turnRight.onclick=function(){
            angle+=90;
            if(angle<360){
            box.style.transform='rotate('+angle+'deg)';
            }else{/*当角度等于360时将angle归零*/
            angle=0;
            box.style.transform='rotate('+angle+'deg)';
            }
        }
        // 可能取值为-270，-180，-90,0,90,180,270，需要保证当前angle+180之后不会>=360
        turnBack.onclick=function(){
            if(angle<=90){
                angle+=180;
                box.style.transform='rotate('+angle+'deg)';
            }else{
                angle-=180;
                box.style.transform='rotate('+angle+'deg)';
            }
        }

        go.onclick=function(){
            var curTop=parseInt(getStyle(box,'top').split('px')[0]);
            var curLeft=parseInt(getStyle(box,'left').split('px')[0]);
            if(angle==0){
                if(curTop>=60){
                    curTop-=30;
                    box.style.top=curTop+'px';
                }else{
                    box.style.top=30+'px';
                }
            }else if(angle==90||angle==(-270)){
                if(curLeft<=270){
                    curLeft+=30;
                    box.style.left=curLeft+'px';
                }else{
                    box.style.left=300+'px';
                }
            }else if(angle==180||angle==(-180)){
                if(curTop<=270){
                    curTop+=30;
                    box.style.top=curTop+'px';
                }else{
                    box.style.top=300+'px';
                }
            }else if(angle==270||angle==(-90)){
                if(curLeft>=60){
                    curLeft-=30;
                    box.style.left=curLeft+'px';
                }else{
                    box.style.left=30+'px';
                }
            }
        }

        //获取样式
        function getStyle(ele,attr){
        return ele.currentStyle ? ele.currentStyle[attr]:getComputedStyle(ele)[attr];
        }
   }

