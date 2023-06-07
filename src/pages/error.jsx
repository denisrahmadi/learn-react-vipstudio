import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="bg-slate-300 flex justify-center min-h-screen items-center capitalize flex-col">
            <h1 className="text-2xl">opss! something went wrong</h1>
            <p>please try again</p>
            <p className="font-bold">{error.status || error.message}</p>
        </div>
    );
};

export default ErrorPage;
