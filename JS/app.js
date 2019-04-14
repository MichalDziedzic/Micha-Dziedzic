
document.addEventListener("DOMContentLoaded", function () {

  // Initialize Firebase
var config = {
  apiKey: "AIzaSyCnumV6OP7OMTYBUzrDoX_UjNv8Fcxs7_o",
  authDomain: "todo-misza.firebaseapp.com",
  databaseURL: "https://todo-misza.firebaseio.com",
  projectId: "todo-misza",
  storageBucket: "todo-misza.appspot.com",
  messagingSenderId: "342906753616"
};
 const username ='';
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function (user) {
  if (user){
        console.log("signed in!");
        switchToAppPage();
        addUserDescribe(user);
        // todo get user data
        
      
  }
   else{

    // No user is signed in.
  
  }
});

  const addTaskButton = document.querySelector('#addTaskButton');
  const gripSection = document.querySelector('.section');
  const modal = document.querySelector('.modal-block');
  const cancel = document.querySelector('.cancel-x');
  const openModal = document.querySelector('#openModal');
  const todoForm = document.querySelector('.todoForm');
  const signInn = document.querySelector('.sign-in');
  const logout = document.querySelector('#logout');

  logout.addEventListener('click',flogOut);
  openModal.addEventListener('click', openmodal);
  cancel.addEventListener('click', closemodal);
  addTaskButton.addEventListener('click', closemodal);
  signInn.addEventListener('click',function(){

      const login=document.querySelector('#login').value;
      const password=document.querySelector('#password').value;
      signIn(login,password);



  });

  



//switch pages


function switchToLoginPage() {
  let WrapContent = document.querySelector("#wrapper-content");
  let wrapSignIn = document.querySelector("#wrapper-signin");
  WrapContent.classList.add("hidden");
  wrapSignIn.classList.add('inner');
  wrapSignIn.classList.remove("hidden");
}

function switchToAppPage() {
  let WrapContent = document.querySelector("#wrapper-content");
  let wrapSignIn = document.querySelector("#wrapper-signin");
  WrapContent.classList.remove("hidden");
  wrapSignIn.classList.remove('inner');
  wrapSignIn.classList.add("hidden");
}

// sign in user
function signIn(email,password){
firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
  console.log(password);
  console.log(email);
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage);
  // ...
});
}

//logout user
function flogOut(){

        signoutUserserw();
        switchToLoginPage();

}
function signoutUserserw(){

  firebase.auth().signOut().then(function () {
    alert('wylogowano');
    //WrapContent.style.setProperty('display', 'none')
      
  }).catch(function (error) {
    // An error happened.
  });

}

// create user 





//

function addUserDescribe(username){

  const navitem=document.querySelector('.dropdown-toggle');
  navitem.innerText=username.email;
  


}

  todoForm.addEventListener('submit', function (e) {

    console.log('jest w funcji!');
    e.preventDefault();
    const Textarea = this.querySelector('Textarea');
    const TaskName = this.querySelector('#NameTask');
    if (Textarea.value !== '' && TaskName.value !== '') {
      AddTask(TaskName.value, Textarea.value);
      Textarea.value = '';
      TaskName.value = '';

    }
  });



  function addClassToElem(elem, array) {

    for (var i = 0; array.length > i; i++) {

      elem.classList.add(array[i]);

    }


  }

  function openmodal() {


    modal.style.setProperty('display', 'block');


  }
  function closemodal() {

    modal.style.setProperty('display', 'none');
  }

  function AddTask(name, textfromarea) {
    console.log('dsgdsgsdf')

    const todo = document.createElement('div');

    addClassToElem(todo, ['row', 'section', 'd-flex', 'justify-content-center']);

    const todoBar = document.createElement('div');
    //todoBar.classList.add('col-6 row section-cards section-card text-white bg-info mb-3');
    addClassToElem(todoBar, ['col-6', 'row', 'section-cards', 'section-card', 'text-white', 'bg-info', 'mb-3'])

    const todoBarsecond = document.createElement('div');
    //todoBarsecond.innerHTML=name + "</div>";

    //todoBarsecond.classList.add('card-header header-card');
    addClassToElem(todoBarsecond, ['card-header', 'header-card']);
    todoBarsecond.innerText = name;


    const todoBarthird = document.createElement('div');
    todoBarthird.classList.add('card-body');


    const todoBarfour = document.createElement('p');
    todoBarfour.classList.add('card-text');
    todoBarfour.innerText = textfromarea;

    todo.appendChild(todoBar);
    todoBar.appendChild(todoBarsecond);
    todoBar.appendChild(todoBarthird);
    todoBarthird.appendChild(todoBarfour);
    // todoBar.append(todoBarsecond); 
    gripSection.append(todo); // dzieki 


  }





});

