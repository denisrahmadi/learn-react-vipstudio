import FormLogin from "../Components/Fragments/FormLogin";
import AuthLayouts from "../Components/Layouts/AuthLayouts";

const LoginPage = () => {
    return (
        <AuthLayouts title="Login" type="login">
            <FormLogin />
        </AuthLayouts>
    );
};

export default LoginPage;