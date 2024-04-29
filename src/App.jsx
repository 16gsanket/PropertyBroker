import "./App.css";
import Appartments from "./pages/Appartments";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./ui/Applayout";
import Pagenotfound from "./pages/Pagenotfound";
import ShowFlat from "./pages/ShowFlat";
import Fillform from "./pages/Fillform";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const [nightMode, setNightMode] = useState(false);

  useEffect(() => {
    if (nightMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [nightMode]);

  function handle_night_mode() {
    console.log("previous state ", nightMode);
    setNightMode((n) => !n);
    console.log("current state ", nightMode);
  }

  const router = createBrowserRouter([
    {
      element: (
        <Applayout
          nightMode={nightMode}
          handle_night_mode={handle_night_mode}
        />
      ),

      children: [
        { path: "/", element: <Home nightMode={nightMode} /> },

        { path: "/appartments", element: <Appartments /> },
        { path: "/flat/:id", element: <ShowFlat /> },
        { path: "*", element: <Pagenotfound /> },
        { path: "/fillform", element: <Fillform /> },
      ],
    },
  ]);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTimer: 10 * 600,
      },
    },
  });

  return (
    // <main className='h-screen w-full bg-stone-50'>

    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>

    // {/* </main> */}
  );
}

export default App;
