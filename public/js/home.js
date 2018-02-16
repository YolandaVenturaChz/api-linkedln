$(document).ready(function () {
  let profileName = window.localStorage.getItem(`user-name`);
  let title = window.localStorage.getItem(`headline`);
  let url = window.localStorage.getItem(`url`);
  $(`#profile`).text(profileName);
  $(`#title`).text(title);
  $(`#url`).attr(`href`, url);
  $(`#btn`).on(`click`, function () {
    IN.User.logout(logout);
    function logout() {
      window.location.href = `../index.html`;
    }
  });
});

