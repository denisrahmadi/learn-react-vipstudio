// Class Component
/* import React from "react";


class ButtonClass extends React.Component {
    render() {
        return (
            <button className="h-10 mx-1 px-6 font-semibold rounded-md bg-yellow-600 text-white" type="submit">
                Button Class
            </button>
        );
    }
} */

// Function Component
// function ButtonFunctional(props) {
//   return (
//       <button className={`h-10 mx-1 px-6 font-semibold rounded-md bg-${props.variant}-500 text-white`} type="submit">
//           Button Functional
//       </button>
//   );
// }

import PropTypes from "prop-types";

const ButtonFunctional = (props) => {
    return (
        <button className={`h-10 mx-1 px-6 font-semibold rounded-md ${props.variant} text-white`} type="submit">
            {props.children}
        </button>
    );
};

ButtonFunctional.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.string,
};


function App() {
    return (
        <>
            <div className="bg-slate-900 flex justify-center min-h-screen items-center">
                <ButtonFunctional variant="bg-red-500">Button Function 1</ButtonFunctional>
                <ButtonFunctional variant="bg-blue-700">Button Function 2</ButtonFunctional>
            </div>
        </>
    );
}

export default App;
