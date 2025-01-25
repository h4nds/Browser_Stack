import React from "react";

function Navigation({ url, setUrl, navigateTo }) {
    return (
        <div className="naviagtion">
            <input
                type="text"
                placeholder="Enter URL Here"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                style={{ marginRight: "10px" }}
            />
            <button onClick={() => navigateTo(url)} className="navigate-button">Go</button>
        </div>
    );
}

export default Navigation;