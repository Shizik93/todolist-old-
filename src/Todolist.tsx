import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootType} from "./store/store";
import {AddNewTask, ChangeTaskStatus, RemoveTask, TasksType, UpdateTask} from "./Reducer/reducer";
import {EditableSpan} from "./EditableSpan";

export const Todolist = () => {
    const task = useSelector<AppRootType, TasksType>(state => state.Reducer)
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const [span,setSpan]=useState()
    const UpdateTask = (title:string,id:string) => {dispatch(UpdateTask(title,id))}
    return (
        <div className="App">
            <div>
                <h3>What to learn</h3>
                <div>
                    <input value={value} onChange={(e) => {
                        setValue(e.currentTarget.value);
                    }}/>
                    <button onClick={() => {
                        dispatch(AddNewTask(value));
                        setValue('')
                    }}>
                        +
                    </button>
                </div>
                <ul>
                    {task.map(f => <

                        li key={f.id}>
                        <input onClick={() => {
                            dispatch(ChangeTaskStatus(!f.isDone, f.id))
                        }} type={"checkbox"} checked={f.isDone}/>
                        <span>{f.title}</span>
                        <button onClick={() => {
                            dispatch(RemoveTask(f.id))
                        }}>X
                        </button>

                    </li>)}
                </ul>

                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>)


}