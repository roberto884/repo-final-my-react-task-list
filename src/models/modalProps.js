import { TaskModel } from "./taskModel";

export class ModalProps {
    constructor(type = "", title = "", content = { text: "", task: new TaskModel() }, actions) {
        this.type = type;
        this.title = title;
        this.content = content;
        this.actions = actions
    }
}

/**
 * @param {string} title
 * @param {string} content
 */
export function ConfirmProps(title, content) {
    return new ModalProps("confirm", title, content, { cancel: true, accept: true });
}

/**
 * @param {string} title
 * @param {TaskModel|null} content
 */
function TaskModalFormProps(type, title, content) {
    return new ModalProps(type, title, content, { cancel: true, accept: true })
}

export function AddTaskModalFormProps(title) {
    return TaskModalFormProps("modal-add-form", title, { text: "", task: new TaskModel() });
}

export function EditTaskModalFormProps(title, content) {
    return TaskModalFormProps("modal-modify-form", title, { text: "", task: content });
}
