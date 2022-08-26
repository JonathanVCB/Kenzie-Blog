import { PosterEdit } from "./editPoster.js";
import { Requests } from "./requests.js";

let userId = localStorage.getItem("@KenzieBlog:user_id");

let arrayPosts = await Requests.getPosts();

let userData = await Requests.getUserData(userId);

class Posts {
  static async listPosts(posts) {
    const ul = document.querySelector(".posts__list");
    await posts.forEach(async (post) => {
      const cardPost = await Render.renderPost(post);

      ul.appendChild(cardPost);
    });
  }

  static logout() {
    const btnLogout = document.getElementById("logoutBtn");

    btnLogout.addEventListener("click", (event) => {
      localStorage.removeItem("@KenzieBlog:user_id");
      localStorage.removeItem("@KenzieBlog:token");

      window.location.assign("../../index.html");
    });
  }
}

class Render {
  static async renderPost(post) {
    const userIdLocalStorage = localStorage.getItem("@KenzieBlog:user_id");
    const liPostsList = document.createElement("li");
    const divPostImages = document.createElement("div");
    const divPostImagesUserImg = document.createElement("div");
    const userImg = document.createElement("img");
    const divButtonsDesktop = document.createElement("div");
    const editDesktopBtn = document.createElement("button");
    const deleteDesktopBtn = document.createElement("button");
    const divPostTextDiv = document.createElement("div");
    const postUsername = document.createElement("h3");
    const postText = document.createElement("p");
    const spanData = document.createElement("span");
    const divButtonsMobile = document.createElement("div");
    const editMobileBtn = document.createElement("button");
    const deleteMobileBtn = document.createElement("button");
    const imgEditBtn = document.createElement("img");
    const imgDeleteBtn = document.createElement("img");
    const imgEditBtn2 = document.createElement("img");
    const imgDeleteBtn2 = document.createElement("img");

    imgEditBtn.src = "../assets/edit 1.png";
    imgDeleteBtn.src = "../assets/trash-bin 1.png";

    editMobileBtn.id = "editMobileBtn";
    deleteMobileBtn.id = "editMobileBtn";

    divButtonsMobile.classList.add("posts__list__post__buttonsMobile");
    divButtonsMobile.classList.add("hidden");

    spanData.innerText = post.createdAt.substring(0, 10).replaceAll("-", "/");
    spanData.classList.add("posts__list__post__data");

    postText.innerText = post.content;

    postUsername.innerText = post.user.username;
    postUsername.classList.add("posts__list__post__user");

    divPostTextDiv.classList.add("posts__list__post__textDiv");

    imgEditBtn2.src = "../assets/edit 1.png";
    imgDeleteBtn2.src = "../assets/trash-bin 1.png";

    divButtonsDesktop.classList.add("posts__list__post__buttonsDesktop");
    divButtonsDesktop.classList.add("hidden");

    userImg.src = post.user.avatarUrl;

    divPostImagesUserImg.classList.add("posts__list__post__images__userImg");

    divPostImages.classList.add("posts__list__post__images");

    liPostsList.classList.add("posts__list__post");
    liPostsList.id = post.id;
    liPostsList.value = post.user.id;

    editDesktopBtn.addEventListener("click", () => {
      const idUser = liPostsList.id;
      PosterEdit.openModalEdit(idUser);
    });

    editMobileBtn.addEventListener("click", () => {
      PosterEdit.openModalEdit();
    });

    editMobileBtn.append(imgEditBtn);

    deleteMobileBtn.append(imgDeleteBtn);

    divButtonsMobile.append(editMobileBtn, deleteMobileBtn);

    divPostTextDiv.append(postUsername, postText);

    editDesktopBtn.append(imgEditBtn2);
    editDesktopBtn.id = "editDesktopBtn";
    deleteDesktopBtn.append(imgDeleteBtn2);
    deleteDesktopBtn.id = "deleteDesktopBtn";

    divButtonsDesktop.append(editDesktopBtn, deleteDesktopBtn);

    divPostImagesUserImg.append(userImg);

    divPostImages.append(divPostImagesUserImg, divButtonsDesktop);

    liPostsList.append(
      divPostImages,
      divPostTextDiv,
      spanData,
      divButtonsMobile
    );

    if (userIdLocalStorage == liPostsList.value) {
      divButtonsDesktop.classList.remove("hidden");

      divButtonsMobile.classList.remove("hidden");
    }

    return liPostsList;
  }

  static renderHeader(user) {
    const userContainer = document.querySelector(".header__container__user");
    const divImg = document.createElement("div");
    const userImg = document.createElement("img");
    const username = document.createElement("p");

    userImg.src = user.avatarUrl;

    username.innerText = user.username;

    divImg.append(userImg);

    userContainer.append(divImg, username);
  }
}

Render.renderHeader(userData);

Posts.logout();

Posts.listPosts(arrayPosts.data);
