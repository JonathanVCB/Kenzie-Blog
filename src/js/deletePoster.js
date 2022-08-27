import { Requests } from "./requests.js";

export class Delete {
  static showDeleteModal(id) {
    const modalDelete = document.querySelector(".modalDelete");

    modalDelete.classList.remove("hidden");

    this.deletePost(id);
  }

  static deletePost(id) {
    const modalDelete = document.querySelector(".modalDelete");
    const deleteBtn = document.getElementById("sendDelete");

    deleteBtn.addEventListener("click", () => {
      Requests.deletePost(id);
      modalDelete.classList.add("hidden");
    });
  }

  static closeModal() {
    const modalDelete = document.querySelector(".modalDelete");
    const closeBtn = document.getElementById("closeModal2");

    closeBtn.addEventListener("click", (event) => {
      event.preventDefault();
      modalDelete.classList.add("hidden");
    });
  }
}

Delete.closeModal();
