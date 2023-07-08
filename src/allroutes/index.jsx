import {
    createBrowserRouter,
} from "react-router-dom";
import '../App.css';
import Homepage from "../pages/homepage/Homepage";
import Loginpage from "../pages/loginpage/Loginpage";



const allrouter = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/loginpage",
        element: <Loginpage />,
    },
    
   
]);

export default allrouter;