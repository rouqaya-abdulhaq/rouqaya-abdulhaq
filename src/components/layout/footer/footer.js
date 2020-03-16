import React from 'react';
import Link from '../../UI/link/link';

const footer = () => {
    return(
        <div>
            <div>license</div>
            <div>
                <Link to="Linked In"/>
                <Link to="Twitter"/>
                <Link to="GitHub"/>
            </div>
        </div>
    );
}

export default footer;