import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/NotFound";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {
	let routes = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{ index: true, element: <Home /> },
				{ path: "about", element: <About /> },
				{ path: "portfolio", element: <Portfolio /> },
				{ path: "contact", element: <Contact /> },
				{ path: "*", element: <NotFound /> },
			],
		},
	]);

	return (
		<>
			<RouterProvider router={routes} />
		</>
	);
}
