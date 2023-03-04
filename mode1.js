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

 //responsive menu button

 btn3=document.getElementById("btn3");

 nav=document.getElementsByClassName("nav");
 
 content=document.getElementsByClassName("content");
 btn4=document.getElementById("btn4");

 
 btn3.addEventListener('click',function(){
   // console.log("menu button clicked");
   nav[0].style.display="flex";
   btn3.style.display="none";
   btn4.style.display="inline-block";
   content[0].style.margin="5vh 10vw";
   content[0].style.margin="5vh 0vh 0vw 10vw"; 

 })
 btn4.addEventListener('click',function(){
   // console.log("menu cut button clicked");
   nav[0].style.display="none";
   btn4.style.display="none";
   btn3.style.display="flex";
   content[0].style.margin="15vh 0vh 0vw 10vw";
   

 })