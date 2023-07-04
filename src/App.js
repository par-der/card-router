import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import { Card } from "./components/Card/Card";
import content from "./content";
import Products from "./pages/Products";

const Layout = () => {
  return (
    <div>
      {/* <Header />
      <Outlet />
      <Footer /> */}
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/products/:id", element: <Products /> },
      //{ path: "/product/:id", element: <ProductDetails /> },
      //{ path: "/search", element: <Search /> },
    ],
  },
]);

const App = () => {
  return (
    <div className="App">
      {content.map((content) => (
        <Card
          key={content.id}
          image={content.image}
          name={content.name}
          information={content.information}
          type={content.type}
        />
      ))}
    </div>
  );
};

export default App;
