//Accessing h2 for displaying the digits
let h2 = document.querySelector("h2");
//Accessing all the buttons
let btns = document.querySelectorAll("button");
//Accessing h2 to display result
let h = document.querySelector(".Calculations");
// console.log(h);

//Initializing output
let output = 0;

//Function for performing the operations
let calculate = (btnValue) => {
    console.log(btnValue);
    let l1 = btnValue.length;
    for(let i=0; i<l1; i++){
        if(btnValue[l1-1] == "%"){
            btnValue = btnValue.replace("%","/100");
            console.log(btnValue);
            output = eval(btnValue);
            return output;
        }
        else if(btnValue.includes("%")){
            btnValue = btnValue.replaceAll("%","/100*");
            console.log(btnValue);
            output = eval(btnValue);
            return output;
        }
        else{
            output = eval(btnValue);
            return output;
        }
    }
    
}

//Function to perform percentage
let percentage = (btnValue) => {
    let per = btnValue/100;
    return per;
}

//Using Event Listener for each button as per the click by user
btns.forEach((button) => {
    button.addEventListener("click", function(e){
        //If AC is clicked then will clear the screen
        if(button.outerText === "AC"){
            h2.innerText = " ";
            h.innerText = 0;
        }
        //If DEL is clicked then will delete one digit from last
        else if(button.outerText === "DEL"){
            let l = h2.innerText.length;
            // console.log(l);
            h2.innerText = h2.innerText.slice(0,l-1);
        }
        // If = is clicked, will call calculate function & display the result
        else if(button.outerText === "="){
            let out = calculate(h2.innerText);
            h.innerText = out;
            console.log(h.innerText);
        }   
        else{
            h2.innerText = h2.innerText + button.outerText;
            console.log(h2.innerText);
        }   

    });
});
