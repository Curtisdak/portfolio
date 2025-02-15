import { createBrowserRouter } from "react-router-dom";

import HomePage from './components/pages/homepage/HomePage'
import Projects from './components/pages/ProjectsPage/Projects'
import ContactPage from './components/pages/ContactPage/Contact'

import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/curtis-projects", element: <Projects /> },
      { path: "/contact-curtis", element: <ContactPage /> },
    ],
  },
]);

export default router;
