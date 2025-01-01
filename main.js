type="module">
         // Import the functions you need from the SDKs you need
                    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
                    import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";


  // Your web app's Firebase configuration
                       const firebaseConfig = {
                          apiKey: "AIzaSyBSVbZm1JDK3nd87JImMcbAOCftDQIE5Sc",
                          authDomain: "ny-online-solution.firebaseapp.com",
                          projectId: "ny-online-solution",
                          storageBucket: "ny-online-solution.appspot.com",
                          messagingSenderId: "251580029275",
                          appId: "1:251580029275:web:2ce1459f6b866de383e27e"
                       };

  // Initialize Firebase
                        const app = initializeApp(firebaseConfig);

  //get ref to database service
                        const db = getDatabase(app);

                         document.getElementById("Submit").addEventListener('click', function(e){
                         e.preventDefault();
                         set(ref(db, 'user/' + document.getElementById("Name").value),
                         {
                             username: 'user/' + document.getElementById("Name").value,
                             Email: 'user/' + document.getElementById("Email").value,
                             Mobile: 'user/' + document.getElementById("Mobile").value,
                             Message: 'user/' + document.getElementById("Message").value,
                        });
                          alert("Submit sucessfull");
  })
