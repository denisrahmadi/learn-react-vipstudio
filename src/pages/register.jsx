
import { Link } from "react-router-dom";
import FormRegister from "../Components/Fragments/FormRegister";
import AuthLayouts from "../Components/Layouts/AuthLayouts";

const RegisterPage = () => {
    return (
        <AuthLayouts title="Login">
            <FormRegister />
            <p className="text-sm">
                Have an account? 
                <Link 
                    to='/login'
                    className="mx-1 capitalize text-blue-600"
                >
                    sign in
                </Link>
            </p>
        </AuthLayouts>
    );
};

export default RegisterPage;
