import { useContext, useState } from "react";
import { PortalContext } from "../context/portalContext";
import { TaskModel } from "../../models/taskModel";
import { ModalProps } from "../../models/modalProps";
import { usePortal } from "./usePortal";
export function useTasks() {
    const { tasksContextReducer } = useContext(PortalContext);
    const [portalIsActive, togglePortal] = usePortal();
    let [tasks, setTask] = tasksContextReducer();
    let titleToModify = portalIsActive.modal_props.content.task.title;
    let contentToModify = portalIsActive.modal_props.content.task.content;
    const [title, setTitle] = useState(titleToModify);
    const [content, setContent] = useState(contentToModify);
    const manageTasks = (type, id, title, content) => {
        switch (type) {
            case "add":
                const task = new TaskModel(tasks.length, title, content, undefined);
                try {
                    setTask({ type, task: task });
                    togglePortal("toggle", new ModalProps())
                } catch (error) {
                    console.log(error);
                }
                break;
            case "modify":
                const oldtask = portalIsActive.modal_props.content.task;
                const newtask = new TaskModel(tasks.length, title, content, oldtask.completed);
                try {
                    setTask({ type: "modify", task: newtask, taskId: oldtask.id });
                    togglePortal("toggle", new ModalProps())
                } catch (error) {
                    console.log(error);
                }
                break
            case "completed":
                setTask({ type, taskId: id });
                break;
            case "delete":
                try {
                    setTask({ type, taskId: id })
                } catch (error) {
                    console.error(error);
                }

                break;
            default:
                break;
        }

    }

    return [{
        tasks,
        titleState: [title, setTitle],
        contentState: [content, setContent],
        modal_props: portalIsActive.modal_props
    }, manageTasks];

}