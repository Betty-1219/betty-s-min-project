function startTest(){
    let score=0;
    let sleep=Number(prompt("How many hours do you sleep per day?"))
    if(sleep>=4) {
        score++;
    
    }
    
    let music=prompt("Do you enjoy music ?(yes/no)").toLowerCase();
    if(music=="yes"){
        score++;
    
    }
    let tired =prompt("Do you get tired?(yes/no)").toLowerCase();
    if(tired=="yes"){
        score++;
    
    }
    let math=Number(prompt("what is 2+2?"));
    if(math==4){
        score++;
    }

if(score>=3){
    message="you are definitely human!";
} else if (score>=1){
    message="half human,half robot!";
}else{
    message="robort detected!";
}
alert(message);
document.getElementById("result").textContent=message;console.log(message);
};