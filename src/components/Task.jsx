import React from 'react'
import { Button, Input } from "antd";
import './style.css'
import { useState } from 'react';
import Todo from './Todo';

const Task = () => {
    const [input, setInput] = useState("")
    const [tasks, setTasks] = useState([]);

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(input)
		setInput("")
	}

	const handleInputChange = (event) => {
		setInput(event.target.value)
	}
  
  const addTask = () => {
    const newTask = {
      name: input,
      id: tasks.length === 0
        ? 0
        : tasks[tasks.length - 1].id + 1,
      checked: false
    }
      setTasks(prev => {
      return [...prev, newTask]
      });
      }

  const deleteTask = (taskId) => {
    setTasks([...tasks.filter(task => task.id !== taskId)]);
    }

  return (
    <>
        <div className='task'>
            <form className='task-header' onSubmit={handleSubmit}>
                <Input value={input} onChange={handleInputChange} size='large' placeholder="add details" type='text'/>
                <Button onClick={addTask} type='primary' style={{marginLeft:20}} size='large'>Add</Button>
            </form>
            {
            tasks.map(task => {
            return <Todo
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            />
            })
            }
        </div>
    </>
  )
}

export default Task