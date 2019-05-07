document.write("<html>");
document.write("<head>");
document.write("<meta http-equiv='refresh' content='180'/>");
document.write("</head>");
document.write("</html>");

var t = document.getElementById("t1");
var s = document.getElementById("t2");
var t3 = document.getElementById("t3");
var temp = document.getElementById("t4");

var tri = document.getElementById("tr");

function reset() {
  var tmp = new Date().getDate();
  var dat = tmp.toString();
  firebase
    .database()
    .ref("id/date")
    .set(dat);
  window.location.reload();
}

var firebaseref1 = firebase
  .database()
  .ref()
  .child("id/distance");

firebaseref1.on("value", function (datashot) {
  var a = datashot.val();
  var b = Number(a);
  if (b < 20) {
    t.value = "High";
    tri.style.background = "#E74C3C";
  } else if (b >= 20 && b < 80) {
    t.value = "Medium";
    tri.style.background = "#F7DC6F";
  } else {
    t.value = "Low";
    tri.style.background = "#58D68D";
  }
});

var firebaseref2 = firebase
  .database()
  .ref()
  .child("id/location");

firebaseref2.on("value", function (datashot) {
  s.value = datashot.val();
});

var firebaseref3 = firebase
  .database()
  .ref()
  .child("id/date");

firebaseref3.on("value", function (datashot) {
  var x = datashot.val();
  var b = Number(x);
  var tmp = new Date().getDate();
  var dat = tmp.toString();
  var a = Number(dat);
  t4.value = a - b + " days ";
  var diff = a - b;
  if (diff > 2) {
    tri.style.background = "#E74C3C";
  }
});


// (function() {
//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyAEaIeUPYF9xiQf_KSbmkc8-uYqs9llsqY",
//     authDomain: "waste-disposal-management.firebaseapp.com",
//     databaseURL: "https://waste-disposal-management.firebaseio.com",
//     storageBucket: "waste-disposal-management.appspot.com"
//     // messagingSenderId: "51965125444878"
//   };
//   firebase.initializeApp(config);

//   /*   var userDataRef = firebase.database().ref("distance");
//   userDataRef.once("value").then(function(snapshot) {
//     // childData will be the actual contents of the child

//     var distance_val = childSnapshot.val().distance;
//     //   var id_val = childSnapshot.val().AssignedID;
//     document.getElementById("distance").innerHTML = distance_val;
//     //   document.getElementById("id").innerHTML = id_val;
//   });
// })();*/

//   var userDataRef = firebase
//     .database()
//     .ref("UserData")
//     .orderByKey();
//   userDataRef.once("value").then(function(snapshot) {
//     var distance_val = distance.val();

//     $("#distance").append(distance_val);
//   });
// })();