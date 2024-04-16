import { useRoutes } from "react-router-dom";
import Home from "./section/Home";
import Login from "./section/Login";
import Register from "./section/Register";
import RegisAddress from "./section/RegisAddress";
// import Testing from "./Testing"

const App = () => {
    const elements = useRoutes([
        // {path:'/',element:<Testing/>},
        { path: "/", element: <Home /> },
        { path: "/regis-address", element: <RegisAddress /> },
        { path: "/register", element: <Register /> },
        { path: "/login", element: <Login /> },
    ]);

    return elements;
};

export default App;
