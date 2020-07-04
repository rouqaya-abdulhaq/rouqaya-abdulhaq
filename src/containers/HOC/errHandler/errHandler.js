import React from 'react';


class ErrHandler extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hasErr : false,
            errMsg : ''
        }
    }

    componentDidCatch(err,info){
        this.setState({hasErr : true});
    }

    render(){
        if(this.state.hasErr){
            return(<p>error!!! {this.state.errMsg}</p>);
        }else{
            return this.props.children;
        }
    }
}

export default ErrHandler;