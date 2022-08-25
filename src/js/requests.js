export class Requests {
  static baseUrl = "https://blog-m2.herokuapp.com";
  static token = localStorage.getItem("@KenzieBlog:token") || "";
  static headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${this.token}`,
  };

  static async login(body) {
    const loginUser = await fetch(`${this.baseUrl}/users/login`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("@KenzieBlog:token", res.token);
        localStorage.setItem("@KenzieBlog:user_id", res.userId);
        // window.location.assign("src/pages/homepage.html");
        return res;
      })
      .catch((err) => console.log(err));
    return loginUser;
  }

  static async register(body) {
    const registerUser = await fetch(`${this.baseUrl}/users/register`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    return registerUser;
  }
}
