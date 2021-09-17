const firebaseConfig = {
    apiKey: "AIzaSyBZ-JyUOevo8QTASawA7vRFff1a984P3xc",
    authDomain: "kwitter-be40c.firebaseapp.com",
    databaseURL: "https://kwitter-be40c-default-rtdb.firebaseio.com",
    projectId: "kwitter-be40c",
    storageBucket: "kwitter-be40c.appspot.com",
    messagingSenderId: "742229185917",
    appId: "1:742229185917:web:b3f1c6cb54a9e4a25da814"
  };
  
  const app = initializeApp(firebaseConfig);
  function addUser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose: "adding user"

      });
      
  }
