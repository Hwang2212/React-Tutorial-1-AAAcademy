import React from 'react';
import Userlist from "../remote/userlist"

class RemoteAPI extends React.Component {
    state = {  } 
    render() { 
        return (
            <div>
                <h1>Userlist Component will come here!</h1>
                {/* <Userlist> */}
                <Userlist></Userlist>
            </div>
        );
    }
}
 
export default RemoteAPI;