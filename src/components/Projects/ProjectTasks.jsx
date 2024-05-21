import { useRef, useState } from "react";


export default function ProjectTasks({tasks}) {
    const [taskCollection, setTaskCollection] = useState(tasks)
    const inputRef = useRef();

    const handleNewTask = () => {
        setTaskCollection((oldTasks) => {
            return [
                ...oldTasks,
                inputRef.current.value
            ]
        });

        inputRef.current.value = "";
    }

    const handleClearTask = (id) => {
        setTaskCollection((oldTasks) => {
            return oldTasks.filter((task, i) => {
                return i != id;
            });
        });
    }

    return (
        <div>
            <h1 className="mt-4 mb-4 pt-1 font-bold text-xl">Tasks</h1>
            <input 
                className="mb-6 bg-slate-200" 
                type="text" 
                name="taskName" 
                id="taskName" 
                ref={inputRef}
            />
            <button className="pl-3 text-sm" onClick={handleNewTask}>Add Task</button>
            <div id="task-list" className="pyb -4 bg-slate-200 min-h-28">
                { taskCollection.map((task, i) => 
                    <ProjectTask 
                        key={`task-${i}`}   
                        name={task}
                        onClear={() => {handleClearTask(i)}} 
                    />) 
                }
            </div>
        </div>
    );
}

function ProjectTask({name, onClear}) {
    return (
        <div id="task" className="pt-2 flex justify-between">
            <p className="pl-3">{name}</p> 
            <button className="pr-3 text-sm items justify-end" onClick={onClear}>Clear</button>
        </div>
    );
}