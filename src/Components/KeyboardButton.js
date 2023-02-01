import React from "react";
import "./KeyboardButton.css";

// The letter buttons
export default function KeyboardButton(props) {
    const { letter } = props;

    const handleClick = () => {
        props.getInput(letter);
    };

    return (
        <button className="keyboard-button" onClick={handleClick} type="button">
            {letter}
        </button>
    );
}
