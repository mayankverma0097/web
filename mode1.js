 btn1=document.getElementById("btn1");
 console.log(btn1);

 btn2=document.getElementById("btn2");
 console.log(btn2);

 body=document.getElementsByTagName("body");
 console.log(body);

  //getting classes of diffrent contents and programs

copy=document.getElementsByClassName("copy");
prog=document.getElementsByClassName("prog");
prog1=document.getElementsByClassName("prog1");
content=document.getElementsByClassName("content");
heading1=document.getElementById("heading1");
heading2=document.getElementById("heading2");
nava=document.getElementsByClassName("nava");


console.log(nava);

 btn1.addEventListener('click',function(){
    // console.log("button1 clicked");
    // body[0].style.background="black";
     body[0].style.background="rgb(46, 46, 61)";
    
    btn1.style.display="none";
    btn2.style.display="block";
    copy[0].style.color="rgb(255, 126, 126)";
    prog1[0].style.color="white";
    content[0].style.color="white";
    heading1.style.color="rgb(255, 126, 126)";
    heading2.style.color="rgb(255, 126, 126)";
    nava[0].style.color="rgb(255, 126, 126)";
    nava[1].style.color="rgb(255, 126, 126)";
    nava[2].style.color="rgb(255, 126, 126)";
 })

 btn2.addEventListener('click',function(){
    // console.log("button1 clicked");
    body[0].style.background="white";
    btn2.style.display="none";
    btn1.style.display="block";
    copy[0].style.color="rgb(194, 32, 32)";
    prog1[0].style.color="black";
    content[0].style.color="rgb(194, 32, 32)";
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
 

