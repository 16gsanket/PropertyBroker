import "./App.css";
import Appartments from "./pages/Appartments";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./ui/Applayout";
import Pagenotfound from "./pages/Pagenotfound";
import ShowFlat from "./pages/ShowFlat";
import Fillform from "./pages/Fillform";

function App() {
  const router = createBrowserRouter([
    {
      element: <Applayout />,

      children: [
        { path: "/", element: <Home /> },

        { path: "/appartments", element: <Appartments /> },
        { path: "/flat/:id", element: <ShowFlat /> },
        { path: "*", element: <Pagenotfound /> },
        { path: "/fillform", element: <Fillform /> },
      ],
    },
  ]);

  return (
    // <main className='h-screen w-full bg-stone-50'>

    <RouterProvider router={router} />

    // {/* </main> */}
  );
}

export default App;
