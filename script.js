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
{
  var lis = document.getElementsByTagName("li");
  var index=[]
  const m = lis.length
  var n = doneList.length
  for(var i =0;i<n;i++)
  { if(doneList.includes(lis[0].textContent))
      console.log(lis[0].textContent);
      taskList.pop(lis[0].textContent)
       ulTaskList.removeChild(lis[0]);
  }
  doneList=[]

}
