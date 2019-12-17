import TodoList from './components/TodoList.js'
import TodoInput from './components/TodoInput.js'
import TodoItem from './components/TodoItem.js'

function TodoApp() {
    this.todoItems = []

    this.setState = (updatedItems) => {
        this.todoItems = updatedItems
        todoList.setState(this.todoItems)
    }

    new TodoInput({
        onAdd: (contents) => {
            const newTodoItem = new TodoItem(contents)
            this.todoItems.push(newTodoItem)
            this.setState(this.todoItems)
        }
    })

    const todoList = new TodoList({
        todoItems: this.todoItems,
        onToggleItem: (index) => {
            this.todoItems[index].isCompleted = !this.todoItems[index].isCompleted
            this.setState(this.todoItems)
        },
    })
}

new TodoApp()
