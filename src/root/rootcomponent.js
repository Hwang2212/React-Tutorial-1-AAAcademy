import React from "react";
import Parent from "../examples/parent";
import RemoteAPI from "../remote/remoteapi"

class RootComponent  extends React.Component {
    state = {  }
    render() { 
        return (
            <div>
            <div style={{border:"4px solid red", padding:"5px"}}>
                <h1>I am Root Component!!! </h1>
                <Parent></Parent>
            </div>
            <div style={{border:"4px solid blue", padding:"5px", marginTop:"5px"}}>
                <RemoteAPI></RemoteAPI>
            </div>
            </div>
        );
    }
}
 
export default RootComponent;