
var  firebaseConfig = {
      apiKey: "AIzaSyBZ-JyUOevo8QTASawA7vRFff1a984P3xc",
      authDomain: "kwitter-be40c.firebaseapp.com",
      databaseURL: "https://kwitter-be40c-default-rtdb.firebaseio.com",
      projectId: "kwitter-be40c",
      storageBucket: "kwitter-be40c.appspot.com",
      messagingSenderId: "742229185917",
      appId: "1:742229185917:web:b3f1c6cb54a9e4a25da814"
    };
  
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML=" welcome " +user_name+"!";

    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose: "adding room name"
          });
          localStorage.setItem("room_name" , room_name);
          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name - "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}