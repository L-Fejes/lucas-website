import React from 'react';
import "./FullPageSection.css";

const FullPageSection = props => {
    let { children, className } = props;
    let classes = "fullPageSection " + ( className || "" );

    return(
        <section className={classes}>
            <div className="contentWrapper">
                {children}
            </div>
        </section>
    );
};

export default FullPageSection;