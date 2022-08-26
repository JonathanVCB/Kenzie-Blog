import { Requests } from "./requests.js";

export class PosterEdit {
  static openModalEdit(id) {
    const modal = document.querySelector(".modalEdit");
    modal.classList.remove("hidden");
    console.log(id);
    this.edit(id);
  }

  static edit(id) {
    const textEdit = document.getElementById("edit");
    const sendEditBtn = document.getElementById("sendEdit");

    sendEditBtn.addEventListener("click", (event) => {
      event.preventDefault();

      const data = {
        content: textEdit.value,
      };
      Requests.editPoster(id, data);
    });
  }
}
