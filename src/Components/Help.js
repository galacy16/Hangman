import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// The modal with the rules of the game.
function Rules(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    How to play
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* The rules */}
                <h4>The game</h4>
                <ul>
                    <li>
                        Hangman is a classic word game in which you must guess
                        the secret word one letter at a time.
                    </li>
                    <li>
                        Guess one letter at a time to reveal the secret word. If
                        a letter occurs more then once in the secret word, it
                        will be revealed.
                    </li>
                    <li>
                        Each incorrect guess adds another part to the hangman.
                        You only get 6 incorrect guesses.
                    </li>
                </ul>
                <h4>The end of the game</h4>
                <ul>
                    <li>
                        If the player has 6 incorrect guesses, he will be
                        "hanged". A "You lost" message will appear on the
                        screen, as the secret answer too.
                    </li>
                    <li>
                        If the player guesses the secret word, a
                        "Congratulations, You Won" message will appear.
                    </li>
                    <li>
                        In each case (win or lose), the player can replay the
                        same game, or start a new one.
                    </li>
                    <li>
                        The player can restart, or start a new game during an
                        already started game.
                    </li>
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Rules;
