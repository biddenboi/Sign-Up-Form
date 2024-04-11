document.querySelector("#loginForm-button").addEventListener("click", (e) => {
    if (document.querySelector("input#password").value != 
    document.querySelector('input#confirm_password').value) {
        e.preventDefault();
    }
})