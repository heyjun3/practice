import React, {useState, useEffect} from 'react'
import axios from 'axios'

const DrfApiFetch = () => {

  const [tasks, setTasks] = useState([])
  const [selectedTask, setSelectedTask] = useState([])
  const [id, setId] = useState(1)

  useEffect(() => {
      axios.get('http://localhost:3000/api/tasks', {
          headers: {
              'Authorization': 'Token xxxxx',
          }
      })
      .then(res => {setTasks(res.data)})
  }, [])

  const getTask = () => {
      axios.get(`http://localhost/api/tasks/${id}`, {
          headers: {
              'Authorization': 'Token xxxxx',
          }
      })
      .then(res => {setSelectedTask(res.data)})
  }

  const deleteTask = () => {
      axios.delete(`http://localhost/api/tasks/${id}`, {
          headers: {
              'Authorization': 'Token xxxxx',
          }
      })
      .then(res => console.log(res))
  }

  return (
    <div>
        <ul>
            {
                tasks.map(task => <li key={task.id}>{task.title} {task.id}</li>)
            }
        </ul>
        Set id <br/>
        <input type='text' onChange={evt=>{setId(evt.target.value)}} />
        <br />
        <button type='button' onClick={()=>{getTask()}}>Get task</button>
        <h3>{selectedTask.title} {selectedTask.id}</h3>

        <button type='button' onClick={()=>{deleteTask()}}>Delete task</button>
    </div>
  )
}

export default DrfApiFetch