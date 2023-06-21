import PropTypes from "prop-types";

const Button = (props) => {
    const { classname = "bg-black", children, onClick = () => {}, type = "button" } = props;
    return (
        <button
            className={`h-10 mx-1 px-6 font-semibold rounded-md ${classname} text-white`}
            type={type}
            onClick={() => {onClick()}}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    classname: PropTypes.string,
    children: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
};

export default Button;
