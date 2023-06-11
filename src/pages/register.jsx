import FormRegister from "../Components/Fragments/FormRegister";
import AuthLayouts from "../Components/Layouts/AuthLayouts";

const RegisterPage = () => {
    return (
        <AuthLayouts title="Login" type="register">
            <FormRegister />
        </AuthLayouts>
    );
};

export default RegisterPage;
