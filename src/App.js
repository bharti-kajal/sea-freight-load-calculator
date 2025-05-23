import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SeaFreightPage from './components/SeaFreight/SeaFreightPage';

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
