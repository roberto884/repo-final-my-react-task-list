import "./ModalForm.css";
import { useTasks } from "../hooks";

export function ModalForm({ kindof }) {
    const [customTasks, setCustomTasks] = useTasks();
    const { titleState, contentState, modal_props } = customTasks;
    let [title, setTitle] = titleState;
    let [content, setContent] = contentState;
    let { type } = modal_props;

    let onTitleChange = (e) => {
        const inputTitle = e.target.value;
        setTitle(inputTitle);
    }
    let onContentChange = (e) => {
        const inputContent = e.target.value;
        setContent(inputContent);
    }
    const onAddEvent = (e) => {
        e.preventDefault();
        setCustomTasks("add", undefined, title, content)
    }
    const onModifyEvent = (e) => {
        e.preventDefault();
        setCustomTasks("modify", undefined, title, content)
    }
    return (
        <>
            {type === "modal-add-form"

                ?
                <form className="modal-form" onSubmit={onAddEvent}>
                    <div className="input-box">
                        <input type="text" onChange={onTitleChange} required />
                        <span>Title</span>
                        <i></i>
                    </div>
                    <div className="input-box">
                        <input type="text" onChange={onContentChange} required />
                        <span>Content</span>
                        <i></i>
                    </div>
                    <button type="submit" className="btn-action" >{kindof}</button>
                </form>
                :
                <form className="modal-form" onSubmit={onModifyEvent}>
                    <div className="input-box">
                        <input type="text" onChange={onTitleChange} value={title} required />
                        <span>Title</span>
                        <i></i>
                    </div>
                    <div className="input-box">
                        <input type="text" onChange={onContentChange} value={content} required />
                        <span>Content</span>
                        <i></i>
                    </div>
                    <button type="submit" className="btn-action" >{kindof}</button>
                </form>
            }
        </>
    )
}