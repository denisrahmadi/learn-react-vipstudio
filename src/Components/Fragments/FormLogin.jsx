import InputForm from "../Elements/InputForm";
import Button from "../Elements/Button";

const FormLogin = () => {
    return (
        <div>
            <form action="">
                <InputForm label="Email" type="email" placeholder="Example@gmail.com" name="email" />
                <InputForm label="Password" type="password" placeholder="*******" name="password" />

                <Button classname="bg-slate-700">Login</Button>
            </form>
        </div>
    );
};

export default FormLogin;