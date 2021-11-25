const taskList = document.getElementById('lista-tarefas');

function addTask() {
  const taskWrited = document.getElementById('texto-tarefa').value;
  const newTask = document.createElement('li');
  newTask.innerText = taskWrited;
  newTask.classList.add('task');
  taskList.appendChild(newTask);
  document.getElementById('texto-tarefa').value = '';
}

function changeBackground(event) {
  const previousTask = document.querySelector('.background');
  if (previousTask != null) {
    document.querySelector('.background').classList.remove('background');
  }
  event.target.classList.add('background');
}

function lineThru(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}
function cleanAll() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

function cleanFinished() {
  let allTasks = document.querySelectorAll('.task');
  let tamanho = allTasks.length;
  for (let i = 0; i < tamanho; i += 1) {
    allTasks = document.querySelectorAll('.task');
    if (allTasks[i].classList.contains('completed')) {
      allTasks[i].remove();
      i -= 1;
      tamanho -= 1;
    }
  }
}

function saveTasks() {
  const valor = taskList.innerHTML;
  localStorage.setItem('list', valor);
}

function loadTasks() {
  const saved = localStorage.getItem('list');
  taskList.innerHTML = saved;
}

function cleanItem() {
  document.getElementsByClassName('background')[0].remove();
}

function moveUP() {
  const allTasks = document.querySelectorAll('.task');
  for (let i = 0; i < allTasks.length; i += 1) {
    if (allTasks[i].classList.contains('background') && (i - 1) >= 0) {
      const taskMoved = allTasks[i].innerText;
      const taskUpper = allTasks[(i - 1)].innerText;
      allTasks[(i - 1)].innerText = taskMoved;      
      allTasks[i].innerText = taskUpper;
      
      allTasks[i].classList;

      allTasks[i - 1].classList.add('background');
      allTasks[i].classList.remove('background');
    }
  }
}

function moveDown() {
  const allTasks = document.querySelectorAll('.task');
  for (let i = 0; i < allTasks.length; i += 1) {
    if (allTasks[i].classList.contains('background') && (i + 1) < allTasks.length) {
      const taskMoved = allTasks[i].innerText;
      const taskDown = allTasks[(i + 1)].innerText;
      allTasks[(i + 1)].innerText = taskMoved;
      allTasks[i].innerText = taskDown;
      allTasks[i + 1].classList.add('background');
      allTasks[i].classList.remove('background');
      return;
    }
  }
}

loadTasks();

const button = document.getElementById('criar-tarefa');
button.addEventListener('click', addTask);
document.addEventListener('keypress', function(e){
  if(e.which == 13){
     addTask();
  }
}, false);


const cleanerAll = document.getElementById('apaga-tudo');
const cleanerFinished = document.getElementById('remover-finalizados');
const savingTasks = document.getElementById('salvar-tarefas');
const cleanerItem = document.getElementById('remover-selecionado');
const moverUp = document.getElementById('mover-cima');
const moverDown = document.getElementById('mover-baixo');
taskList.addEventListener('click', changeBackground);
taskList.addEventListener('dblclick', lineThru);
cleanerAll.addEventListener('click', cleanAll);
cleanerFinished.addEventListener('click', cleanFinished);
savingTasks.addEventListener('click', saveTasks);
cleanerItem.addEventListener('click', cleanItem);
moverUp.addEventListener('click', moveUP);
moverDown.addEventListener('click', moveDown);
