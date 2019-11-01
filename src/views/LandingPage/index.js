import React from 'react';
import { withRouter } from 'react-router-dom';
import { FullPageSection } from '../../components';
import "./LandingPage.css";

class LandingPage extends React.Component {
    render() {
        return(
            <div className="landingPage">
                <FullPageSection className="headerPadding welcomeSection">
                    <p>Welcome Section</p>
                </FullPageSection>

                <FullPageSection className="aboutSection">
                    <p>About Section</p>
                </FullPageSection>

                <FullPageSection className="skills">
                    <p>Skills Section</p>
                </FullPageSection>

                <FullPageSection className="projects">
                    <p>Projects Section</p>
                </FullPageSection>
            </div>
        );
    }
}

export default withRouter(LandingPage);