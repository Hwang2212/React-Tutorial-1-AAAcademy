import React from 'react';
import Message from './message';

class Child extends React.Component {
    state = {  } 

    score = 88;



    render() { 
        return (
            // Once you pass props in child component called in Parent component, 
            // You can call back the props by {this.prop.attributes}
            
            <div>
                <h1>I am Child Component! { }</h1>
                <p style={{color:"red"}}>
                {this.props.name} { }
                {this.props.age} { }
                from {this.props.children}
                </p>
                
                <div style={{color:"orange"}}>
                    <p>
                        Score: {this.score} <br></br>
                        Age: {this.props.age} <br></br>
                        <Message name = {this.props.name} likes = {this.props.likes}></Message>
                    </p>
                    </div>
                </div>
        );
    }
}
 
export default Child;