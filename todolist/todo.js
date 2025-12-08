const input=document.getElementById('taskInput');
const addbut=document.getElementById('addTaskBtn');
const tasklist=document.getElementById('taskList');
const time=document.getElementById('taskTime');
const date=document.getElementById('taskDate');
// localStorage.removeItem('tasks');
let tasks=JSON.parse(localStorage.getItem('tasks')) || []
if(addbut){
addbut.addEventListener('click',() =>{
   const inputval=input.value;
   const dateval=date.value;
   const timeval=time.value;
   if (inputval===''){
    window.alert('Please Enter a Task')
    return;
   }else if(dateval===''){
    window.alert('Please Set a Date for the Task')
    return;
   }else if(timeval===''){
    window.alert('Please Set a Time for the Task')
   }
   else{
   tasks.push({id:Date.now(),
                text: inputval,
                date:dateval,
                 time:timeval,
                completed: false});
    localStorage.setItem('tasks',JSON.stringify(tasks));
    input.value=''
    time.value='';
    date.value='';
    console.log(tasks)
   }
})}
function displaytasks(){
    const saved=JSON.parse(localStorage.getItem('tasks')) || []
    if (tasklist){
        if (saved.length===0){
            tasklist.innerHTML='<p>You have no tasks.</p>'
            return;
        }else{
            tasklist.innerHTML='';
            saved.forEach((task) => {
                const list=document.createElement('li')

                const text=document.createElement('p')
                text.textContent=task.text

                const dateTime = document.createElement('span');
                dateTime.textContent = `📅 ${task.date} ⏰ ${task.time}`;
                dateTime.classList.add('task-datetime');

                const checkedbox=document.createElement('input');
                checkedbox.type='checkbox';
                checkedbox.checked=task.completed
                checkedbox.classList.add('check')
                checkedbox.addEventListener('change',() => checker(task.id))

                const div=document.createElement('div')
                div.classList='taskbut'

                const delbtn=document.createElement('button')
                delbtn.textContent='🗑️Delete'
                delbtn.classList='del-but'
                delbtn.addEventListener('click', () => delfunc(task.id));
                div.appendChild(delbtn)

                const editbtn=document.createElement('button')
                editbtn.textContent='✏️Edit'
                editbtn.addEventListener('click',() => editfunc(task.id))
                div.appendChild(editbtn)

                list.appendChild(checkedbox);
                list.appendChild(text);
                list.appendChild(dateTime)
                list.appendChild(div)
                // list.appendChild(delbtn);
                // list.appendChild(editbtn);
                tasklist.appendChild(list);
            })
        }
    }
}
displaytasks()
const checker=(id)=>{
    const saved=JSON.parse(localStorage.getItem('tasks')) || []
    const checkeditems=saved.map((task) => task.id===id ? {...task,completed:!task.completed} : task)
    localStorage.setItem('tasks',JSON.stringify(checkeditems))
    displaytasks()
    console.log(id)
}
function delfunc(id){
    const saved=JSON.parse(localStorage.getItem('tasks')) || []
    const deletedtasks=saved.filter((task)=>task.id !== id)
    localStorage.setItem('tasks',JSON.stringify(deletedtasks))
    displaytasks()
    console.log(id)
}
function editfunc(id){
    const saved=JSON.parse(localStorage.getItem('tasks')) || []
    const tasktoedit=saved.find((task) => id===task.id);
    if(!tasktoedit) return;
    const newinput=window.prompt('Edit you task:',tasktoedit.text);
    const newdate=window.prompt('Edit your date (YYYY-MM-DD):',tasktoedit.date);
    const newtime=window.prompt('Edit your time (HH:MM):',tasktoedit.time)
    if (newinput===null || newinput.trim()==='') return;
    else if(newdate===null || newdate.trim()==='') return;
    else if(newtime===null || newtime.trim()==='') return;
    else{
    const editeditems=saved.map((task)=> task.id === id ? {...task,text:newinput,date:newdate,time:newtime} : task)
    localStorage.setItem('tasks',JSON.stringify(editeditems))
    displaytasks()
    }
}
