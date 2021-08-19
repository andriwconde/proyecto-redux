import React, {Component} from "react"
import Page from './page'
import { connect } from 'react-redux'

class IAppBar extends Component{
    constructor(props) {
        super(props);
        this.state={
            text:''
        };

    }
    onChangeText=(text)=>{
        this.setState({text})
    }
    onChangeSelection=(text)=>{
        
    }
    render(){
        const { text } = this.state;
        const { suggestions } = this.props;

        return(
            <Page 
                text={text}
                suggestions={suggestions}
                onChangeText={this.onChangeText}
                onChangeSelection={this.onChangeSelection}

            />
        )
    }
    
}

const mapStateToProps = (state) =>{
    return {
        suggestions: state.suggestions
    }
}

export default connect(mapStateToProps)(IAppBar)
