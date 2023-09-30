function reset_password(){
    var emailValue = document.getElementById('exampleInputEmail').value;
    var passwordError = document.getElementById('password-error');
    showLoading();
    firebase.auth().sendPasswordResetEmail(emailValue).then(() => {
        hideLoading();
        passwordError.classList.remove("text-danger");
        passwordError.classList.add("text-success");
        console.log("sucess");
        passwordError.textContent = "Verifique seu email e revalide sua senha.";
        setTimeout(() => window.location.href = "../../index.html", 5000);
    }).catch(error => {
        hideLoading();
        console.error('Erro no login: ', error);
        if (error.code === "auth/missing-email") {
            passwordError.textContent = "Por favor, inserir um email";
        } else if (error.code === "auth/invalid-email") {
            passwordError.textContent = "Por favor, inserir um email válido";
        } else if (error.code === "auth/too-many-requests") {
            passwordError.textContent = "Por favor tente mais tarde";
        } 
        else {
            passwordError.textContent = "";
        }
    })
}

function return_home(){
    window.location.href = "../../index.html"
}