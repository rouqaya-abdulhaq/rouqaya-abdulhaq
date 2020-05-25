import React from 'react';
import Card from '../../UI/card/card';
import './landing.css';

const landingPage = (props) => {
    return(
        <main>
            <h1>welcome to my online presence</h1>
            <section className="blogsArea">
                <h4>Blogs :</h4>
                <div className="blogsTape">
                    <Card info="my first blog" /> 
                    <Card info="my second blog" />
                    <Card info="my third blog" />
                    <Card info="my fourth blog" /> 
                </div>
            </section>
        </main>
    );
}

export default landingPage;