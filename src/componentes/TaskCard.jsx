import { useContext } from 'react';
import {TaskContext }from '../context/TaskContext'

function TaskCard({task}) {
  const {deleteTask}= useContext(TaskContext);
  return (
     <div className='bg-stone-400 text-white p-4 rounded-md' >
       <h1 className='text-2xl font-bold capitalize mb-3'>{task.title}</h1>
       <p className='text-gray-500 text-sm'>{task.description}</p>
       <button className='bg-teal-500 px-2 py-1 rounded-md mt-4 hover:bg-slate-300 text-center' onClick={() => deleteTask(task.id)}>Eliminar tarea</button>
     </div>
  );  
}

export default TaskCard;