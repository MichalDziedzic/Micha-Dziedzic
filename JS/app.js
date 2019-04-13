
document.addEventListener("DOMContentLoaded", function () {
  
  




  

  const addTaskButton = document.querySelector('#addTaskButton');
  const gripSection = document.querySelector('.section');
  const modal=document.querySelector('.modal-block');
  const cancel=document.querySelector('.cancel-x');
  const openModal=document.querySelector('#openModal');
  const todoForm=document.querySelector('.todoForm');
  

  
  openModal.addEventListener('click', openmodal);
  cancel.addEventListener('click',closemodal);
  addTaskButton.addEventListener('click',closemodal);
  todoForm.addEventListener('submit',function(e){

    console.log('jest w funcji!');
    e.preventDefault();
      const Textarea = this.querySelector('Textarea');
      const TaskName = this.querySelector('#NameTask');
      if(Textarea.value !=='' && TaskName.value !==''){
        AddTask(TaskName.value,Textarea.value);
        Textarea.value='';
        TaskName.value='';
        
      }
  });
 
 

  function addClassToElem(elem, array) {

    for (var i = 0; array.length > i; i++) {

      elem.classList.add(array[i]);

    }


  }

  function openmodal(){

    
   modal.style.setProperty('display','block');


  }
  function closemodal(){

    modal.style.setProperty('display','none');
  }

  function AddTask(name,textfromarea) {
    console.log('dsgdsgsdf')

    const todo = document.createElement('div');

    addClassToElem(todo, ['row', 'section', 'd-flex', 'justify-content-center']);

    const todoBar = document.createElement('div');
    //todoBar.classList.add('col-6 row section-cards section-card text-white bg-info mb-3');
    addClassToElem(todoBar, ['col-6', 'row', 'section-cards','section-card', 'text-white', 'bg-info','mb-3'])

    const todoBarsecond = document.createElement('div');
    //todoBarsecond.innerHTML=name + "</div>";
    
    //todoBarsecond.classList.add('card-header header-card');
    addClassToElem(todoBarsecond, ['card-header', 'header-card']);
    todoBarsecond.innerText=name;
    

    const todoBarthird = document.createElement('div');
    todoBarthird.classList.add('card-body');


    const todoBarfour = document.createElement('p');
    todoBarfour.classList.add('card-text');
    todoBarfour.innerText =textfromarea;

    todo.appendChild(todoBar);
    todoBar.appendChild(todoBarsecond);
    todoBar.appendChild(todoBarthird);
    todoBarthird.appendChild(todoBarfour); 
   // todoBar.append(todoBarsecond); 
    gripSection.append(todo); // dzieki 


  }

  





});

