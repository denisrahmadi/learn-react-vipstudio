import InputForm from "../Elements/InputForm";
import Button from "../Elements/Button";

const FormRegister = () => {
    return (
        <div>
            <form action="">
                <InputForm 
                    label="Username" 
                    type="text" 
                    placeholder="insert your username here" 
                    name="username" 
                />
                <InputForm 
                    label="Email" 
                    type="email" 
                    placeholder="Example@gmail.com" 
                    name="email" 
                />
                <InputForm 
                    label="Password" 
                    type="password" 
                    placeholder="**********" 
                    name="password" 
                />
                <InputForm 
                    label="Confirm Password" 
                    type="password" 
                    placeholder="**********" 
                    name="confirmPassword" 
                />

                <Button classname="bg-slate-700">Register</Button>
            </form>
        </div>
    );
};

export default FormRegister;
