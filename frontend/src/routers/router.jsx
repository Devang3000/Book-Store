import { createBrowserRouter } from "react-router-dom";
import App from "../App";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children : [
        {
            path: "/",
            element : <h2>Home</h2>
        },
        {
            path : "/orders",
            element: <div>Orders</div>
        },
        {
            path: "/about",
            element : <div>About</div>
        }

      ]
    },
  ]);

  export default router;