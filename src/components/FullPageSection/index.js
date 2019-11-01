import React from 'react';
import "./FullPageSection.css";

const FullPageSection = props => (
    <div className="fullPageSection">
        {props.children}
    </div>
);

export default FullPageSection;