// Initialize Firebase
var config = {
    apiKey: "AIzaSyCnumV6OP7OMTYBUzrDoX_UjNv8Fcxs7_o",
    authDomain: "todo-misza.firebaseapp.com",
    databaseURL: "https://todo-misza.firebaseio.com",
    projectId: "todo-misza",
    storageBucket: "todo-misza.appspot.com",
    messagingSenderId: "342906753616"
  };

   firebase.initializeApp(config);

  
   firebase.auth().onAuthStateChanged(function(user){
    if(user){
      if(window.location!=="file:///C/Users/Michal/Documents/PROGRAMOWANIE/Projekty/Projekt_to_Do/Micha-Dziedzic/index.html")
      {
        alert('przeniesc, zalogowany');
      // window.location="index.html";
       
      
    }
  }else{
      if(window.location!=="file:///C/Users/Michal/Documents/PROGRAMOWANIE/Projekty/Projekt_to_Do/Micha-Dziedzic/sign_in.html")
      {
        alert('niezalogowany');
        //window.location="Sign.html";
       
      }
      }
  });
  
  


 const formsignin=document.querySelector('.form-signin');

 formsignin.addEventListener('submit',(e)=>{

    e.preventDefault();

    const email=formsignin['login'].value;

    const password=formsignin['password'].value;
    
    firebase.auth().signInWithEmailAndPassword(email,password).catch(function(error) {
        alert('userlogin');
        console.log(password);
        console.log(email);
        var errorCode = error.code;
        var errorMessage = error.message;
         alert(errorMessage);
        // ...
      });

 })

const logout=document.querySelector('#logout');
logout.addEventListener('click',(e)=>{

    e.preventDefault();

    firebase.auth().signOut().then(function() {
        alert('wylogowano');
      }).catch(function(error) {
        // An error happened.
      });



})




































  
  