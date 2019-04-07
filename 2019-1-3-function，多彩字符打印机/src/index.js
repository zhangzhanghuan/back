(function(){
    var Btns=document.querySelectorAll('button');
    for(var i=0;i<Btns.length;i++){
        console.log(Btns[i].innerText)
        Btns[i].onclick=(function(i){
           return  function(){
               return  alert(Btns[i].innerText)
           }
        })(i)
    }
    
    // 函数实现继承

    function People1(name,sex,age){
        this.name=name;
        this.sex=sex;
        this.age=age;
    }

    function Teacher1(name,sex,age,groupName){
        People1.call(this,name,sex,age,);
        this.groupName=groupName;
    }
    function Stu1(name,sex,age,className){
        People1.call(this,name,sex,age);
        this.className=className;
    }
    var tea1=new Teacher1('zs','女',28,'档案组');
    console.log(tea1)

    var tea2=new Teacher1('ls','女',28,'教学组');
    console.log(tea2)

    var stu1=new Stu1('ww','女',28,'2018-01-01');
    console.log(stu1)

    var Box=document.querySelector('.box');
    var eee=(JSON.stringify('你的名字是:'+stu1.name+',你的年龄是:'+stu1.age+'岁'+',你的性别是:'+stu1.sex+',你的班级是:'+stu1.className));
    
    // 字符串转数组是split,数组转字符串是join

    var eee1=eee.split()
    Box.innerHTML=(eee1);
    // Class实现继承
    class People{
        constructor(name,sex,age){
            this.name=name;
            this.sex=sex;
            this.age=age;
        }

    }
    class Teacher extends People{
        constructor(name,sex,age,groupName){
            super(name,sex,age);
            this.groupName=groupName;
        }
    }
    class Stu extends People{
        constructor(name,sex,age,className){
            super(name,sex,age);
            this.className=className;
        }
    }

    // 3.请通过递归求1到20的乘积
    function shen(n){
        if(n<20) return n*shen(n+1);
        else return n;
    }
    console.log(shen(1));

    setInterval(function(){
        var d=new Date();
        Box.innerHTML=d.toLocaleString();
    },1000);

    // 4.通过定时器将一段文字缓慢一个字一个字的打印出来。
    var P=document.querySelector('.p1');
    var i=0;
    var str="你好，这几天天气不错你好，这几天天气不错你好，这几天天气不错你好，这几天天气不错你好，这几天天气不错你好，这几天天气不错"
    P.innerHTML="";
    //颜色数组
    var cols=['red','green','blue'];
    //大小数组
    var sizes=['small','normal','big'];
    var s=setInterval(function(){
        var randomNum=Math.round(Math.random()*2);
        var randomNum1=Math.round(Math.random()*2);
        P.innerHTML+=`
        <span class="${cols[randomNum]} ${sizes[randomNum1]}">${str[i++]}</span>
        `;
        if(i==str.length) clearInterval(s);
    },500)
})();

