import './App.css';
import Root from './components/Router'
import ErrorPage from "./error-page";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
