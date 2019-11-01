import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            yPosition: 0,
            yLimit: 100
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll(event) {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop
        let yPosition = scrollTop.toFixed(0);

        console.log("yPosition: ", yPosition);

        this.setState({ yPosition });
    }

    render() {
        let { yPosition, yLimit } = this.state;
        let className = "navBar" + ( yPosition < yLimit ? " topOfPage" : "" );

        return(
            <div className={className}>
                <div>
                    <div>
                        <p>FEJES</p>
                    </div>

                    <div>
                        <ul>
                            <li><Link to="/">THING 1</Link></li>
                            <li><Link to="/">THING 2</Link></li>
                            <li><Link to="/">THING 3</Link></li>
                            <li><Link to="/">THING 4</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(NavBar);