import React from 'react';
import { withRouter } from 'react-router-dom';
import { 
    FullPageSection, SkillCard, SkillCardList, ProjectCard, ProjectCardList, 
    ProjectAffiliate, ProjectRelatedSkills, cSharpIcon, vrIcon, uiUxIcon, unicornDeathParty1,
    unicornDeathParty2, unicornDeathParty3, unicornDeathParty4, unicornDeathParty5,
    unicornDeathParty6, msg1, msg2, msg3, meditation1, lumier1, tron2, mizuNoCafe1, audioVisualizer1, aliBaba1, pikachuKidnapping, shale
} from '../../components';
import "./LandingPage.css";

class LandingPage extends React.Component {
    render() {
        return(
            <div className="landingPage">
                <FullPageSection id="landing" className="headerPadding welcomeSection">
                    <div className="message">
                        <h2>HELLO</h2>
                        <h1>I AM LUCAS FEJES</h1>
                        <h3>VR & GAME DEVELOPER</h3>
                    </div>

                    <div className="buttons">
                        <a href="mailto:l.j.b.fejes@gmail.com">HIRE ME</a>
                        <a href="https://www.lucasfejes.com/lucas_fejes_resume.pdf" download>MY CV</a>
                    </div>
                </FullPageSection>

                <FullPageSection id="about" className="aboutSection">
                    <div className="wrapper">
                        <h3>A BIT ABOUT ME</h3>
                        <p>I'm Lucas, a Unity Developer from Toronto, Canada. I've been building experiences with the Unity Engine for over 4 years, and for the past 2 I've been creating Immersive VR Experiences for anyone to enjoy.</p>
                        <p>In additon to my core skills in in Environmental Design, Game Mechanics, and UI/UX, I have also led projects, trained staff on the use of software, coordinated software and hardware integration for clients, and managed deployment on-site during experience launches. I'd like to think I've got a fair bit of experience under my belt, but I also love finding new and challenging projects to work on.</p>
                        <p>So get in touch, and see what I can do for you.</p>
                        <a href="https://www.lucasfejes.com/lucas_fejes_resume.pdf" download>MY CV</a>
                    </div>
                </FullPageSection>

                <FullPageSection id="skills" className="skillsSection">
                    <div className="wrapper">
                        <h3>MY SKILLSET</h3>

                        <SkillCardList>
                            <SkillCard className="unityIcon" iconURL="https://pngimage.net/wp-content/uploads/2018/06/unity-logo-white-png-5.png" altText="Unity Icon" title="Unity 3D/2D">
                                <ul>
                                    <li>4+ years experience</li>
                                    <li>Extensive experience in both 3D and 2D development</li>
                                    <li>Particle Systems</li>
                                    <li>Physics Engines</li>
                                    <li>Unity Networking</li>
                                </ul>
                                <p>I'm miticulous in my scene management, organization, and am a stickler for clear and easily understood heirarchies.</p>
                            </SkillCard>
                            <SkillCard className="cSharpIcon" iconURL={cSharpIcon} altText="C# Icon" title="C# Language">
                                <ul>
                                    <li>Expert Level</li>
                                    <li>Single & Multi-Threaded Applications</li>
                                    <li>Familiar with common and specialized code libraries</li>
                                    <li>Networking via Sockets and Photon</li>
                                </ul>
                            </SkillCard>
                            <SkillCard className="vrIcon" iconURL={vrIcon} altText="VR Icon" title="Virtual Reality">
                                <ul>
                                    <li>2 years experience building VR Experiences and Games</li>
                                    <li>VR Device Networks (Standalone and Supported)</li>
                                    <li>3D Object Interaction</li>
                                    <li>Locomotion Mechanics</li>
                                    <li>VR-Specific Optimization</li>
                                </ul>
                                <p>I've worked on most major platforms, including among others: Oculus, Google, and HTC.</p>
                            </SkillCard>
                            <SkillCard className="envDesignIcon" iconURL="https://images.squarespace-cdn.com/content/v1/5ad39fc3cc8fed81ac952ac2/1524073025953-WZXIZJHDUT2MN6BD8FEL/ke17ZwdGBToddI8pDm48kD9Icrq6xDuwyQvxODlueBlZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwOcXQtVcJ-9AgxsMtZAxIB9L6JDE71q4InZDwfSfVi2Agb_1Ja3ObQuT3HOeKEipQ/mountain.png" altText="Environmental Design Icon" title="Environmental Design">
                                <ul>
                                    <li>4+ years experience</li>
                                    <li>Lighting & Particle Systems</li>
                                    <li>Multi-Platform</li>
                                    <li>Custom Shaders</li>
                                    <li>Interactive Elements</li>
                                </ul>
                                <p>I enjoy creating immersive environments for people to get lost in, and to help users feel like they are part of the world they're experiencing.</p>
                            </SkillCard>
                            <SkillCard className="uiUxIcon" iconURL={uiUxIcon} altText="UI and UX Icon" title="UI/UX Design">
                                <ul>
                                    <li>Skilled with the Unity UI Toolset</li>
                                    <li>UI Design for VR Environments</li>
                                </ul>
                                <p>I design clear, and concise, visually appealing UI, to provide the user with both information and control of different 
                                    types of experiences.</p>
                            </SkillCard>
                        </SkillCardList>
                    </div>
                </FullPageSection>

                <FullPageSection id="projects" className="projectsSection">
                    <div className="wrapper">
                        <h3>SOME OF MY WORK</h3>
                        <p></p>

                        <ProjectCardList>
                            <ProjectCard title="MADISON SQUARE GARDEN: VR EXPERIENCE" hexagonTopMargin="35px" imageURL={msg1} altText="MSG Customers In the VR Experience" backgroundSize="165%" />

                            <ProjectCard title="AdMETRIX" hexagonTopMargin="64px" imageURL={lumier1} altText="Demonstration Environment in VR" />

                            <ProjectCard title="MOOD POD: MUSIC" hexagonTopMargin="57px" imageURL={audioVisualizer1} altText="Mood Pod Audio Visualizer" />

                            <ProjectCard title="MOOD POD: MEDITATION" hexagonTopMargin="57px" imageURL={meditation1} altText="Peaceful Low-Poly Forest" />

                            <ProjectCard title="CANDYLAND MASSACRE" hexagonTopMargin="57px" imageURL={unicornDeathParty1} altText="Brightly Colored VR FPS" />

                            <ProjectCard title="MIZU NO CAF&Eacute;" hexagonTopMargin="64px" imageURL={mizuNoCafe1} altText="Underwater Cafe" />

                            <ProjectCard title="ALIBABA DEMO" hexagonTopMargin="64px" imageURL={aliBaba1} altText="Floating City with Dark Poem" />

                            <ProjectCard title="PIKACHU KIDNAPING" hexagonTopMargin="57px" imageURL={pikachuKidnapping} altText="Team Rocket Pikachu Kidnapping Simulator" />

                            <ProjectCard title="TRON IMMERSION" hexagonTopMargin="57px" imageURL={tron2} altText="Light-Cycle Battle on the Grid" />        

                            <ProjectCard title="SHALE" hexagonTopMargin="64px" imageURL={shale} altText="Pre-historic Undersea Creatures" />

                        </ProjectCardList>
                    </div>
                </FullPageSection>
            </div>
        );
    }
}

export default withRouter(LandingPage);