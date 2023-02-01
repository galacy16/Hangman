import React, { Component } from "react";
import "./RestartNew.css";

// Restart and New game buttons which are displayed during the game
export default class RestartNew extends Component {
    render() {
        return (
            <div style={{ textAlign: "center" }} className="btn">
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
