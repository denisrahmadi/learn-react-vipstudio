import Button from "../Elements/Button";
import InputForm from "../Elements/InputForm";

const FormLogin = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        localStorage.setItem("email", event.target.email.value);
        localStorage.setItem("password", event.target.password.value);
        window.location.href = "/products";

        console.log(event.target.email.value);
        console.log(event.target.password.value);
        console.log("login button dipencet");
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <InputForm 
                    label="Email" 
                    type="email" 
                    placeholder="Example@gmail.com" 
                    name="email"
                />
                <InputForm 
                    label="Password" 
                    type="password" 
                    placeholder="*******" 
                    name="password" 
                />

                <Button 
                    classname="bg-slate-700" 
                    type="submit"
                >
                    Login
                </Button>
            </form>
        </div>
    );
};

export default FormLogin;
