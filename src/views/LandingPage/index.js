import React from 'react';
import { withRouter } from 'react-router-dom';
import { FullPageSection, SkillCard, SkillCardList } from '../../components';
import "./LandingPage.css";

class LandingPage extends React.Component {
    render() {
        return(
            <div className="landingPage">
                <FullPageSection className="headerPadding welcomeSection">
                    <div className="message">
                        <h2>HELLO</h2>
                        <h1>I AM LUCAS FEJES</h1>
                        <h3>VR & GAME DEVELOPER</h3>
                        <a href="mailto:l.j.b.fejes@gmail.com">HIRE ME</a>
                        <a href="https://google.com">MY CV</a>
                    </div>
                </FullPageSection>

                <FullPageSection className="aboutSection">
                    <p>About Section</p>
                </FullPageSection>

                <FullPageSection className="skillsSection">
                    <p>Skills Section</p>
                    <p>These are some skills I have</p>

                    <SkillCardList>
                        <SkillCard>
                        </SkillCard>
                        <SkillCard>
                        </SkillCard>
                        <SkillCard>
                        </SkillCard>
                        <SkillCard>
                        </SkillCard>
                    </SkillCardList>
                </FullPageSection>

                <FullPageSection className="projectsSection">
                    <p>Projects Section</p>
                </FullPageSection>
            </div>
        );
    }
}

export default withRouter(LandingPage);