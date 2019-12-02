import React from 'react';
import { withRouter } from 'react-router-dom';
import { 
    FullPageSection, SkillCard, SkillCardList, ProjectCard, ProjectCardList, 
    ProjectAffiliate, ProjectRelatedSkills, cSharpIcon, vrIcon, unicornDeathParty1,
    unicornDeathParty2, unicornDeathParty3, unicornDeathParty4, unicornDeathParty5,
    unicornDeathParty6, msg1, msg2, msg3, meditation1, lumier1, tron2
} from '../../components';
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
                    <div className="wrapper">
                        <h3>A BIT ABOUT ME</h3>
                        <p>I'm Lucas, a Unity Developer from Toronto, Canada. I've been building experiences with the Unity Engine for over 4 years, and for the past 2 I've been creating Immersive VR Experiences for anyone to enjoy.</p>
                        <p>In additon to my core skills in in Environmental Design, Game Mechanics, and UI/UX, I have also led projects, trained staff on the use of software, coordinated software and hardware integration for clients, and managed deployment on-site during experience launches. I'd like to think I've got a fair bit of experience under my belt, but I also love finding new and challenging projects to work on.</p>
                        <p>So get in touch, and see what I can do for you.</p>
                        <a href="https://google.com">MY CV</a>
                    </div>
                </FullPageSection>

                <FullPageSection className="skillsSection">
                    <div className="wrapper">
                        <h3>MY SKILLSET</h3>

                        <SkillCardList>
                            <SkillCard className="unityIcon" iconURL="https://pngimage.net/wp-content/uploads/2018/06/unity-logo-white-png-5.png" altText="Unity Icon">
                            </SkillCard>
                            <SkillCard className="cSharpIcon" iconURL={cSharpIcon} altText="C# Icon">
                            </SkillCard>
                            <SkillCard className="vrIcon" iconURL={vrIcon} altText="VR Icon">
                            </SkillCard>
                            <SkillCard className="envDesignIcon" iconURL="https://images.squarespace-cdn.com/content/v1/5ad39fc3cc8fed81ac952ac2/1524073025953-WZXIZJHDUT2MN6BD8FEL/ke17ZwdGBToddI8pDm48kD9Icrq6xDuwyQvxODlueBlZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwOcXQtVcJ-9AgxsMtZAxIB9L6JDE71q4InZDwfSfVi2Agb_1Ja3ObQuT3HOeKEipQ/mountain.png" altText="Environmental Design Icon">
                            </SkillCard>
                        </SkillCardList>
                    </div>
                </FullPageSection>

                <FullPageSection className="projectsSection">
                    <div className="wrapper">
                        <h3>SOME OF MY WORK</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis.</p>

                        <ProjectCardList>
                            <ProjectCard title="MADISON SQUARE GARDEN: VR EXPERIENCE" hexagonTopMargin="35px" imageURL={msg1} altText="MSG Customers In the VR Experience" backgroundSize="165%" />

                            <ProjectCard title="WARNER BROTHERS: SKULL ISLAND DEMO" hexagonTopMargin="35px" imageURL="" altText="MSG Customers In the VR Experience" />

                            <ProjectCard title="AD. METRICS" hexagonTopMargin="64px" imageURL="" altText="MSG Customers In the VR Experience" />

                            <ProjectCard title="WARNER BROTHERS: TOM & JERRY GAME" hexagonTopMargin="42px" imageURL="" altText="MSG Customers In the VR Experience" />

                            <ProjectCard title="MOOD POD" hexagonTopMargin="64px" imageURL={lumier1} altText="MSG Customers In the VR Experience" />

                            <ProjectCard title="MEDITATION EXPERIENCE" hexagonTopMargin="53px" imageURL={meditation1} altText="MSG Customers In the VR Experience" />

                            <ProjectCard title="CANDYLAND MASSACRE" hexagonTopMargin="53px" imageURL={unicornDeathParty1} altText="MSG Customers In the VR Experience" />

                            <ProjectCard title="LINE FRIENDS DEMO" hexagonTopMargin="53px" imageURL="" altText="MSG Customers In the VR Experience" />

                            <ProjectCard title="MIZU NO CAF&eacute;" hexagonTopMargin="64px" imageURL="" altText="MSG Customers In the VR Experience" />

                            <ProjectCard title="ALIBABA DEMO" hexagonTopMargin="64px" imageURL="" altText="MSG Customers In the VR Experience" />

                            <ProjectCard title="PIKACHU KIDNAPING" hexagonTopMargin="53px" imageURL="" altText="MSG Customers In the VR Experience" />

                            <ProjectCard title="TRON IMMERSION" hexagonTopMargin="53px" imageURL={tron2} altText="MSG Customers In the VR Experience" />        

                            <ProjectCard title="BOT DEBOCLE" hexagonTopMargin="64px" imageURL="" altText="MSG Customers In the VR Experience" />

                            <ProjectCard title="GHOST GAME" hexagonTopMargin="64px" imageURL="" altText="MSG Customers In the VR Experience" />

                            <ProjectCard title="SHALE" hexagonTopMargin="64px" imageURL="" altText="MSG Customers In the VR Experience" />

                        </ProjectCardList>
                    </div>
                </FullPageSection>
            </div>
        );
    }
}

export default withRouter(LandingPage);