
  var firebaseConfig = {
      apiKey: "AIzaSyD6sFJaiXtwLzUui76RyaM243ZGxvmo8eo",
      authDomain: "sansational-chatapp.firebaseapp.com",
      projectId: "sansational-chatapp",
      storageBucket: "sansational-chatapp.appspot.com",
      messagingSenderId: "117334835588",
      appId: "1:117334835588:web:bcb57d29d90b9cffff1dd1"
    };
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
