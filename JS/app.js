
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

//  firebase databse realtime

//var database = firebase.database();

//create reference

//const dbReferobj=firebase.database().ref().child('object');
//const dbReflist=dbReferobj.child('hobi');














const signupform=document.querySelector('.signupForm');
firebase.auth().onAuthStateChanged(function (user) {
  if (user){
        console.log("signed in!");
        switchToAppPage();
        addUserDescribe(user);
        uid = user.uid;
        
      //  console.log(typeof(user.uid));
       // console.log(user);
       //create reference

    

        // todo get user data
        
      
  }
   else{

    // No user is signed in.
  
  }


  

});
//create new user


/*
  
signupform.addEventListener('submit',function(e){

  e.preventDefault();
  let newloginemail=this.querySelector('#login_signup').value;
  let newuserpasswd=this.querySelector('#password_signup').value;
  let nameuser=this.querySelector('#name_signup').value;
  let surnameuser=this.querySelector('#surname_signup').value;



  createaccound(newloginemail,newuserpasswd);
  signupform.reset();

});
*/

function checkuser(userobj){

        
       // console.log(user.uid);
      //  console.log(typeof(user.uid));
       // console.log(user);
       //create reference
         // const fuserid=user.uid;
         // const umail=user.email;
         firebase.auth().onAuthStateChanged(function (user) {
          if (user){
                console.log("wchodzi do psrawdzania");
                
                
                let uiduser=user.uid;
          firebase.database().ref("/"+uiduser).set(userobj);
                
             
                
              
          }
           else{
        
            // No user is signed in.
          
          }
        
        
          
        
        });
        /*  const july={
            id:"pieknie",
            meil:'xdds@op.pl'
          }
          const ident=54556343;
          var uid = firebase.auth().currentUser.uid;
          firebase.database().ref(uid + "/" +"heh").set('id:kala');   
          }
          //const db=firebase.database().ref("/"+ident);
         // db.set(july)
          //console.log(fuserid);
    

        // todo get user data
        */
      

        }


  






signupform.addEventListener('submit',function(e){
  

  e.preventDefault();

  //const course=new Object();
  const course1={
   newloginemail:this.querySelector('#login_signup').value,
   newuserpasswd:this.querySelector('#password_signup').value,
   nameuser:this.querySelector('#name_signup').value,
   surnameuser:this.querySelector('#surname_signup').value,
   Tasknum:0
  }
 // console.log(course1);
  //console.log(course1['newloginemail']);
  createaccound(course1);
  signupform.reset();
   

});










  const addTaskButton = document.querySelector('#addTaskButton');
  const gripSection = document.querySelector('.sectionAll');
  const modal = document.querySelector('.modal-block');
  const cancel = document.querySelector('.cancel-x');
  const openModal = document.querySelector('#openModal');
  const todoForm = document.querySelector('.todoForm');
  const signInn = document.querySelector('.sign-in');
  const logout = document.querySelector('#logout');
  
  const cancelBtn=document.querySelector('.cancel-btn');
 
  
 
  logout.addEventListener('click',flogOut);
  openModal.addEventListener('click', openmodal);
  cancel.addEventListener('click', closemodal);
  addTaskButton.addEventListener('click', closemodal);
  signInn.addEventListener('click',function(){

      const login=document.querySelector('#login').value;
      const password=document.querySelector('#password').value;
      signIn(login,password);



  });
                                    

  gripSection.addEventListener('click',function(e){
  
  if(e.target.closest('.cancel-btn')!==null){
    
    e.target.closest('.card-area').remove();
}});



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
  
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage);
  // ...
});

    //sentlueusserdata(email,password);

  
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


  const aSignUp=document.querySelector('.asign_up');
  //const formSigin=document.querySelector('.form-signin');
  aSignUp.addEventListener('click',asignupopen);
  const formSigin=document.querySelector('.sign_incontainer');
    const registerdiv=document.querySelector('.register');
    const backbtn=document.querySelector('.backdiv');
    backbtn.addEventListener('click',backtosigninpage);


  function asignupopen() {
    
  
    formSigin.classList.add("hidden");
    registerdiv.classList.remove('hidden');


  }
  
    
  function backtosigninpage(){
         
          formSigin.classList.remove("hidden");
          registerdiv.classList.add('hidden');

  }
  
function createaccound(userobj){

  

  firebase.auth().createUserWithEmailAndPassword(userobj['newloginemail'],userobj['newuserpasswd']).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

 
  checkuser(userobj);



}



//

function addUserDescribe(username){

  const navitem=document.querySelector('.dropdown-toggle');
  navitem.innerText=username.email;
  


}
  
    //const deadDate= document.querySelector('#deadlinedata');
    //const deadTime=document.querySelector('#deadlinetime');
  /*if(deadDate!==null)
  {
    deadDate.addEventListener('onchange',function(){

    var inputDate = deadDate.value; 
     var dateshow = new Date(inputDate);
      console.log(dateshow.getFullYear());


    });
  }

*/
  let count=0;

  todoForm.addEventListener('submit', function (e) {

    console.log('jest w funcji!');
    e.preventDefault();
    const Textarea = this.querySelector('Textarea');
    const TaskName = this.querySelector('#NameTask');
    var deadDate= document.querySelector('#deadlinedate');
    var deadTime=document.querySelector('#deadlinetime');

    
    
    
    if (Textarea.value !== '' && TaskName.value !== '') {

      const tasknew={
        taskName:this.querySelector('#NameTask').value,
        taskarea:this.querySelector('Textarea').value
        //nameuser:this.querySelector('#name_signup').value,
        //surnameuser:this.querySelector('#surname_signup').value,
     
       }

            
            AddTask(TaskName.value, Textarea.value , deadDate.value ,deadTime.valueAsDate);

            var uid = firebase.auth().currentUser.uid;
            firebase.database().ref(uid +"/Tasknum").on("value", function(snapshot) {
            var Tasknumber = snapshot.val();
            console.log(Tasknumber);
            
            //firebase.database().ref(uid+"/Tasknum").update(counter(Tasknumber));
            
            
            
            //firebase.database().ref("/"+uid+"/"+"Tasks"+"/"+counter()).set(tasknew);   
          
            console.log('przeszlo');
            
          
            
           
            
           // console.log(inputTime+":"+(inputTime.getHours()-1));


            

            });
            Textarea.value = '';
            TaskName.value = '';
            deadDate.value='';
            //firebase.database().ref("/"+uid+"/Tasknum").set(counter(Tasknum));
          }
      
    
    
  });

//function timeprint(dateform,timeform){

  function counter(next){
              
    next=next+1;

    
    return next;




}

  function addClassToElem(elem, array){

    
    for (var i = 0; array.length > i; i++)
      {
        elem.classList.add(array[i]);

      }

  }
  

  function openmodal() {


    modal.style.setProperty('display', 'block');
    


  }
  function closemodal() {

    modal.style.setProperty('display', 'none');
  }
  
  
  

  function AddTask(name,textfromarea,inputDate,inputTime) {
    


    var dateshow = new Date(inputDate);

    const todo = document.createElement('div');

    addClassToElem(todo, ['row', 'section', 'd-flex', 'justify-content-center']);

    const todoBar = document.createElement('div');
    //todoBar.classList.add('col-6 row section-cards section-card text-white bg-info mb-3');
    //col-12 col-sm-12 col-md-6 col-lg-6
    addClassToElem(todoBar, ['row','col-sm-12','col-md-6','col-12','col-lg-6','section-cards', 'section-card', 'text-white', 'bg-info', 'mb-3'])

    const todoBarsecond = document.createElement('div');
    //todoBarsecond.innerHTML=name + "</div>";

    //todoBarsecond.classList.add('card-header header-card');
    addClassToElem(todoBarsecond, ['card-header', 'header-card','d-flex','justify-content-between']);
    todoBarsecond.innerText = name;

    const buttonsblock=document.createElement('div');
    buttonsblock.classList.add('buttons');

    const todoBarthird = document.createElement('div');
    todoBarthird.classList.add('card-body');

    const cardArea=document.createElement('div');
    cardArea.classList.add('card-area');

    const todoBarfour = document.createElement('p');
    todoBarfour.classList.add('card-text');
    todoBarfour.innerText = textfromarea;

   // createbuttons(['btnone','btntwo','btnthree'],['btn','btn-info','edit'],['btn','btn-info','cancel-btn']);

    const createbtnone=document.createElement('button');
    const createbtntwo=document.createElement('button');
    addClassToElem(createbtnone,['btn','btn-info','edit']);
    addClassToElem(createbtntwo,['btn','btn-info','cancel-btn']);

    const createione=document.createElement('i');
    const createitwo=document.createElement('i');

    addClassToElem(createione,['far','fa-edit']);
    addClassToElem(createitwo,['far','fa-times-circle']);

    
    const dateDeadline=document.createElement('div');
    addClassToElem(dateDeadline,['card-header','date-deadline']);
    dateDeadline.innerText="Deadline : "+dateshow.getDay()+"/"+dateshow.getMonth()+"/"+dateshow.getFullYear()+" "+(inputTime.getHours()-1)+":"+inputTime.getMinutes();
    cardArea.append(todo) 
    todo.appendChild(todoBar);
    todoBar.appendChild(todoBarsecond);
    todoBar.appendChild(todoBarthird);
    todoBarthird.appendChild(todoBarfour);
    // todoBar.append(todoBarsecond);
    todoBarsecond.append(buttonsblock);
    gripSection.append(cardArea);
    buttonsblock.append(createbtnone);
    buttonsblock.append(createbtntwo);
    createbtnone.append(createione);
    createbtntwo.append(createitwo);
    todoBarthird.append(dateDeadline);
      

    //gripSection.append(todo); // dzieki 


  }





});

