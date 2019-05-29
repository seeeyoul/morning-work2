var putImg = document.getElementsByClassName('putImg');
var putText = document.getElementsByClassName('putText');
var putImg1 = document.getElementsByClassName('putImg1');
var putText1 = document.getElementsByClassName('putText1');
var touch_img = document.getElementsByClassName('touch_img');
var content = document.getElementsByClassName('content');
//创建XMLHttpRequest对象
var xml = new XMLHttpRequest();
//向服务器发送请求
xml.open("get","https://easy-mock.com/mock/5c56773b0e8d497fa4bc65e6/",true);
xml.send("");
//用 onreadystatechange 事件监听状态变化，并获取服务器响应
xml.onreadystatechange = function(){
	if(xml.readyState==4&&xml.status==200){
//responseText代表获得字符串形式的响应数据。
		var data = xml.responseText;
//json解析
		var dataParse = JSON.parse(data);
//hot shop的内容
		putImg1[0].innerHTML = "<img src='"+dataParse.img+"'>";
		putText1[0].innerHTML = "<a href ='"+dataParse.aherf+"'>"+dataParse.a+"</a>"+
		                       "<p>"+dataParse.projects[0].p+"</p>"+
		                       "<p>"+dataParse.projects[1].p+"</p>"+
		                       "<p>"+dataParse.projects[2].p+"</p>";
        putImg1[2].innerHTML = putImg1[1].innerHTML = putImg1[0].innerHTML;
        putText1[2].innerHTML = putText1[1].innerHTML = putText1[0].innerHTML;
        putImg[0].innerHTML = "<img src='"+dataParse.img1+"'>";
		putText[0].innerHTML = "<a href ='"+dataParse.aherf+"'>"+dataParse.a1+"</a>"+
		                       "<p>"+dataParse.projects[0].p+"</p>"+
		                       "<p>"+dataParse.projects[1].p+"</p>"+
		                       "<p>"+dataParse.projects[2].p+"</p>";
        putImg[2].innerHTML = putImg[1].innerHTML = putImg[0].innerHTML;
        putText[2].innerHTML = putText[1].innerHTML = putText[0].innerHTML;

//红人骚客
        for(var i = 0;i <= 10;i++){
			touch_img[i].innerHTML = "<img src='"+dataParse.pepimg[i].img+"'>";			
			content[i+1].innerHTML = "<p>"+dataParse.pepcont[i].p1+"</p>"+
		                       "<p>"+dataParse.pepcont[i].p2+"</p>";		
	}
	}
}
window.onload = function(){
//文字无限滚动
	var bottomNav_tab_title = document.getElementById('bottomNav_tab_title');
	var bottomNav_tab_title_li = bottomNav_tab_title.getElementsByTagName('li');
	var bottomNav_tab_content = document.getElementById('bottomNav_tab_content');
	var bottomNav_tab_content_div = bottomNav_tab_content.getElementsByTagName('div');
	var len = bottomNav_tab_title_li.length;
	for(var i = 0 ; i < len ; i++ ){
		bottomNav_tab_title_li[i].index = i;
		bottomNav_tab_title_li[i].onclick = function(){
			for (var i = 0 ; i < len ; i++ ) {
				bottomNav_tab_title_li[i].className = "";
				bottomNav_tab_content_div[i].className = "hide";
			}
			    bottomNav_tab_title_li[this.index].className = "open";
				bottomNav_tab_content_div[this.index].className = "show";
		}
	}
	var autoPlayNews_content = document.getElementById('autoPlayNews_content');
	var autoPlayNews_uparrow = document.getElementById('autoPlayNews_uparrow');
	var autoPlayNews_downarrow = document.getElementById('autoPlayNews_downarrow');
	var ul1 = document.getElementById("ul1");
    var ul2 = document.getElementById("ul2");
    ul2.innerHTML = ul1.innerHTML;
    var timer;

    function roll(t){	
    	autoPlayNews_uparrow.onclick = rollUp;
    	autoPlayNews_downarrow.onclick = rollDown;
    	timer = setInterval(autoRoll, t);
    	autoPlayNews_content.onmouseover = function () {
                clearInterval(timer);
            }
        autoPlayNews_content.onmouseout = function () {
                timer = setInterval(autoRoll, t);
            }
    }
    roll(150);
    function rollUp() {
    	ul1.className = "";
            clickRoll();
        }
        function rollDown() {
        	//也不是很懂这个scroll，只能这样啦-_-!!
            ul1.className = "reverse";
        	clickRoll();
        }
        function autoRoll(){
        	if (autoPlayNews_content.scrollTop >= ul1.scrollHeight) {
                autoPlayNews_content.scrollTop = 0;
            } else {
                autoPlayNews_content.scrollTop +=2;
            }
        }
        function clickRoll(){
        	if (autoPlayNews_content.scrollTop >= ul1.scrollHeight) {
                autoPlayNews_content.scrollTop = 0;
            } else {
                autoPlayNews_content.scrollTop +=22;
            }
        }

//hotshop 的 tab 选项卡效果
    var shopNav_tittle = document.getElementById('shopNav_tittle');
    var shopNav_tittle_li = shopNav_tittle.getElementsByTagName('li');
    var shopNav_tittle_li_div = shopNav_tittle.getElementsByTagName('div');
    var shopNav_list = document.getElementById('shopNav_list');
    var shopNav_list_ul = shopNav_list.getElementsByTagName('ul'); 
    for(var j = 0; j < shopNav_tittle_li.length; j++){
    	shopNav_tittle_li[j].index = j;
    	shopNav_tittle_li[j].onclick = function(){
    		for (var j = 0; j < shopNav_tittle_li.length; j++) {
    			shopNav_tittle_li[j].className = "shopNav_off";
    			shopNav_list_ul[j].className = "shopNav_hide";
    			shopNav_tittle_li_div[j].className = "arrow_grey";
    		}
    		    shopNav_tittle_li[this.index].className = "shopNav_on";
    			shopNav_list_ul[this.index].className = " shopNav_show";
    			shopNav_tittle_li_div[this.index].className = "arrow_red";
    	}
    }

//列表图片滑过放大效果
    var smallPic = document.getElementsByClassName('smallPic');
    var bigPic = document.getElementsByClassName("bigPic");
    for (var i =0;i< smallPic.length; i++) {
    	smallPic[i].index = i;
    	smallPic[i].onmouseover = function(){
    		for (var i = 0; i < smallPic.length; i++) {
    			bigPic[i].style.display = "none";
    		}
    		bigPic[this.index].style.display = "block";
    	}
    	smallPic[i].onmouseout = function(){
    		bigPic[this.index].style.display = "none";

    	}
    }
//轮播图
    var autoPlayPics = document.getElementById('autoPlayPics');
    var putPics = document.getElementById('putPics');
    var putPics_div = putPics.getElementsByTagName('div');
    var putBtns = document.getElementById('putBtns');
    var putBtns_img = putBtns.getElementsByTagName('img');
    var timer1;
    var index = 0;    
    for (var i = 0; i < putBtns_img.length; i++) {
    	putBtns_img[i].index = i;
    	putBtns_img[i].onclick = function (){
    		clickChange(this.index);	
    	}
    	putBtns_img[i].onmouseover=function(){
        clearInterval(timer1);
    }
        putBtns_img[i].onmouseout=function(){  
        timer1=setInterval(autoChange,2000);    
    }
    }
    if(timer1){
    clearInterval(timer1);
    timer1=null;
  } 
  // 添加定时器，改变当前高亮的索引
  timer1=setInterval(autoChange,2000);
    function autoChange(){
    	index++;
      if(index>=putBtns_img.length){
         index=0;
      }
      clickChange(index);
    }
    function clickChange(thisIndex){
    	for (var i = 0; i < putBtns_img.length; i++) {
    			putBtns_img[i].className = "picOff";
    			putPics_div[i].className = "picHide";
    		}
    		    putBtns_img[thisIndex].className = "picOn";
    			putPics_div[thisIndex].className = " ";
    			index = thisIndex;
    }

//bbs列表
       var bbs_list = document.getElementById('bbs_list');   
       var bbs_li = bbs_list.getElementsByTagName('li');
       for (var i = 0; i < bbs_li.length; i++) {
       	bbs_li[i].index = i;
       	bbs_li[i].onmouseover = function(){
       		for (var i = 0; i < bbs_li.length; i++) {
       			bbs_li[i].className = "bbs_hide";
       		}
       		bbs_li[this.index].className ="bbs_play";
       	}
       }
// 地图板块 tab 切换
    var mapNav_tittle = document.getElementById('mapNav_tittle');
    var mapNav_tittle_li = mapNav_tittle.getElementsByTagName('li');
    var mapNav_tittle_li_div = mapNav_tittle.getElementsByTagName('div');
    var mapNav_list = document.getElementById('mapNav_list');
    var mapNav_list_img = mapNav_list.getElementsByTagName('img'); 
    for(var j = 0; j < shopNav_tittle_li.length; j++){
    	mapNav_tittle_li[j].index = j;
    	mapNav_tittle_li[j].onclick = function(){
    		for (var j = 0; j < mapNav_tittle_li.length; j++) {
    			mapNav_tittle_li[j].className = "mapNav_off";
    			mapNav_list_img[j].className = "mapNav_hide";
    			mapNav_tittle_li_div[j].className = "arrow_grey";
    		}
    		    mapNav_tittle_li[this.index].className = "mapNav_on";
    			mapNav_list_img[this.index].className = " ";
    			mapNav_tittle_li_div[this.index].className = "arrow_red";
    	}

    }

//tab
    var lifestyle_nav = document.getElementById('lifestyle_nav');
    var lifestyle_nav_li =lifestyle_nav.getElementsByTagName('li');
    var lifestyle_cont = document.getElementById('lifestyle_cont');
    var lifestyle_cont_ul = lifestyle_cont.getElementsByTagName('ul');
    for (var i = 0; i < lifestyle_nav_li.length; i++) {
    	lifestyle_nav_li[i].index = i;
    	lifestyle_nav_li[i].onmouseover =function(){
    		for (var i = 0; i < lifestyle_nav_li.length; i++) {
    			lifestyle_nav_li[i].className = "lifestyleNav_off";
                lifestyle_cont_ul[i].className = "lifestyle_hide";
    		}
    		lifestyle_nav_li[this.index].className = "lifestyleNav_on";
    		lifestyle_cont_ul[this.index].className = "";
    	}
    }
//tab

    var coupons_nav = document.getElementById('coupons_nav');
    var coupons_nav_li = coupons_nav.getElementsByTagName('li');
    var coupons_cont = document.getElementById('coupons_cont');
    var coupons_cont_ul = coupons_cont.getElementsByTagName('ul');
    for (var i = 0; i < coupons_nav_li.length; i++) {
    	coupons_nav_li[i].index = i;
    	coupons_nav_li[i].onmouseover =function(){
    		for (var i = 0; i < coupons_nav_li.length; i++) {
    			coupons_nav_li[i].className = "couponsNav_off";
                coupons_cont_ul[i].className = "coupons_hide";
    		}
    		coupons_nav_li[this.index].className = "couponsNav_on";
    		coupons_cont_ul[this.index].className = "";
    	}
    }

}
