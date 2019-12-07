import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { HashLink, genericHashLink } from 'react-router-hash-link';
import './NavBar.css';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            yPosition: 0,
            yLimit: 100,
            isCloseToTop: true,
            isMenuOpen: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll(e) {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop
        let isCloseToTop = scrollTop.toFixed(0) < 100;
        this.setState({ isCloseToTop });
    }

    onClick(e) {
        let { isMenuOpen } = this.state;
        this.setState({ isMenuOpen: !isMenuOpen });
    }

    render() {
        let { isCloseToTop, isMenuOpen } = this.state;
        let navBarClass = "navBar" + ( isCloseToTop ? " topOfPage" : "" );
        let hamburgerContainerClass = "hamburgerContainer " + ( isMenuOpen ? "show" : "" );

        return(
            <div className={navBarClass}>
                <button className="hamburgerButton" onClick={this.onClick.bind(this)}>>></button>

                <div className={hamburgerContainerClass}>
                    <ul>
                        <li><HashLink to="/#landing" onClick={this.onClick.bind(this)}>FEJES</HashLink></li>
                        <li><HashLink to="/#about" onClick={this.onClick.bind(this)}>ABOUT</HashLink></li>
                        <li><HashLink to="/#skills" onClick={this.onClick.bind(this)}>SKILLS</HashLink></li>
                        <li><HashLink to="/#projects" onClick={this.onClick.bind(this)}>PROJECTS</HashLink></li>
                    </ul>
                </div>

                <div className="navContainer">
                    <div>
                        <li><HashLink to="/#landing">FEJES</HashLink></li>
                    </div>

                    <div>
                        <ul>
                            <li><HashLink to="/#about">ABOUT</HashLink></li>
                            <li><HashLink to="/#skills">SKILLS</HashLink></li>
                            <li><HashLink to="/#projects">PROJECTS</HashLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(NavBar);