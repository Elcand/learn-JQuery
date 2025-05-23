function showNotif(message) {
  const toast = $(`<div class="toast">${message}</div>`);
  $("#notif-container").append(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}
