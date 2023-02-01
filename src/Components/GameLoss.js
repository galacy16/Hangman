import React, { Component } from "react";
import "./GameLoss.css";

// Game over in case of loss, where the You lost message is displayed, also the player has the the option to restart the same game, or start a new one. The buttons are displayed only when the game is over.
export default class GameOver extends Component {
    render() {
        return (
            <div style={{ textAlign: "center" }} className="game-over">
                <h1>You Lost!</h1>
                <h1>
                    The correct answer was{" "}
                    <span className="answer">{this.props.word}</span>
                </h1>
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
