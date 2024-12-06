import Signup from "./components/Signup";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import AddBooks from "./components/AddBooks";
import StoreBook from "./components/StoreBook";
import UpdateProduct from "./components/UpdateProduct";
import Resume from "./components/Resume";
import CreateResume from "./components/CreateResume";
import EditResume from "./components/EditResume";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/addbooks",
        element: <AddBooks />,
      },
      {
        path: "/storeroom",
        element: <StoreBook />,
      },
      {
        path: "/updateproduct/:id",
        element: <UpdateProduct />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/createresume",
        element: <CreateResume />,
      },
      {
        path: "/editresume",
        element: <EditResume />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={BrowserRouter} />
    </>
  );
}

export default App;
