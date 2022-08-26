import { Requests } from "./requests.js";

class PosterCreate {
  static create() {
    const text = document.getElementById("writePost__area");
    const btnMobile = document.getElementById("sendMobileBtn");
    const btnDesktop = document.getElementById("sendDesltopBtn");

    btnMobile.addEventListener("click", (event) => {
      event.preventDefault();
      const data = {
        content: text.value,
      };
      Requests.createPoster(data);
    });

    btnDesktop.addEventListener("click", (event) => {
      event.preventDefault();

      const data = {
        content: text.value,
      };
      Requests.createPoster(data);
    });
  }
}

PosterCreate.create();
