import React from "react";

function HistoryDisplay({ backStack, forwardStack, navigateBack, navigateForward }) {
    return (
        <div className="history-display">
            <h3>Back Stack</h3>
            <ul className="history-list">
                    {backStack.map((page, index) => (
                        <li key={index}>{page}</li>
                    ))}
                </ul>
            <button onClick={navigateBack} disabled={backStack.length === 0}>
                Back
            </button>
            <h3>Forward Stack</h3>
            <ul className="history-list">
                    {forwardStack.map((page, index) => (
                        <li key={index}>{page}</li>
                    ))}
                </ul>
            <button onClick={navigateForward} disabled={forwardStack.length === 0}>
                Forward
            </button>
        </div>
    );
}

export default HistoryDisplay