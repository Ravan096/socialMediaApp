import Homescaleton from "../components/Loader/Homescaleton"
import { useAppSelector } from "../redux/hooks"
import { RootState } from "../redux/store"
import { Navigate } from "react-router-dom"


interface ProtectedRouteProps {
    children: JSX.Element
}
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { isAuthenticated, loading } = useAppSelector((x: RootState) => x.userslice)
    if (loading) return <Homescaleton />
    return (
        isAuthenticated ? children : <Navigate to="/" />
    )
}

export default ProtectedRoute