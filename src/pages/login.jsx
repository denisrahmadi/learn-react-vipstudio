import FormLogin from "../Components/Fragments/FormLogin";
import AuthLayouts from "../Components/Layouts/AuthLayouts";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <AuthLayouts title="Login">
            <FormLogin />
            <p className="text-sm">
                Don&apos;t have account? please 
                <Link 
                    to='/register'
                    className="mx-1 capitalize text-blue-600"
                >
                    sign up
                </Link>
            </p>
        </AuthLayouts>
    );
};

export default LoginPage;