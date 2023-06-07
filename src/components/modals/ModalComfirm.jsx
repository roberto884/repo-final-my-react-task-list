
import { ModalForm } from "./ModalForm";
import { ModalProps } from "../../models/modalProps";

import "./ModalComfirm.css";
import { ComfirmDelete } from "./ComfirmDelete";
import { usePortal, useTasks } from "../hooks";



export const ModalComfirm = () => {

    let [tasks, setTask] = useTasks();
    let [portalIsActive, togglePortal] = usePortal();
    const { type, title, content } = portalIsActive.modal_props;
    let { id } = content.task
    return (
        <>
            <div className="ns_modal--header">
                <h1>{title}</h1>
                <button className="close-btn" onClick={() => { togglePortal("toggle", new ModalProps()) }}>x</button>
            </div>
            <div className="ns_modal--content">
                {type === "modal-modify-form" && <ModalForm kindof={"Modify"} />}
                {type === "modal-add-form" && <ModalForm kindof={"Create"} />}
                {type === "modal-comfirm-delete" && <ComfirmDelete kindof={"Delete"} />}
            </div>
            <div className="ns_modal--actions">
                {type === "modal-comfirm-delete" && <div className="delete-actions"><button className="btn-action" onClick={() => togglePortal("toggle", new ModalProps())}>I´m not sure</button>
                    <button className="btn-action" onClick={() => { setTask("delete", id); togglePortal("toggle", new ModalProps()) }}>Just delete it</button></div>}
            </div>
        </>
    )
}