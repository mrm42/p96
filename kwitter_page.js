var firebaseConfig = {
    apiKey: "AIzaSyCZOUrOHcEGfDUplsCQ2f2yEkxOzWxkyBE",
    authDomain: "kwitter-1a565.firebaseapp.com",
    databaseURL:"https://kwitter-1a565-default-rtdb.firebaseio.com/",
    projectId: "kwitter-1a565",
    storageBucket: "kwitter-1a565.appspot.com",
    messagingSenderId: "637272366898",
    appId: "1:637272366898:web:cf2d22373f2674a211c12b"
  };
  
  // Initialize Firebas-e
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send(){
      mgs = document.getElementsById("msg").value = ""

  }

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
