
var firebaseConfig = {
      apiKey: "AIzaSyD5Zcecfcj6Vdb83pzlnKYDnIE3tgw_GYA",
      authDomain: "yes-chat-d15c0.firebaseapp.com",
      databaseURL: "https://yes-chat-d15c0-default-rtdb.firebaseio.com",
      projectId: "yes-chat-d15c0",
      storageBucket: "yes-chat-d15c0.appspot.com",
      messagingSenderId: "928657980791",
      appId: "1:928657980791:web:9443b26bec48d52f627572",
      measurementId: "G-CT07EHCHWV"
    };
  

firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      
      });});}
getData();
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name, room_name");

      window.location = "kwitter_page.html";
}
function redirectToRoomNAme(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}