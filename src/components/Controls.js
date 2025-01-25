import React from "react";

function Controls ({ gobBack, goFoward, clearHistory, backDisabled, forwardDisabled }) {
    return (
        <div className="Controls">
            <button onClick={gobBack} disabled={backDisabled}>Back</button>
            <button onClick={goFoward} disabled={forwardDisabled}>Forward</button>
            <button onClick={clearHistory}>Clear History</button>
        </div>
    );
}

export default Controls;