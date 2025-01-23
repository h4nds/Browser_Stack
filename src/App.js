import React, { useState } from "react";
import Navigation from "./components/Navigation";
import HistoryDisplay from "./components/HistoryDisplay";
import Controls from "./components/Controls";

function App() { 
    const [url, setUrl] = useState("");
    const [backStack, setBackStack] = useState([]);
    const [forwardStack, setForwardStack] = useState([]);
    

    const navigateTo = (url) => {
       if (url !== "") {
           setBackStack((prev) => [url, ...prev]);
           setForwardStack([]);
           setUrl(url);
       }

    const navigateBack = () => {
        const [current, ...rest] = backStack.slice().reverse();
        setBackStack(rest.reverse());
        setForwardStack((prev) => [current, ...prev]);
    };

    const navigateForward = () => {
        const [current, ...rest] = forwardStack.slice().reverse();
        setBackStack((prev) => [current, ...prev]);
        setForwardStack(rest.reverse());
    };

    const clearHistory = () => {
        setBackStack([]);
        setForwardStack([]);
    };

    return (
        <div>
            <Navigation url={url} setUrl={setUrl} navigateTo={navigateTo} />
            <HistoryDisplay
                backStack={backStack}
                forwardStack={forwardStack}
                navigateBack={navigateBack}
                navigateForward={navigateForward}
            />
            <Controls
                gobBack={navigateBack}
                goFoward={navigateForward}
                clearHistory={clearHistory}
                backDisabled={backStack.length === 0}
                forwardDisabled={forwardStack.length === 0}
            />
        </div>
    );
}}

export default App;