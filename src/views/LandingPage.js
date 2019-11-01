import React from 'react';
import { withRouter } from 'react-router-dom';
import { FullPageSection } from '../components';

class LandingPage extends React.Component {
    render() {
        return(
            <div>
                <FullPageSection></FullPageSection>

                <FullPageSection></FullPageSection>

                <FullPageSection></FullPageSection>

                <FullPageSection></FullPageSection>
            </div>
        );
    }
}

export default withRouter(LandingPage);