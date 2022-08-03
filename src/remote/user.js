import React from 'react';


class User extends React.Component {
    state = {  } 
    render() { 
        return (
            <li>
                {this.props.name} <span style={{fontWeight:"bold"}}>from</span> {this.props.city}
            </li>
        );
    }
}
 
export default User;