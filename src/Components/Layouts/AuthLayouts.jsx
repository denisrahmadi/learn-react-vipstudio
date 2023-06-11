 import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
    const { children, title, type } = props;
    return (
        <div className="bg-slate-300 flex justify-center min-h-screen items-center">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl font mb-2 text-blue-600 font-bold text-center">{title}</h1>
                <p className="font-light text-slate-600 mb-2 text-sm text-center">Welcome, Please enter your details</p>
                {children}
                {type === "login"  
                    ? "Don't have account? please" 
                    : "Already have account? please"
                }
                {type === "login" && (
                    <Link to="/register" className="mx-1 capitalize text-blue-600">
                        sign up
                    </Link>
                )}
                {type === "register" && (
                    <Link to="/login" className="mx-1 capitalize text-blue-600">
                        sign up
                    </Link>
                )}

                {/* <Navigation type={type} /> */}
            </div>
        </div>
    );
};



/* const Navigation = ({type}) => {
    if (type === 'login') {
        return (
            <p className="text-sm">
                Don&apos;t have account? please
                <Link to="/register" className="mx-1 capitalize text-blue-600">
                    sign up
                </Link>
            </p>
        );
    } else {
        return (
            <p className="text-sm">
                Already have account? please
                <Link to="/login" className="mx-1 capitalize text-blue-600">
                    sign in
                </Link>
            </p>
        );
    }
};

Navigation.propTypes = {
    type: PropTypes.string
} */





AuthLayouts.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    type: PropTypes.string
}

export default AuthLayouts;