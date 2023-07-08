import {
    createBrowserRouter,
} from "react-router-dom";
import '../App.css';
import Homepage from "../pages/homepage/Homepage";
import Loginpage from "../pages/loginpage/Loginpage";
import Detailpage from "../pages/product/detailpage";



const allrouter = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/loginpage",
        element: <Loginpage />,
    },
    {
        path: "/detailpage",
        element: <Detailpage />,
    },
    
   
]);

export default allrouter;