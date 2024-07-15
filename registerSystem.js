
let username  = document.getElementById("username")
let password  = document.getElementById("password")
let submitBtn = document.getElementById("submit-btn")

let tokenUser = "";

function clearInput(){
    username.value = ""
    password.value = ""
}

submitBtn.addEventListener("click",function(){
    if(username.value != '' && password != ''){
        
        axios.post("https://reqres.in/api/login",{
            "email": username.value,
            "password": password.value
        })
        .then((json) => {
        
            alert("your info is corrected!")  
            location = "ExampleAPI-1.html"
            clearInput(); 
        
        }).catch((errorMessage) => {
            alert(errorMessage.response.data.error)
        })
    }
})