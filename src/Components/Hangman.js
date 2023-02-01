import React, { Component } from "react";
import Board from "./Board";
import Header from "./Header";
import Input from "./Input";
import { getRandomWord } from "./word";
import HangedMan from "./HangedMan";
import GameLoss from "./GameLoss";
import GameWin from "./GameWin";
import RestartNew from "./RestartNew";
import Rules from "./Help";

import "./Hangman.css";

const emptySpace = "___";
const MAX_WRONG = 6;

class Hangman extends Component {
    constructor(props) {
        super(props);

        this.state = {
            word: getRandomWord(),
            guessedWord: new Set(),
            wrongGuesses: 0,
            isGameOver: false,
            isWinner: false,
        };
        // Binding the Input, guessedWord, resetGame and newGame
        this.getInput = this.getInput.bind(this);
        this.getGuessedWord = this.getGuessedWord.bind(this);
        this.resetGame = this.resetGame.bind(this);
        this.newGame = this.newGame.bind(this);
    }

    // the console should show the word that needs to be guessed. It only shows on reload.
    componentDidMount() {
        console.log("word is", this.state.word);
    }

    // inputting the letters, if the letter is wrong, the number of wrong guesses is decreased
    getInput(letter) {
        let newWrongGuesses =
            this.state.wrongGuesses +
            (this.state.word.includes(letter) ? 0 : 1);
        this.setState((state) => ({
            guessedWord: state.guessedWord.add(letter),
            wrongGuesses: newWrongGuesses,
            isWinner: this.getGuessedWord().join("") === state.word,
            isGameOver: newWrongGuesses > MAX_WRONG - 1 ? true : false,
        }));
    }

    // The guessed word:
    getGuessedWord() {
        let answer = this.state.word;

        let answerArray = answer.split("").map((letter) => {
            return this.state.guessedWord.has(letter) ? letter : emptySpace;
        });

        return answerArray;
    }

    // For resetting the game
    resetGame() {
        this.setState({
            word: this.state.word,
            wrongGuesses: 0,
            guessedWord: new Set(),
            isGameOver: false,
            isWinner: false,
        });
    }

    // For restarting the game
    newGame() {
        this.setState({
            word: getRandomWord(),
            wrongGuesses: 0,
            guessedWord: new Set(),
            isGameOver: false,
            isWinner: false,
        });
    }

    // rendering the components needed displaying
    render() {
        const game = (
            <div className="game">
                <RestartNew reset={this.resetGame} newGame={this.newGame} />
                <Board word={this.getGuessedWord()} />
                <Input getInput={this.getInput} />
            </div>
        );

        const winnerORLoser = this.state.isWinner ? (
            <GameWin reset={this.resetGame} newGame={this.newGame} />
        ) : this.state.isGameOver ? (
            <GameLoss
                word={this.state.word}
                reset={this.resetGame}
                newGame={this.newGame}
            />
        ) : (
            game
        );

        return (
            <div className="hangman-container">
                <Rules />
                <Header attempts={MAX_WRONG - this.state.wrongGuesses} />
                <HangedMan wrongGuesses={this.state.wrongGuesses} />
                {winnerORLoser}
            </div>
        );
    }
}

export default Hangman;
