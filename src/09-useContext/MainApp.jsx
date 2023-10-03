import {Navigate, Route, Routes} from "react-router-dom";
import {HomePage} from "./HomePage.jsx";
import {AboutPage} from "./AboutPage.jsx";
import {LoginPage} from "./LoginPage.jsx";
import {Navbar} from "./Navbar.jsx";
import {UserProvider} from "./context/UserProvider.jsx";

export const MainApp = () => {
    return (
        <UserProvider>
            <Navbar />
            <div className="container my-4">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    {/*<Route path="/*" element={<HomePage />}/>*/}
                    <Route path="/*" element={<Navigate to="/"/>}/>
                </Routes>
            </div>
        </UserProvider>
    );
};