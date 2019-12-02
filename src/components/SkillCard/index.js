import React from 'react';
import "./SkillCard.css";

export const SkillCard = props => {
    let { children, className, iconURL, altText, title } = props;
    let classes = "skillCard " + ( className || "" );

    return(
        <li className="skillCardSpace">
            <div className={classes}>
                <div className="iconWrapper">
                    <div className="hexagon">
                        <img src={iconURL} alt={altText} />
                    </div>
                </div>

                <div className="cardContent">
                    <h4>{title}</h4>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </li>
    );
};

export const SkillCardList = props => {
    let { children } = props;

    return(
        <ul className="skillCardList">
            {children}
        </ul>
    );
}