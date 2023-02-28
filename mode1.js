 btn1=document.getElementById("btn1");
 console.log(btn1);

 btn2=document.getElementById("btn2");
 console.log(btn2);

 body=document.getElementsByTagName("body");
 console.log(body);


 btn1.addEventListener('click',function(){
    // console.log("button1 clicked");
    body[0].style.background="black";
    btn1.style.display="none";
    btn2.style.display="block";


 })

 btn2.addEventListener('click',function(){
    // console.log("button1 clicked");
    body[0].style.background="white";
    btn2.style.display="none";
    btn1.style.display="block";

 })