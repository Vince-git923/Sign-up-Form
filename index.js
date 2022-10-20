let currentPass = document.querySelector("#curr-pass")
let checkPass = document.querySelector("#check-pass")
let errorM = document.querySelector(".form-cont .error-message")
let submitBtn = document.querySelector("#sub-btn")



submitBtn.addEventListener("click",()=>{
    
    if(currentPass.value != checkPass.value){
        errorM.style.visibility ="visible";
        
        currentPass.value =""
        checkPass.value =""
       }
       else{
        errorM.style.visibility ="hidden"
       }
});


document.addEventListener("keydown",()=>{
    errorM.style.visibility="hidden"
})
