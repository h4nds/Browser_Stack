import React from "react";

function Controls ({ goBack, goForward, clearHistory, backDisabled, forwardDisabled }) {
    return (
        <div className="Controls">
            <button onClick={goBack} disabled={backDisabled}>Back</button>
            <button onClick={goForward} disabled={forwardDisabled}>Forward</button>
            <button onClick={clearHistory}>Clear History</button>
        </div>
    );
}

export default Controls;