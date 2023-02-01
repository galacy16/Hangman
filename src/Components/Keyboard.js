import React from "react";
import "./Keyboard.css";
import KeyboardButton from "./KeyboardButton";

// Keyboard with the alphabet, with another map method
export default function Keyboard(props) {
    const getLetters = () => {
        let result = [];

        for (let i = 65; i < 65 + 26; i++) {
            result.push(String.fromCharCode(i));
        }

        return result;
    };
    const letters = getLetters();
    const buttons = letters.map((letter) => {
        return (
            <KeyboardButton
                className="keyboard"
                getInput={props.getInput}
                key={letter.charCodeAt(0)}
                letter={letter}
            />
        );
    });
    return <div className="keyboard-container">{buttons}</div>;
}
