import { Route, Routes, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../src/hooks/context/AuthProvider"
import { UnderConstruction } from "./components/common/UnderConstruction";
import { LandingPage } from "./pages/LandingPage";
import { ParentDashboard } from "./pages/ParentDashboard";


export const Router = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                   
                        <Route path="/dashboard-padre" element={<ParentDashboard />} />
                        <Route path="/dashboard-hijo" element={<UnderConstruction name="dashboard-hijo" />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}
