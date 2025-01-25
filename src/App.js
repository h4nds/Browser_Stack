import React, { useState } from "react";
import Navigation from "./components/Navigation";
import HistoryDisplay from "./components/HistoryDisplay";
import Controls from "./components/Controls";
import "./App.css";

function App() {
    const [url, setUrl] = useState("");
    const [currentPage, setCurrentPage] = useState("Home");
    const [backStack, setBackStack] = useState([]);
    const [forwardStack, setForwardStack] = useState([]);

    const navigateTo = (newUrl) => {
        if (newUrl !== "") {
            setBackStack((prev) => [...prev, currentPage]);
            setCurrentPage(newUrl);
            setForwardStack([]); // Clear forward history
            setUrl(""); // Reset input field
        }
    };

    const navigateBack = () => {
        if (backStack.length > 0) {
            const newBackStack = [...backStack];
            const previousPage = newBackStack.pop();
            setBackStack(newBackStack);
            setForwardStack((prev) => [currentPage, ...prev]);
            setCurrentPage(previousPage);
        }
    }

    const navigateForward = () => {
        if (forwardStack.length > 0) {
            const nextPage = forwardStack.shift();
            setBackStack((prev) => [...prev, currentPage]);
            setCurrentPage(nextPage);
            setForwardStack([...forwardStack]); // Update state
        }
    };

    const clearHistory = () => {
        setBackStack([]);
        setForwardStack([]);
        setCurrentPage("Home");
    };

    return (
        <div className="App">
            <h1>Browser History Manager</h1>
            <Navigation url={url} setUrl={setUrl} navigateTo={navigateTo} />
            <h2>Current Page: {currentPage}</h2>
            
            <Controls
                goBack={navigateBack}
                goForward={navigateForward}
                clearHistory={clearHistory}
                backDisabled={backStack.length === 0}
                forwardDisabled={forwardStack.length === 0}
            />

            <HistoryDisplay backStack={backStack} forwardStack={forwardStack} />
        </div>

    );
}

export default App;
