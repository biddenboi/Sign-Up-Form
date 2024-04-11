document.querySelector("#loginForm-button").addEventListener("click", (e) => {
    if (document.querySelector("input#password").value != 
    document.querySelector('input#confirm_password').value) {
        e.preventDefault();
        document.querySelector("input#password").style.borderColor = "red";
        document.querySelector("input#confirm_password").style.borderColor = "red";

        document.querySelector("input#password + span").classList.add("passwordMismatch");
        document.querySelector("input#confirm_password + span").classList.add("passwordMismatch");
    }else {
        document.querySelector("input#password").style.borderColor = "#E5E7EB";
        document.querySelector("input#confirm_password").style.borderColor = "#E5E7EB";

        document.querySelector("input#password + span").classList.remove("passwordMismatch");
        document.querySelector("input#confirm_password + span").classList.remove("passwordMismatch");
    }
    
    document.querySelectorAll("input:required").forEach((input) => {
        if (input.value == "") {
            input.classList.add("inputEmpty");
            input.style.borderColor = "red";
        }else {
            input.classList.remove("inputEmpty");
            input.style.borderColor = "#E5E7EB";
        }
    })
})

