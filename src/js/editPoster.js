import { Requests } from "./requests.js";

export class PosterEdit {
  static openModalEdit(id) {
    const modal = document.querySelector(".modalEdit");
    modal.classList.remove("hidden");
    this.edit(id);
  }

  static edit(id) {
    const textEdit = document.getElementById("edit");
    const sendEditBtn = document.getElementById("sendEdit");

    sendEditBtn.addEventListener("click", (event) => {
      const data = {
        content: textEdit.value,
      };
      Requests.editPoster(id, data);
    });
  }

  static closeModal() {
    const closeBtn = document.getElementById("closeModal");
    const modal = document.querySelector(".modalEdit");

    closeBtn.addEventListener("click", (event) => {
      event.preventDefault();
      modal.classList.add("hidden");
    });
  }
}

PosterEdit.closeModal();
