import React from 'react';
import AboutLink from '../../UI/link/link';
import BlogLink from '../../UI/link/link';
import Card from '../../UI/card/card';

const landingPage = () => {
    return(
        <main>
            <h1>welcome to my online presence</h1>
            <p>please learn more about my arrogant developer persona</p>
            <AboutLink to="About me"/>
            <br/>
            <BlogLink to="Blogs :"/>
            <div>four animated blogs tape that runs over and over
                <Card info="my first blog" />
            </div>
        </main>
    );
}

export default landingPage;