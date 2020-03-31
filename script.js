const input = document.getElementById('input')
const ulTaskList = document.getElementById('ulTaskList')
const taskName = input.value
var counter = 0;
var taskList = [];
var doneList = [];

console.log('Going to add task = ' + taskName)
function addTask() {

  const taskName = input.value
  if(taskList.includes(taskName))
  {
  alert(taskName+" all ready exist in List");
  }
  else {
    var index = (taskList).length ;
    console.log('Going to add task = ' + taskName +' at index '+index)
    const newItem = document.createElement('li')
    newItem.textContent = taskName
    newItem.setAttribute("onclick", "strick(this);");
    newItem.setAttribute("class", "strick");
    taskList.push(taskName);
    ulTaskList.appendChild(newItem)
  }




}


 function strick(x)
 {
   if(!(doneList.includes(x.textContent)))
   {
      x.style.textDecoration = "line-through";
      x.style.textDecorationColor = "red";
      x.style.textDecorationStyle = "wavy";

      doneList.push(x.textContent)
   }
   else
   {
     x.style.textDecoration = "";
     doneList.pop(x.textContent)
   }
}
function deleteTask()
{ var lis = document.getElementsByTagName("li");
  const m = lis.length
  const n = doneList.length
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++)
    { if(doneList[j]==lis[i].textContent)
      {
        ulTaskList.removeChild(lis[i]);
        taskList.pop(lis[i].textContent)
      }
      doneList ={};


    }

  }
}
