import { Navigate, Route, Routes } from "react-router-dom"
import { Footer, Header } from "../shared"
import { routes } from "./routes"

export const DashboardRoutes = () => {
    return (
        <>
            <Header />
            <Routes>
                {
                    routes.map(({ Component, path }: any ) => (
                      <Route key={ path } path={ path } element={ <Component /> } />
                    ))
                }
                <Route path="*" element={<Navigate to='/' />} />
            </Routes>
            <Footer />
        </>
    )
}