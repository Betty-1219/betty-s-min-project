
 document.getElementById("checkBtn").onclick=function() {
    let budget=Number(prompt("Enter your total budget:"));
    let price =Number(prompt("Enter the item price:"));
    let saving =Number(prompt("enter your saving (optional, enter 0 if none):"));
    //total money available
    let totalmoney=budget+saving;
    let message;
    //decision using if/else
        if (price<=totalmoney){
         message="you can afford this item!" ;
         alert(message);   
        } else {
            message="you cannot afford this item right now.";
            alert(message);
        }
        document.getElementById("result").textContent=message;console.log(message); 
    };
