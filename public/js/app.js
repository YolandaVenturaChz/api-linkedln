$(document).ready(function () {

  IN.Event.on(IN, `auth`, getProfileData);

  function onSuccess(data) {
    console.log(data);
    let profileName = `${data.firstName} ${data.lastName}`;
    let title = data.headline;
    let url = data.siteStandardProfileRequest.url;
    window.localStorage.setItem(`user-name`,profileName);
    window.localStorage.setItem(`headline`, title);
    window.localStorage.setItem(`url`, url);
    window.location.href = `view/home.html`;
  }

  function onError(error) {
    alert(error);
  }
  function getProfileData() {
    IN.API.Raw(`/people/~`).result(onSuccess).error(onError);
  }
});