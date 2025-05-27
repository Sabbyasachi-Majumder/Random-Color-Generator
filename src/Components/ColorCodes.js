import React from 'react'

function ColorCodes() {

    const hexadecimals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f',]

    const getColorCode = hexadecimals => {
        let colorCode = "#";
        for (let i = 0; i < 6; i++) {
            colorCode = colorCode + hexadecimals[Math.floor(Math.random() * hexadecimals.length)];
        }
        return <div>{colorCode}</div>;
    };

    return getColorCode(hexadecimals);
}

export default ColorCodes