var input=document.getElementById("input");
var run=document.getElementById("run");
var stop=document.getElementById("stop");
var reslut=document.getElementById("reslut");
run.onclick=()=>{
 reslut.innerHTML=input.value ;
   localStorage.setItem("result",input.value);
};
stop.onclick=()=>{
 reslut.innerHTML="";
};
onload=()=>{
    input.value=localStorage.getItem("result");
};
