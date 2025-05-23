import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/ProtectedRoute';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SeaFreightPage from './components/SeaFreight/SeaFreightPage';
import Signup from './components/Signup';
import Login from './components/Login';
import Shipments from './components/Shipments';
import Visualization from './components/Visualization';


function App() {
  const browserRouter = createBrowserRouter([
    { path: "/", element: <SeaFreightPage /> },
    { path: "/signup", element: <Signup /> },
    { path: "/login", element: <Login /> },
    {
      path: "/shipments",
      element: <ProtectedRoute><Shipments /></ProtectedRoute>,
    },
    {
      path: "/visualization",
      element: <ProtectedRoute><Visualization /></ProtectedRoute>,
    }
  ]);

  return (
    <>
      <RouterProvider router={browserRouter} />
      <ToastContainer position="top-right" />
    </>
  );
}

export default App;
