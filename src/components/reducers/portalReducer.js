import { ModalProps } from "../../models/modalProps";

export const portalInitialState = {
    active: false,
    modal_props: new ModalProps()
}

export const portalReducer = (state, action) => {

    switch (action.type) {
        case "toggle":
            return {
                ...state,
                active: !state.active,
                modal_props: action.modal_props
            }
        default:
            return state;
    }
}