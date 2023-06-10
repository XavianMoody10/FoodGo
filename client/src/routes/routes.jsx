import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "../pages/Home";
import { Cart } from "../pages/Cart";
import { Checkout } from "../pages/Checkout";
import { PageLayout } from "../layouts/PageLayout/PageLayout";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<PageLayout></PageLayout>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="cart" element={<Cart></Cart>}></Route>
        <Route path="checkout" element={<Checkout></Checkout>}></Route>
      </Route>
    </Route>
  )
);
