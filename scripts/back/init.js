// var firebaseConfig = {
//     apiKey: "AIzaSyCNiYvXdYze9dCL4oANqBigWXdMsqDte0A",
//     authDomain: "elearning-fefd0.firebaseapp.com",
//     projectId: "elearning-fefd0",
//     storageBucket: "elearning-fefd0.appspot.com",
//     messagingSenderId: "558840923885",
//     appId: "1:558840923885:web:2ffb4d2296c24b62f9eee4"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: "AIzaSyDWSFvGr-o6QQEbBL2xQojVSSbcVOsfnZk",
//   authDomain: "e-learning-f8f38.firebaseapp.com",
//   projectId: "e-learning-f8f38",
//   storageBucket: "e-learning-f8f38.appspot.com",
//   messagingSenderId: "764663485551",
//   appId: "1:764663485551:web:fda16d1a50b306d27c299a",
// };

var firebaseConfig = {
  apiKey: "AIzaSyCNiYvXdYze9dCL4oANqBigWXdMsqDte0A",
  authDomain: "elearning-fefd0.firebaseapp.com",
  projectId: "elearning-fefd0",
  storageBucket: "elearning-fefd0.appspot.com",
  messagingSenderId: "558840923885",
  appId: "1:558840923885:web:2ffb4d2296c24b62f9eee4"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const ref = firebase.storage().ref();
const auth = firebase.auth();

const { serverTimestamp } = firebase.firestore.FieldValue;

const courseCollection = db.collection("course");
const lessonCollection = db.collection("lessons");
const commentCollection = db.collection("comment");
const userCollection = db.collection("user");


function redirectIfAuth(url){
  auth.onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        location.assign(url)
        // return user
    } else {
        // No user is signed in.
        alert("no active user")
        location.assign("./login.html")

    }
  });
}

function signOut() {
  auth.signOut().then(resp => {
      location.assign("./login.html")
  }).catch((error) => {
      console.log(error.message)
  })
}

function exec(){
  auth.onAuthStateChanged(function(user) {
      if (user) {
          document.getElementById("adding").innerHTML+=`<div class="signout">
          <button onclick="signOut()" id="signout">سجل الخروج</button>
          <img src="images/public/profile.png" alt="">
          <span id="profileEmail">${user.email}</span>
      </div>`
      } else {
          document.getElementById("adding").innerHTML+= `
          <div class="signin-signup">
          <button style="cursor: pointer;" onclick="location.assign('./login.html')" id="signin">دخول</button>
          <button style="cursor: pointer;" onclick="location.assign('./register.html')" id="signup">سجل مجاناً</button>
      </div>
          `
      }
    });
}

// preloader
var myVar;
window.onload =function myFunction() {
  debugger
  exec()
  myVar = setTimeout(showPage, 3000);

}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.querySelector(".afterloader").style.display = "block";
  clearTimeout(myVar)
}