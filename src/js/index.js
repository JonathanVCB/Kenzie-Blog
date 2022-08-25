import { Requests } from "./requests.js";

class Login {
  static renderLogin() {
    const token = localStorage.getItem("@KenzieBlog:token");
    console.log(token);

    if (token) {
      window.location.assign("src/pages/homepage.html");
      console.log(token);
    }

    const inputEmail = document.getElementById("inputEmail");
    const inputPassword = document.getElementById("inputPassword");
    const btnLogin = document.getElementById("btnLogin");

    btnLogin.addEventListener("click", (event) => {
      event.preventDefault();

      const data = {
        email: inputEmail.value,
        password: inputPassword.value,
      };
      Requests.login(data);
      console.log(data);
    });
  }

  static goToRegister() {
    const btnGotoRegister = document.getElementById("register");
    btnGotoRegister.addEventListener("click", () => {
      window.location.assign("src/pages/register.html");
    });
  }
}

Login.goToRegister();
Login.renderLogin();
