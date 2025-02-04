import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Feed from '../pages/Feed';
import Profile from '../pages/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'feed', element: <Feed /> },
      { path: 'profile', element: <Profile /> },
      // { path: '*', element: <NotFound /> },
    ],
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
