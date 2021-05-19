// ********** MODAL ****************
const showModal = document.getElementById("show-modal-btn");
const backDrop = document.getElementById("modal-backDrop");
const modalHide = document.getElementById("modal-hide");
const modal = document.getElementById("modal");
const modalHideIcon = document.getElementById("modal-hide-icon");

if (showModal) {
  showModal.addEventListener("click", () => {
    console.log("clciked");
    backDrop.classList.add("modal-backdrop");
    modal.classList.remove("modal-hide");
    modal.classList.add("modal");
    modal.classList.add("modal-display");
  });
}

const closeModal = () => {
  backDrop.classList.remove("modal-backdrop");
  modal.classList.remove("modal");
  modal.classList.remove("modal-display");
  modal.classList.add("modal-hide");
};

if (modalHide) {
  modalHide.addEventListener("click", closeModal);
}

if (modalHideIcon) {
  modalHideIcon.addEventListener("click", closeModal);
} 

// ************* SNACKBAR **************
const snackbar = document.getElementById("snackbar-contents");

const showSnackbar = document.getElementById("show-Snackbar");

const snackbarClose = document.getElementById("snackbar-close");

if (showSnackbar) {
  showSnackbar.addEventListener("click", () => {
    snackbar.style.display = "block";
    if ((snackbar.style.display = "block")) {
      setTimeout(() => {
        snackbar.style.display = "none";
      }, 5000);
    }
  });
}

if (snackbarClose) {
  snackbarClose.addEventListener("click", () => {
    snackbar.style.display = "none";
  });
}