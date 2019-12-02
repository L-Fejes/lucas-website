import React from 'react';
import "./ProjectCard.css";

export const ProjectAffiliate = props => {
    let { src, alt } = props;

    return(
        <div className="affiliate">
            <imc src={src} alt={alt} />
        </div>
    )
}

export const ProjectRelatedSkills = props => {
    let { skillList } = props;

    return(
        <ul className="relatedSkills">
            {skillList.map(x => <li><img src={x.src} alt={x.alt} /></li>)}
        </ul>
    );
}

export const ProjectCard = props => {
    let { children, className, imageURL, altText, title, hexagonTopMargin, backgroundSize } = props;
    let classes = "projectCard " + ( className || "" );

    return(
        <li className="projectCardSpace">
            <div className={classes} style={{ "background-image": `url(${imageURL})`, "background-position": "center", "background-size": `${backgroundSize || "cover"}` }}>
                <div className="hexagonWrapper">
                    <div className="hexagon">
                        <p style={{ "margin-top": `${hexagonTopMargin || "0px" }`}}>{title}</p>
                    </div>
                </div>
                <div className="cardContent">
                    {children}
                </div>
            </div>
        </li>
    );
};

export const ProjectCardList = props => {
    let { children } = props;
    let projectRows = [];

    for(let i = 0; i < children.length; i++) {
        if(i%2 - 1 === 0) {
            projectRows.push(
                <div className="projectCardRow">
                    {children[i - 1]}
                    {children[i]}
                </div>
            )
        }
        else if(i === children.length - 1) {
            projectRows.push(
                <div className="projectCardRow">
                    {children[i]}
                </div>
            )
        }
    }

    return(
        <div className="projectCardList">
            {projectRows}
        </div>
    );
}