import { Task } from "./Task";

import "./TaskList.css"
import { useTasks } from "./hooks";

export function TaskList() {
    let [customTasks] = useTasks();
    let conditionTasksRender = customTasks.tasks <= 0;

    return (
        <div className="task-list">

            {
                conditionTasksRender ? <p>There are not tasks to show</p> : customTasks.tasks.map((task, index) => <Task task={task} key={index} />)
            }
        </div >
    )
}