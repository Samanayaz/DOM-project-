// defining our UI variables 


const form = document.querySelector('#task-form');
//  this is our new-task input form 

const taskList = document.querySelector('.collection');
//    this is ul 

const clearBtn = document.querySelector('.clear-tasks');
// this is our "clear task' button

const filter = document.querySelector('#filter');
//  this is our filter input 

const taskInput = document.querySelector('#task'); 

// load all the event listener 
loadEventListener();

function loadEventListener(){
    // add -task event 
    form.addEventListener('submit', addTask);

    // remove task event 
    taskList.addEventListener('click',removeTask);

    // clear task 
    clearBtn.addEventListener('click', clearTasks);

    // filter task 
    filter.addEventListener('keyup', filterTasks);
}

// add task
function addTask(e){
e.preventDefault();

// taskList.appendChild(taskInput);
var li = document.createElement('li');
li.className ='list-item';
li.setAttribute('style','color:purple')
var taskInput = document.querySelector('#task').value;

li.appendChild(document.createTextNode(taskInput));

// form.appendChild(taskInput);
var link = document.createElement('a');
link.setAttribute('href','#');
link.className = "delete-item secondary-content";
var iconBtn = document.createElement('i');
iconBtn.className = "fa fa-remove";
link.appendChild(iconBtn);
li.appendChild(link);


taskList.appendChild(li);


// var blank = document.querySelector('#task').value;
// var li = document.createElement('li');
// li.appendChild(document.createTextNode(blank));

}


// remove task 
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')) {
       console.log('delete item');
       e.target.parentElement.parentElement.remove();
    }
}

// clear task 

function clearTasks(e){

    e.preventDefault();
    if(e.target.parentElement.classList.contains('list-item')){
        e.target.parentElement.parentElement.remove();
    }
    // const clearBtn = document.querySelector('.clear-tasks');
    
    clearBtn.style.color =  "red";
  
    console.log('clear-tasks');
    
}


// Filter tasks 
function filterTasks(e) {
    
    const filter = document.querySelector('#filter');
 
   const list = document.querySelector(".list-item");
     filter.forEach(function (text){
         var taskName = list.firstChild.textContent;
         if(taskName.textContent.indexOf(text)!= -1){
         textContent.firstChild.style.display = "block";
         } else {
             textContent.firstChild.style.display = "none";
         }
     })
 
   
 }

