import { createContext, useReducer } from "react";
import { portalReducer, portalInitialState } from "../reducers/portalReducer";
import { ModalProps } from "../../models/modalProps";
import { tasksReducer, tasksInitialState } from "../reducers/tasksReducer";

const portalInitialContext = {
    portalContextReducer: () => [{ active: false, modal_props: new ModalProps() }, ({ type, modal_props }) => { }],
    tasksContextReducer: () => [[], ({ type, task, taskId, tasks }) => { }]
}

export const PortalContext = createContext(portalInitialContext);

const PortalProvider = ({ children }) => {
    //para activar y desactivar el portal
    let [portalIsActive, togglePortal] = useReducer(portalReducer, portalInitialState);
    let [tasks, dispatch] = useReducer(tasksReducer, tasksInitialState);

    return (
        <PortalContext.Provider value={{
            portalContextReducer: () => [portalIsActive, togglePortal], tasksContextReducer: () => [[...tasks], dispatch],
        }}>
            {children}
        </PortalContext.Provider>
    )
}

export default PortalProvider;