let start=document.querySelector("#btn1")
let answer
let val=document.querySelector("#in")
let check=document.querySelector(".btn2")
let hint1=document.querySelector(".p1")
let hint2=document.querySelector(".p2")
let hin=document.querySelectorAll("p")

start.addEventListener("click",()=>{
    start.style.background="red"
    start.style.color="white"
    fetch("https://random-word-api.herokuapp.com/word")
    .then((respone) =>respone.json())
    .then((data)=>{
       answer=data[0]
       console.log(answer);
       setTimeout(()=>{
        start.style.background="buttonface"
        start.style.color="black"
       }
       ,250)
     
    })
})


check.addEventListener("click",()=>{
    
    if(val.value==answer){
      
        alert("your answer is right")
        val.value=""
        fetch("https://random-word-api.herokuapp.com/word")
        .then((respone) =>respone.json())
        .then((data)=>{
           answer=data[0]
           console.log(answer);
         
        })
    }else{
       

        alert("your answer is wrong")
     
    }
   


})


hint1.addEventListener("click",()=>{
    let a=answer.length
    hint1.innerHTML="THE WORD HAS "+a+" LETTERS"
})


hint2.addEventListener("click",()=>{
    let b=answer[0].toUpperCase()

    
    hint2.innerHTML="THE WORD START WITH THE LETTER "+b


})















   