import { usePortal } from "../hooks"

export function ComfirmDelete() {
    const [portalIsActive, togglePortal] = usePortal();
    const { content } = portalIsActive.modal_props;
    return (
        <>
            <h1>{content.text}</h1>
        </>
    )
}