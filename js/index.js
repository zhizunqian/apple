document.addEventListener("readystatechange",function(){
	if(document.readyState==="complete"){
         var sec=document.querySelectorAll(".sec");
         var w=document.documentElement.offsetWidth;
         var xiaodian=document.querySelectorAll(".dot li");
         var curdian=xiaodian[0];
         window.onresize=function(){
              w=document.documentElement.offsetWidth;
              for(var i=0;i<sec.length;i++){
                   sec[i].style.left=i*w+"px";
                   console.log(1);
              }
         }
         window.onresize();
          
          var num=1;
          var move=function(){
          	curdian.classList.remove("current");
          	curdian=xiaodian[num];
          	curdian.classList.add("current");
          	var of=-num*w;
          	num+=1;
          	if(num===3){
          		num=0;
          	}
          	for(var i=0;i<sec.length;i++){
          		sec[i].style.transform="translateX("+of+"px)";
          	}
          }
          var t=setInterval(move,2000);
          for(var i=0;i<xiaodian.length;i++){
          	xiaodian[i].index=i;
          	xiaodian[i].onclick=function(){
          		curdian.classList.remove("current");
          		curdian=this;
          		this.classList.add("current");
          		var of=-this.index*w;
          		for(var j=0;j<sec.length;j++){
                        sec[j].style.transform="translateX("+of+"px)";
          		}
          		clearInterval(t);
          	}
          }

          var sec=document.querySelectorAll(".sec"); 



  }
},false)