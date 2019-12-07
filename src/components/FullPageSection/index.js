import React from 'react';
import "./FullPageSection.css";

const FullPageSection = props => {
    let { children, className, id, name } = props;
    let classes = "fullPageSection " + ( className || "" );

    return(
        <section id={id} name={name} className={classes}>
            <div className="contentWrapper">
                {children}
            </div>
        </section>
    );
};

export default FullPageSection;