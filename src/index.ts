/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
//importing UUID
import { v4 as uuidV4 } from 'uuid'

type Task = {
  id: string, title: string, completed: boolean, createdAt: Date
}

//Declaring types for our to do list
const list = document.querySelector<HTMLUListElement>("#list")
const form = document.getElementById("new-task-form") as HTMLFormElement | null
const input = document.querySelector<HTMLInputElement>("#new-task-title")


form?.addEventListener("submit", e => {
  e.preventDefault()

  if (input?.value == "" || input?.value == null) return //ensures that our input actually exists

  const newTask: Task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date()
  }

  addListItem(newTask)
  input.value = "add a task..."
})

function addListItem(task : Task){
  const item = document.createElement("li")
  const label = document.createElement("label")
  const checkBox = document.createElement("input")
  checkBox.type = 'checkbox'
  checkBox.checked = task.completed
  label.append(checkBox, task.title)
  item.append(label)
  list?.append(item)
  
}