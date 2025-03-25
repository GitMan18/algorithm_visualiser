import React from "react";

const SortingBar = ({ height, isActive, isFailedBogo }) => {
    return (
        <div 
            className={`sorting-bar ${isActive ? "active" : ""} ${isFailedBogo ? "bogo-failed" : ""}`} 
            style={{ height: `${height}px` }}
        />
    );
};

export default SortingBar;