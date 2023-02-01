import React, { Component } from "react";
import "./GameWin.css";

// Winning case, where the Congratulations,You won message is displayed, also the player has the option to restart the same game, or start a new one. The buttons are displayed only when the game is over.
export default class Winner extends Component {
    render() {
        return (
            <div style={{ textAlign: "center" }} className="winner">
                <h1>Congratulations, You Won</h1>
                <button
                    onClick={() => {
                        this.props.reset();
                    }}
                    className="reset-button"
                >
                    Restart
                </button>
                <button
                    onClick={() => {
                        this.props.newGame();
                    }}
                    className="newgame-button"
                >
                    New Game
                </button>
            </div>
        );
    }
}
