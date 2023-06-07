/* 
    import Input from "./Input";
    import Label from "./Label";
    import PropTypes from "prop-types";
    const InputForm = (props) => {
        const { type, placeholder, name, label } = props;
        return (
            <>
                <div className="mb-6">
                    <h1>hahahahhaa</h1>
                    <Label htmlFor={name} label={label}></Label>
                    <Input 
                        name={name} 
                        type={type} 
                        placeholder={placeholder} 
                    />
                </div>
            </>
        );
    };

    InputForm.propTypes = {
        type: PropTypes.string,
        placeholder: PropTypes.string,
        name: PropTypes.string,
        label: PropTypes.string,
    }

    export default InputForm; 
*/

/* ----------------------------------------------------------- */

import Input from "./Input";
import Label from "./Label";
import PropTypes from "prop-types";
const InputForm = (props) => {
    const { label, type, placeholder, name } = props;
    return (
        <>
            <div className="mb-6">
                <Label htmlFor={name}>{label}</Label>
                <Input name={name} type={type} placeholder={placeholder} />
            </div>
        </>
    );
};

InputForm.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
};

export default InputForm;
