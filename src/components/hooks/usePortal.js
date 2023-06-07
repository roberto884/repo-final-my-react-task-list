import { useContext } from "react";
import { PortalContext } from "../context/portalContext";

export function usePortal() {
    const { portalContextReducer } = useContext(PortalContext);
    const [portalIsActive, togglePortal] = portalContextReducer();
    function portalToggle(type, modal_props) {
        togglePortal({ type, modal_props })
    }
    return [portalIsActive, portalToggle];
}