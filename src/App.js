import React, { useState } from "react";
import "./App.css"



export default () => {
	const [todos, setTodos] = useState([])
	const [value, setValue] = useState('')

	const handleInputChange = (event) => {
		setValue(event.target.value)
	}

	const handlebtnClick = (e) => {
		e.preventDefault()
		if(value !== ""){
			const newTodos = [...todos, value]
			console.log('rest1', [...todos])
	
			console.log('newTodos', newTodos)
			// todos.push(newTodos)
			console.log('newtodo: ', newTodos)
			setTodos(newTodos)
			setValue('')
		}
		
	}
	const removeTodos = (index,e) => {
		e.preventDefault()
		const newTodo  = todos.filter(item => todos.indexOf(item) !== index)
		localStorage.setItem('todolist',todos)
		setTodos(newTodo)
	}
	// console.log('value: ', value)
	// console.log('todos: ', todos)

	// const updateTodos = (index, e) => {
	// 	e.preventDefault()
		
	// }

	return (
		<div>
			<form className='form-todolist'>
				<input value={value} type='text' placeholder='todoList...' onChange={handleInputChange}>
				</input>
				<button onClick={(e) => { handlebtnClick(e)}}>
					Add
        </button>
				<div>
				{todos.map(item => 
				<div className="item">
					<div className='value' key={item}>{item}</div>
					<button  onClick={(e) => removeTodos(todos.indexOf(item),e)} className='del'>delete</button>
					<button className='update'>update</button>
				</div>	
				)}
			</div>
			</form>
		</div>
	)
}

