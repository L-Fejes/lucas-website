import React from 'react';
import { withRouter, Link } from 'react-router-dom';
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
                        <li><p>FEJES</p></li>
                        <li><Link to="/">ABOUT</Link></li>
                        <li><Link to="/">SKILLS</Link></li>
                        <li><Link to="/">PROJECTS</Link></li>
                    </ul>
                </div>

                <div className="navContainer">
                    <div>
                        <p>FEJES</p>
                    </div>

                    <div>
                        <ul>
                        <li><Link to="/">ABOUT</Link></li>
                        <li><Link to="/">SKILLS</Link></li>
                        <li><Link to="/">PROJECTS</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(NavBar);