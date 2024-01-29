import App from './App';
import Dashboard from './views/pages/Dashboard';
import Home from './views/pages/Home';
import Login from './views/pages/Login';


export const routes = [
    {
        path: "/",
        element: <App><Home /></App>,
    },
    {
        path: "login",
        element: <App><Login /></App>,
    },
    {
        path: "dashboard",
        element: <Dashboard />,
    }
];