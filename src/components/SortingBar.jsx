import React from "react";

const SortingBar = ({ height, isActive }) => {
    return (
        <div 
            className={`sorting-bar ${isActive ? "active" : ""}`} 
            style={{ height: `${height}px` }}
        />
    );
};

export default SortingBar;