import React from 'react'
import "./Button.css"
function Button({content}) {
    return(
        <div>

        <button className="Button_button">
          {content}
        </button>
        </div>

    );
}

export default Button
