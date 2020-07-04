import React from 'react';
import ErrorPage from '../../../components/layout/errorPage/errorPage';


class ErrHandler extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hasErr : false,
        }
    }

    componentDidCatch(err,info){
        this.setState({hasErr : true});
    }

    render(){
        if(this.state.hasErr){
            return(
                <ErrorPage/>
            );
        }else{
            return this.props.children;
        }
    }
}

export default ErrHandler;