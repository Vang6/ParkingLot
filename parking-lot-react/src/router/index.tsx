import React, { Children } from "react";
// import ApplicationContext from "global_store/application.context";
import { Testpage, ParkingZone, StatusDetail } from "../pages";
import { createRoot } from "react-dom/client";
import '../style/app-container.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <><div>
        Welcome
      </div></>
    ),
  },
  {
    path: "parkingzone",
    element: (
      <ParkingZone />
    ),
  },
  {
    path: "status",
    element: <StatusDetail />,
  },
], {
  basename: '/'
});


const AppRouter = (children:any) => {
  // return <ApplicationContext.Consumer>
  //   {(context: any) => {
  return <div className="page-container">
    <RouterProvider router={router} />   
  </div>
  //   }}
  // </ApplicationContext.Consumer>
}
export default AppRouter;