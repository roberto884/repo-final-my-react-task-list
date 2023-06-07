
import "./Modal.css"
import Portal from "./Portal"
import { ModalComfirm } from "./ModalComfirm"


export const Modal = () => {
    return (
        <Portal>
            <ModalComfirm />
        </Portal>
    )
}