import './style.css';
import { useState } from 'react';

function Todo(props) {
  const [editMode, setEditMode] = useState(false);
  const [taskName, setTaskName] = useState(props.task?.name);

  const changeEditMode = () => {
    setEditMode(true);
  }

  const onInputTaskChange = (event) => {
    setTaskName(event.target.value);
  }

  const updateTask = () => {
    const task = {...props.task, name: taskName};
    props.updateTask(task);
    setEditMode(false);
  }

  const updateTaskStatus = (event) => {
    const task = {...props.task, checked: event.target.checked};
    props.updateTask(task);
  }

  console.log(props.task.checked);

  return (
    <div className="task">
      <input
        onChange={updateTaskStatus}
        defaultChecked={props.task.checked}
        type="checkbox" />
      {
        editMode ?
        <>
          <input onChange={onInputTaskChange} className="task-name" placeholder="Add something to do" value={taskName}></input>
          <button onClick={updateTask}>Save</button>
        </>
        : <span onClick={changeEditMode} className="task-name">{taskName}</span>
      }
      <button onClick={() => props.deleteTask(props.task.id)}>Delete</button>
    </div>
  )
}

export default Todo;