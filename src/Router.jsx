import { Route, Routes, BrowserRouter } from "react-router-dom";
import {UnderConstruction} from "./components/common/UnderConstruction";
import {LandingPage} from "./pages/LandingPage";


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route element={<UnderConstruction name="dashboard" />}>
                    <Route path="/dashboard-padre" element={<UnderConstruction name="dashboard-padre" />} />  
                    <Route path="/dashboard-hijo" element={<UnderConstruction name="dashboard-hijo" />} />    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
