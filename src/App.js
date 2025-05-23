import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SeaFreightPage from './components/SeaFreight/SeaFreightPage';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import "../../src/style.css";
function App() {
  const browserRouter = createBrowserRouter([
    { path: "/", element: <SeaFreightPage /> }
  ]);

  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  );
}

export default App;
