function login() {
    var username=document.getElementById("UserName").value;
  localStorage.setItem("user_name", username);
  window.location="kwitter_room.html";
}