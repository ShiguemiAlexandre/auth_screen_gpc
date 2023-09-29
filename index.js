function login() {
    showLoading();
    var emailValue = document.getElementById('emailInput').value;
    var passwordValue = document.getElementById('passwordInput').value;
    var passwordError = document.getElementById('password-error');
    firebase.auth().signInWithEmailAndPassword(
        emailValue, passwordValue
    ).then(response => {
        hideLoading();
        console.log('sucess', response)
        window.location.href = "./pages/home/home.html"
    }).catch(error => {
        hideLoading();
        console.error('Erro no login: ', error);
        if (error.code === "auth/wrong-password" || error.code === "auth/invalid-login-credentials") {
            passwordError.textContent = "Senha ou email inválida. Tente novamente.";
        } else if (error.code === "auth/too-many-requests"){
            passwordError.textContent = "Por favor, tente novamente mais tarde.";
        } else if (error.code === "auth/missing-password"){
            passwordError.textContent = "Por favor, insira uma senha";
        } else if (error.code === "auth/invalid-email"){
            passwordError.textContent = "Por favor, inserir senha e email válidos";
        } else {
            passwordError.textContent = "";
        }   
    });
}