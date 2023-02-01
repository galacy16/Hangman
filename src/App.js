import "./App.css";
import Hangman from "./Components/Hangman";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import React from "react";
import Rules from "./Components/Help";

function App() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className="App">
            <button
                className="reset-button"
                variant="primary"
                onClick={() => setModalShow(true)}
            >
                Rules
            </button>
            <Hangman />
            <Rules show={modalShow} onHide={() => setModalShow(false)} />
        </div>
    );
}

export default App;
