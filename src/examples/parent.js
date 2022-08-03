import React from 'react';
import Child from './child';

class Parent extends React.Component {
    state = {  } 
    render() { 
        return (
            <div>
                <h1>I am Parent Component</h1>
                <Child age="12" name="James" likes="22">Hello</Child>
                <Child age="22" name="Janine" likes="2">Byebye</Child>
                <Child age="32" name="John" likes="221">Notnice</Child>
                <Child age="9" name="Jim" likes="13">Nice</Child>
                {/* age & name are props */}
            </div>
        );
    }
}
 
export default Parent;