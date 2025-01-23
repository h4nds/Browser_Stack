import React from "react";

function Navigation({ url, setUrl, navigateTo }) {
    return (
        <div style={{ marginBottom: "40px" }}>
            <input
                type="text"
                placeholder="Enter URL Here"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                style={{ marginRight: "10px" }}
            />
            <button onClick={() => navigateTo(url)}>Go</button>
        </div>
    );
}

export default Navigation;