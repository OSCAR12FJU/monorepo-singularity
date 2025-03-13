import { useAuthStore } from "../store/useAuthStore";
import { Navigate, Outlet } from "react-router-dom";

// interface PrivateRouteProps{
// component: React.ComponentType;
// path: string;
// exact?: boolean;
// }

export const PrivateRoute= ()=>{
    const token = useAuthStore((state) => state.token);
    return token ? <Outlet /> : <Navigate to="/login" replace/>
}