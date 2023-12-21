let todolist=document.getElementById('todoList')
let inputbox= document.getElementById('inputBox')
let addbtn= document.getElementById('addBtn')
let edit_todo=null
let addTodo=()=>{
    let inputText= inputbox.value.trim()
    if(inputText.length<=0){
        alert("Please input some data")
        return false
    }
    if(addbtn.value==='Edit'){
        edit_todo.target.parentElement.previousElementSibling.innerHTML=inputText
        addbtn.value='Add'
        inputbox.value=''
    }
    else{
        let li=document.createElement('li')
        let p= document.createElement('p')
        p.innerHTML=inputText
        li.appendChild(p)
        todolist.appendChild(li)
        inputbox.value=''
        let editbtn=document.createElement('button')
        editbtn.textContent='Edit'
        let deletebtn=document.createElement('button')
        deletebtn.innerHTML='<span class="material-symbols-outlined">delete</span>'
        let span=document.createElement('span')
        span.innerHTML=''
        deletebtn.classList.add('del')
        editbtn.classList.add('edit')
        li.appendChild(span)
        span.appendChild(editbtn)
        span.appendChild(deletebtn)
        savelocaltodos(inputText)
    }
}
let del=document.getElementsByClassName('del')
addbtn.addEventListener('click', addTodo)
todolist.addEventListener('click', (e)=>{
    if(e.target.innerHTML==='delete'){
        todolist.removeChild(e.target.parentElement.parentElement.parentElement)
    }
    if(e.target.innerHTML==='Edit'){
        inputbox.value=e.target.parentElement.previousElementSibling.innerHTML
        inputbox.focus()
        addbtn.value='Edit'
        edit_todo=e
    }
})