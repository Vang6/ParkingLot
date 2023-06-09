import React, { Children } from "react";
// import ApplicationContext from "global_store/application.context";
import { Testpage, ParkingZone, StatusDetail, AdminDashboard, AdminFloor } from "../pages";
import Page from "components/common/page.component";
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
      <Page><div>
        Welcome
      </div></Page>
    ),
  },
  {
    path: "parkingzone",
    element: (
      <Page>
        <ParkingZone />
      </Page>
    ),
  },
  {
    path: "status",
    element: <Page><StatusDetail /> </Page>,
  },
  {
    path: "admin/floor_management",
    element: (
      <Page>
        <AdminFloor />
      </Page>
    ),
  },
  {
    path: "admin",
    element: (
      <Page>
        <AdminDashboard />
      </Page>
    ),
  }
], {
  basename: '/'
});


const AppRouter = (children: any) => {
  return <>
    <RouterProvider router={router} />
  </>
}
export default AppRouter;