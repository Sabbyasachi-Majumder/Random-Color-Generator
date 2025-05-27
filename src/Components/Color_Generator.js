import React, { Component } from 'react'
import ColorCodes from './ColorCodes';
import './Color_Generator.css'

class Color_Generator extends Component {

    constructor() {
        super()
        this.state = {
            color: 'Default Color'  //Creation and default state value of color.
        }
        this.createRandomColorCodes = this.createRandomColorCodes.bind(this)  //binding the event handler ie createRandomColorCodes 
    }

    createRandomColorCodes() {
        this.setState({
            color: <ColorCodes></ColorCodes>  // '#FFFFFF'   //Changing the state 
        })
    }

    render() {  //Calling the state object i.e color 
        return (
            <div className="Button-Color-Box-Container">
                <div className="Color-Box" style={{ background: `${this.state.color}` }}></div>
                <div className="ColorName&ButtonBox">
                    <div className="ColorName">{this.state.color}</div>
                    <button className="Click-Button" onClick={this.createRandomColorCodes}>Cick here</button></div>
            </div>
        )
    }
}

export default Color_Generator