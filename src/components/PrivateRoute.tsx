import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks"
import { RootState } from "../redux/store";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const { isAuthenticated } = useAppSelector((state: RootState) => state.userslice);
    return (
        <>
            {
                isAuthenticated ? children : <Navigate to='/' replace/>
            }
        </>
    )
}

export default PrivateRoute