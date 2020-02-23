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
     if(InputDeviceInfo.value == ""){
         alert('add a task');
     }
    e.preventDefault();


// taskList.appendChild(taskInput);
const li = document.createElement('li');
li.className ='list-item';
li.setAttribute('style','color:purple')
var taskInput = document.querySelector('#task');

li.appendChild(document.createTextNode(taskInput.value));

// form.appendChild(taskInput);
const link = document.createElement('a');
link.setAttribute('href','#');
link.className = "delete-item secondary-content";
const iconBtn = document.createElement('i');
iconBtn.className = "fa fa-remove";
link.appendChild(iconBtn);
// or we can do
// link.innerHTML = '<i class="fa fa-remove"></i>'
html = 
li.appendChild(link);

// append li to ul

taskList.appendChild(li);

// clear input 
taskInput.value= "";


// var blank = document.querySelector('#task').value;
// var li = document.createElement('li');
// li.appendChild(document.createTextNode(blank));

}


// remove task 
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are you sure?')) {
       console.log('delete item');
       e.target.parentElement.parentElement.remove();
    }
}
}

// clear task 

function clearTasks(e){
// tasklist.innerHTML = "";
while(taskList.firstChild) {
    taskList.removeChild(tasklist.firstChild);
  }
}



// Filter tasks 

function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textcontent;
    if(item.toLowerCase().indexOf(text) != -1){
        task.style.display = 'block';
        } else {
            task.style.display = "none";
        }
    }
    );


}