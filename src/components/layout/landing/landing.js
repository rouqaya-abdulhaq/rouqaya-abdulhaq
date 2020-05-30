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
                    <div className="firstAnimation">
                        <Card info="my first blog" />
                    </div>
                  <div className="secondAnimation">
                        <Card info="my second blog" />
                    </div>
                   {/*} <div className="thirdAnimation">
                        <Card info="my third blog" />
                    </div>
                    <div className="fourthAnimation">
                        <Card info="my fourth blog" />
                    </div>  */}
                </div>
            </section>
        </main>
    );
}

export default landingPage;