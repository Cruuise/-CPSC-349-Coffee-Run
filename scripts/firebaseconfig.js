(function (window) {
    'use strict';
    var App = window.App || {};
    
      window.FirebaseConfig = {
        apiKey: "AIzaSyDpQ914neGWol0Cg7siZtDRXERex6fSAZo",
        authDomain: "coffeerun-ea76a.firebaseapp.com",
        projectId: "coffeerun-ea76a",
        storageBucket: "coffeerun-ea76a.appspot.com",
        messagingSenderId: "794316961297",
        appId: "1:794316961297:web:a1275bb27de8e0443c63b0",
        measurementId: "G-J10RKHSVRL"
      };
    App.FirebaseConfig = FirebaseConfig;
    firebase.initializeApp(App.FirebaseConfig)
    window.App = App;
  
  })(window);




// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDpQ914neGWol0Cg7siZtDRXERex6fSAZo",
//   authDomain: "coffeerun-ea76a.firebaseapp.com",
//   projectId: "coffeerun-ea76a",
//   storageBucket: "coffeerun-ea76a.appspot.com",
//   messagingSenderId: "794316961297",
//   appId: "1:794316961297:web:a1275bb27de8e0443c63b0",
//   measurementId: "G-J10RKHSVRL"
// };

// // Initialize Firebase
// const App = initializeApp(firebaseConfig);
// const analytics = getAnalytics(App);
// window.app = App;


