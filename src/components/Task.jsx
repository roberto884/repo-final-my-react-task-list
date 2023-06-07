
import "./Task.css";
import { BsTrash, BsCheckCircle, BsCheckCircleFill } from "react-icons/bs"
import { Link } from "react-router-dom";
import { EditTaskModalFormProps, ModalProps } from "../models/modalProps";
import { usePortal, useTasks } from "./hooks";

export const Task = function ({ task }) {
    const [customTasks, setCustomTasks] = useTasks();
    const [portalIsActive, togglePortal] = usePortal();
    return (
        <div className="task">
            <div className="task-content" onClick={() => togglePortal("toggle", EditTaskModalFormProps("Modify task", task))}>
                <strong className="title" >{task.title.length > 30 ? task.title.substring(0, 30) + "..." : task.title}</strong>
            </div>
            <div className="task-actions">
                {}
                <Link className="task-action" onClick={() => togglePortal("toggle", new ModalProps("modal-comfirm-delete", "Delete a task", { text: "Are you sure you want to delete this task?", task: task }, { cancel: true, accept: true }))}><BsTrash></BsTrash></Link>
                {}
                <Link className="task-action" onClick={() => { setCustomTasks("completed", task.id) }} style={task.completed ? { backgroundColor: "white", color: "var(--blue-100)" } : { backgroundColor: "var(--blue-100)", color: "white" }}>{!task.completed ? <BsCheckCircleFill></BsCheckCircleFill> : <BsCheckCircle></BsCheckCircle>}</Link>
            </div>
        </div>
    )
}