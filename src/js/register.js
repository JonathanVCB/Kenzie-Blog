import { Requests } from "./requests.js";

class Register {
  static registerUser() {
    const inputName = document.getElementById("inputName");
    const inputEmail = document.getElementById("inputEmail");
    const inputPhotograph = document.getElementById("inputPhotograph");
    const inputPassword = document.getElementById("inputPassword");
    const btnRegister = document.getElementById("btnRegister");

    btnRegister.addEventListener("click", async (event) => {
      event.preventDefault();

      const data = {
        username: inputName.value,
        email: inputEmail.value,
        avatarUrl: inputPhotograph.value,
        password: inputPassword.value,
      };
      await Requests.register(data);
    });
  }

  static goToLogin() {
    const btnGoToLogin = document.getElementById("login");
    btnGoToLogin.addEventListener("click", () => {
      window.location.assign("../../index.html");
    });
  }
}
Register.goToLogin();
Register.registerUser();
