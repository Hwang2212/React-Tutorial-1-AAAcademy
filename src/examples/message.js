import React from 'react';
import Rainbow from './rainbow';

class Message extends React.Component {
    state = { 
        likes:Number(this.props.likes)
     } 
    
     addLikes = () => {
        console.log("addLikes called!");
        // change value of state
        // this.state.likes = this.state.likes + 1 //Cant work here
        this.setState({likes: this.state.likes+1});
     }

    rainbowStyle = {
        color:"blue",
        fontSize:"31px",
        fontFamily: "Arial",
        border: "1px solid pink",
        borderRadius: "10px",
        textShadow: "1px 1px lightblue"
    }

    welcome = () => {
        return (
            <p style={{color:"green", fontSize:"26px"}}>Messages: Hello, {this.props.name}</p>
        )
    }

    render() { 
        return (
            <div>
                <span>
                     {this.welcome()}
                     </span>
                     <div style = {this.rainbwStyle}>
                        Rainbow
                     </div>
                     <div style={{fontSize:"40px"}}>
                        <Rainbow alphabetcolor="red">R</Rainbow>
                        <Rainbow alphabetcolor="green">A</Rainbow>
                        <Rainbow alphabetcolor="blue">M</Rainbow>
                        <Rainbow alphabetcolor="purple">B</Rainbow>
                        <Rainbow alphabetcolor="pink">O</Rainbow>

                        <div>
                            {/* Changing values always works with states */}
                            <button onClick={this.addLikes}>Like</button> {this.state.likes}
                        </div>
                     </div>
                     </div>
        );
    }
}
 
export default Message;