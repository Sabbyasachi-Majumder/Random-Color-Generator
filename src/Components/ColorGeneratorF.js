import React from 'react'
import { useState } from 'react'  //Required for using hooks and its commmands like useState
import './Color_Generator.css'  //including css sheet for this component

const ColorGeneratorF = () => {  //Using a functional component along with hooks . the syntax is latest js version 

    const [color, setColor] = useState('Default Color : #060E17'); //Using hook to declare color as the varibale and setColor as the value changing command . The present value is 'Default Color : #060E17' as mentioned

    const createRandomColorCodes = () => {  //method meant to create random hexadecimal color codes
        let colorCode = '#';
        let hexadecimals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F',]  //list of hexadecimal alpha-numeric indivitual codes . 
        for (let i = 0; i < 6; i++) {       //hexadecimal codes contains # and then 6 more digits from above list
            colorCode += hexadecimals[Math.floor(Math.random() * hexadecimals.length)];     //adding 6 digits one after another
        }
        setColor(colorCode)  //setting the new value of color using setColor
    }

    return (   //main return block of this function
        <div className="Button-Color-Box-Container">                               {/*container containg the color box , color name , buttons*/}
            <div className="Color-Box" style={{ background: color }}></div>        {/*container containg the color box */}
            <div className="ColorNameAndButtonBox">                                {/*container containg the color name and buttons */}
                <div className="ColorName">{color}</div>                           {/*container containg the color name */}
                <button className="GenerateButton" onClick={createRandomColorCodes}>Generate</button>      {/*button to generate the code*/}
                <button className="CopyButton" onClick={() => { navigator.clipboard.writeText(color) }}>Copy the code</button>  {/*button to copy the code*/}
            </div>
        </div>
    )
}

export default ColorGeneratorF   //exporting the function to main 'App' function for the webpage to be visible .