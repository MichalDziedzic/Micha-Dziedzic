
let addTaskButton= null;
let gripSection=null;


document.addEventListener("DOMContentLoaded",function(){
    
  const addTaskButton=document.querySelector('#addTaskButton');
  const gripSection=document.querySelector('#section');  

    
    

    addTaskButton.addEventListener('click',AddTask,false);
    
    
    
    
    

    
});


function AddTask()
{

    const todo =document.createElement('div');
    todo.classList.add("row  section d-flex justify-content-center"); 
    

                const todoBar = document.createElement('div');
                todoBar.classList.add('col-6 row section-cards section-card text-white bg-info mb-3');

                const todoBarsecond = document.createElement('div');
                todoBarsecond.classList.add('card-header header-card');

                const todoBarthird = document.createElement('div');
                todoBarthird.classList.add('card-body');
                
                const todoBarfour = document.createElement('div');
                todoBarfour.classList.add('card-text');
                todoBarfour.innerText="test";

        todo.appendChild(todoBar);
        todoBar.appendChild(todoBarsecond);
        todoBarsecond.appendChild(todoBarthird);
        todoBarthird.appendChild(todoBarfour);
        todo.append(gripSection);


}

