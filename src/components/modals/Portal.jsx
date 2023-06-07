
import { createPortal } from "react-dom";
import "./Portal.css"
import { usePortal } from "../hooks";

const myPortal = document.getElementById('portal');


export const Portal = ({ children }) => {
    const [portalIsActive] = usePortal();

    return (
        <>
            {portalIsActive.active === true && createPortal(<div className="ns_modal">{children}</div>, myPortal)}

        </>
    )
}

export default Portal;