const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "wor1.html"
    }else{
        alert("wrong")
    }
})

// function for checking username and password

function authentication(username,password){
    if(username === "eai" && password === "1234"){
        return true
    }else{
        return false
    }
}