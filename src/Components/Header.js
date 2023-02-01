import React from "react";
import "./Header.css";

// Header , with the generic introduction and also showing the player how many guesses they have left.
export default function Header(props) {
    return (
        <div className="header">
            <h1 className="title">Hangman</h1>
            <h3>Enter a letter to guess the correct word</h3>
            <h3>
                You have <span className="lives-span">{props.attempts}</span>{" "}
                attempts left
            </h3>
        </div>
    );
}
