import React from 'react';

class Rainbow extends React.Component {
    state = {  } 
    render() { 
        return (
            <span style={{color:this.props.alphabetcolor}}>
                {this.props.children}
                </span>
        );
    }
}
 
export default Rainbow;