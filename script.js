document.querySelector("#loginForm-button").addEventListener("click", (e) => {
    if (document.querySelector("input#password").value != 
    document.querySelector('input#confirm_password').value) {
        e.preventDefault();
        document.querySelector("input#password").style.borderColor = "red";
        document.querySelector("input#confirm_password").style.borderColor = "red";

        document.querySelector("input#password + span").classList.add("passwordMismatch");
        document.querySelector("input#confirm_password + span").classList.add("passwordMismatch");
    }
    
})

