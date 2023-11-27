 import { useState } from 'react'
const AddTask = ({ onAdd }) => {
    const[text,setText] = useState('')
    const[day,setDay] = useState('')
    const[reminder,SetReminder] =useState(false)
    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('please add a task')
            return
        } 
        onAdd( { text, day, reminder })

        setText('')
        setDay('')
        SetReminder(false)
    }
  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className='form-control'>
            <label>Day & Time </label>
            <input type='text' placeholder='Add Day & Time' 
            value={day} onChange={(e) => setDay(e.target.value)}/>
        </div>
        <div className='form-control form-control-check'>
            <label>SetReminder</label>
            <input type='checkbox' 
            checked={reminder}
            value={reminder} onChange={(e) => SetReminder(e.currentTarget.checked)} />
        </div>

        <input type='submit' value='Save Task' className='btn btn-block' />
        
    </form>
  )
}

export default AddTask
