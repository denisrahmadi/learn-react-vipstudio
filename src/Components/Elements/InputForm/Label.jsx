/* import PropTypes from "prop-types";

const Label = () => {
    // const { htmlFor, label } = props;
    return (
        <div>
            <label className="block text-slate-700 text-sm font-bold mb-2">
                {label}
            </label>
        </div>
    );
}

Label.propTypes = {
    htmlFor: PropTypes.string,
    label: PropTypes.string,
};

export default Label;
 */

import PropTypes from "prop-types";

const Label = (props) => {
    const { htmlFor, children } = props;
    return (
        <div>
            <label htmlFor={htmlFor} className="block text-slate-700 text-sm font-bold mb-2">
                {children}
            </label>
        </div>
    );
};

Label.propTypes = {
    htmlFor: PropTypes.string,
    children: PropTypes.string,
};

export default Label;