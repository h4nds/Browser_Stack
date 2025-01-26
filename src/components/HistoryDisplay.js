import React from "react";

function HistoryDisplay({ backStack, forwardStack, navigateBack, navigateForward }) {
    return (
        <div className="history-display">
            <div className="back-stack">
                <h3>Back Stack</h3>
                <ul className="history-list">
                    {backStack.map((page, index) => (
                        <li key={index}>{page}</li>
                    ))}
                </ul>
            </div>

            <div className="forward-stack">
                <h3>Forward Stack</h3>
                <ul className="history-list">
                    {forwardStack.map((page, index) => (
                        <li key={index}>{page}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default HistoryDisplay;