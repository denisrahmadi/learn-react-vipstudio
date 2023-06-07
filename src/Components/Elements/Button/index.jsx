// Class Component
/* 
import React from "react";


class ButtonClass extends React.Component {
    render() {
        return (
            <button className="h-10 mx-1 px-6 font-semibold rounded-md bg-yellow-600 text-white" type="submit">
                Button Class
            </button>
        );
    }
} 
*/

// Function Component
// function Button(props) {
//   return (
//       <button className={`h-10 mx-1 px-6 font-semibold rounded-md bg-${props.classname}-500 text-white`} type="submit">
//           Button Functional
//       </button>
//   );
// }

import PropTypes from "prop-types";

const Button = (props) => {
    return (
        <button className={`h-10 mx-1 px-6 font-semibold rounded-md ${props.classname} text-white`} type="submit">
            {props.children}
        </button>
    );
};

Button.propTypes = {
    classname: PropTypes.string,
    children: PropTypes.string,
};

export default Button;