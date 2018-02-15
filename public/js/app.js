$(document).ready(function () {
    
  function onLinkedInLoad() {
    IN.Event.on(IN, "auth", getProfileData);
    console.log();
  }
  
      
    var err = error(function (data) {
      console.log(data);
    })
   
});