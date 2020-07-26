var list = document.getElementById("list");
function addTodo(){
    var todo_item = document.getElementById("todo-item") 
    
    if(todo_item.value ===""){
        alert("Please Enter ToDo");
    }
    else{
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)
     }


    var delbtn = document.createElement("button")
    var dltText =document.createTextNode("DELETE")
    delbtn.appendChild(dltText)
    li.appendChild(delbtn)
    delbtn.setAttribute("class","btn")
    delbtn.setAttribute("onclick","deleteItem(this)")


    var editbtn = document.createElement("button")
    var editText = document.createTextNode("EDIT")
     editbtn.appendChild(editText)
     li.appendChild(editbtn)
     editbtn.setAttribute("onclick","editItem(this)")
     editbtn.setAttribute("class","btn")



     list.appendChild(li)
     todo_item.value = ""
     console.log(li)
        
}   
function deleteItem(e){
    e.parentNode.remove()
    
}
function deleteAll(){
    list.innerHTML =""
}
function editItem(e){
    var val =prompt("enter Updated value",e.parentNode.firstChild.nodeValue )
 
    if(val ===""){
        alert("Please Enter ToDo")
       
    }
    else{
        
        e.parentNode.firstChild.nodeValue = val;
    }
    // e.parentNode.firstChild.nodeValue = val;
}
