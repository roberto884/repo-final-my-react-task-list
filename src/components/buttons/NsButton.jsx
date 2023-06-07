import { Link } from "react-router-dom";
import "./Button.css";
import "./CakeButton.css";
import "./GlowButton.css";
import { BsPlusCircleFill } from "react-icons/bs";

export function NsButton({ children, title, mode, openModal }) {
    if (mode === "cake") {
        return (
            <Link className="btn" onClick={openModal}>
                <p className="btn btn-cake" > {title} <strong><BsPlusCircleFill /></strong></p >
            </Link >
        );
    } else if (mode === "glow") {
        return (
            <Link className="btn" onClick={openModal}>
                <p className="btn btn-glow">
                    {title ? title : children}
                    <span></span>
                    <span></span>
                </p>
            </Link>
        );
    } else {
        return (
            <Link className="btn">
                <p className="btn btn-1">{title}</p>
            </Link>
        );
    }
}