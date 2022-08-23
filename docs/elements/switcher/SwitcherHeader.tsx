import React from 'react';
import { FaLightbulb, FaMoon } from 'react-icons/fa';


const SwitcherHeader = () => {

    const switchColor = () => {
        document.querySelector('body')?.classList.toggle("active-dark-mode");
    }

    return (
        
        <button onClick={switchColor}>
            <span className="setColor dark"><FaLightbulb /></span>
            <span className="setColor light"><FaMoon /></span>
        </button>
       
    )
}

export default SwitcherHeader;