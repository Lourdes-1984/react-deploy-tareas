import {useState,useContext} from "react";
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const {createTask} =useContext(TaskContext)

const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
        title,
        description
    })
    setTitle('')
    setDescription('')
}
  return (
    <div className="max-w-md mx-auto">

<form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
    <h1 className="capitalize text-center font-bold text-xl text-white">Crea tu tarea</h1>
            <input className="bg-slate-300 p-3 w-full mb-2" placeholder="Escribe tu tarea" 
            onChange={(e)=> setTitle(e.target.value)} 
            value={title} autoFocus/>
            <textarea className="bg-slate-300 p-3 w-full mb-2" placeholder="Descripcion de la tarea"
             onChange={(e)=> setDescription(e.target.value)} 
             value={description}></textarea>
            <button className='bg-teal-500 px-2 py-1 rounded-md mt-4 hover:bg-slate-300'>Guardar</button>
        </form>
    
    </div>
  )
}

export default TaskForm;