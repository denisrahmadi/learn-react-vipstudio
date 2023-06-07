import Button from "./Components/Elements/Button";
import InputForm from "./Components/Elements/InputForm";
function App() {
    return (
        <>
            <div className="bg-slate-300 flex justify-center min-h-screen items-center">
                <div className="w-full max-w-xs">
                    <h1 className="text-3xl font mb-2 text-blue-600 font-bold text-center">Login</h1>
                    <p className="font-light text-slate-600 mb-2 text-sm text-center">Welcome, Please enter your details</p>
                    <form action="">
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

                        <Button classname="bg-slate-700">Login</Button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default App;
