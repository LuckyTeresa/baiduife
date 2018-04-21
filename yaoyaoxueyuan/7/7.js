window.onload=function(){
function Table(data){
    this.data=data;
}
Table.prototype.init=function(){
    var table=document.createElement('table');
    document.body.appendChild(table);

    // 表头
    var tr=document.createElement('tr');
   for(var k in this.data[0]){
        var th=document.createElement('th');
        th.innerHTML=(k!='姓名')?k+"<span class='span1'></span><span class='span2'></span>":k;
        tr.appendChild(th);
    }
    table.appendChild(tr);
    // 设置span标签样式

    // 表格内容
    for(var i=0;i<this.data.length;i++){
            var score=0;
            var tr=document.createElement('tr');
                tr.className='tbody';//便于查找删除
        for(var item in this.data[i]){
                var td=document.createElement('td');
                if((typeof this.data[i][item])=='number')
                    score+=this.data[i][item];
                //等于'总分'时记得更新原数据中的null
                td.innerHTML=(item=='总分')?this.data[i][item]=score:this.data[i][item];
                tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
Table.prototype.order=function(){
    var span1=document.getElementsByClassName('span1');
    for(var i=0;i<span1.length;i++){
        span1[i].onclick=order.bind(span1[i],this.data);
    }
    var span2=document.getElementsByClassName('span2');
    for(var i=0;i<span2.length;i++){
        span2[i].onclick=order.bind(span2[i],this.data);
    }
    function order(data){
            var str=this.parentNode.innerText;
            var class_name=this.className;//获取点击对象的className便于by函数中分辨
            data.sort(by(str));//sort为永久性排序，可传入函数
            // console.log(data);
            var table=document.getElementsByTagName('table')[0];
            var tbody=document.getElementsByClassName('tbody');
            /*删除页面中原有表格，倒着删除。避免正着删除，每次前面的被删掉了，后面自动向前提。*/
            for(var i=tbody.length-1;i>=0;i--){
                console.log(tbody[i]);
                table.removeChild(tbody[i]);
            }
            //向页面中添加排序后的数组
            for(var i=0;i<data.length;i++){
            var tr=document.createElement('tr');
                tr.className='tbody';
                for(var item in data[i]){
                        var td=document.createElement('td');
                        td.innerHTML=data[i][item];
                        tr.appendChild(td);
                }
            table.appendChild(tr);
            }
            function by(str){
                return function(o,p){
                    var a,b;
                    // o  p均为对象并且都存在
                    if(typeof o=='object'&& typeof p=='object'&&o&&p){
                        a=o[str];
                        b=p[str];
                        if(a==b)return 0;//a  b 值相等

                        if(typeof a==typeof b){//a  b数据类型一致
                            if(class_name=='span1'){
                            return a < b ? -1 : 1;//从小到大
                            }else{
                               return a < b ? 1 : -1;//从大到小
                            }
                        }
                        return typeof a < typeof b ? -1 : 1;
                    }else {
                     throw ("error");
                   }
                }
            }
    }
}

var datas=[
    {
        '姓名':'金冬梅',
        '语文':90,
        '数学':90,
        '英语':80,
        '总分':null
    },{
        '姓名':'王羚',
        '语文':83,
        '数学':87,
        '英语':95,
        '总分':null

    },{
        '姓名':'韩小君',
        '语文':85,
        '数学':90,
        '英语':90,
        '总分':null
    },{
        '姓名':'李赛凤',
        '语文':85,
        '数学':97,
        '英语':86,
        '总分':null
    },{
        '姓名':'朱世晗',
        '语文':90,
        '数学':95,
        '英语':95,
        '总分':null
    }
]

var table=new Table(datas);
    table.init();
    table.order();
}
