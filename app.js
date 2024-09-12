console.log("hi");
function calc(){
    let number1 = new Number(document.getElementById("number1").value);
    let number2 = new Number(document.getElementById("number2").value);
   
    let op = document.getElementById("op").value;
    let lblOutput = document.getElementById("output");
     
    console.log(typeof number1);
    console.log(typeof number2);
    
      
    lblOutput.innerHTML = number1+number2 ;
}
