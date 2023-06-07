 import PropTypes from "prop-types";

const AuthLayouts = (props) => {
    const { children, title } = props;
    return (
        <div className="bg-slate-300 flex justify-center min-h-screen items-center">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl font mb-2 text-blue-600 font-bold text-center">{title}</h1>
                <p className="font-light text-slate-600 mb-2 text-sm text-center">Welcome, Please enter your details</p>
                {children}
            </div>
        </div>
    );
};

AuthLayouts.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string
}

export default AuthLayouts;