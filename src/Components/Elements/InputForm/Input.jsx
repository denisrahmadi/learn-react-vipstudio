/* import PropTypes from "prop-types";
const Input = (props) => {
    const { type, placeholder, name } = props;
    return (
        <div>
            <input 
                type={type} 
                className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50" 
                placeholder={placeholder}
                name={name} 
            />
        </div>
    );
}

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
}

export default Input; */

/* ----------------------------------------------------------- */


import PropTypes from "prop-types";
const Input = (props) => {
    const { type, placeholder, name } = props;
    return (
        <div>
            <input 
                type={type}
                className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50" 
                placeholder={placeholder} 
                name={name}
            />
        </div>
    );
};

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
};

export default Input;
