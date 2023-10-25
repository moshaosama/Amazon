import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Signin from "./Sign ";
import New_Account from "./New_Account";
import Show from "./Show";
import Pay from "./Pay";
import Order from "./Order";
import Hello from "./Chartjs";
import Start_App from "./Start";

function Router_Pages() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Start_App />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Home/Cart" element={<Cart />}></Route>
          <Route path="/Home/TodaysDells" element={<Hello />}></Route>
          <Route path="/Home/SignIn" element={<Signin />}></Route>
          <Route path="/Home/SignIn/Order" element={<Order />}></Route>
          <Route path="/Home/Cart/SignIn" element={<Signin />}></Route>
          <Route
            path="/Home/SignIn/NewAccount"
            element={<New_Account />}
          ></Route>
          <Route
            path="/Home/Cart/SignIn/NewAccount"
            element={<New_Account />}
          ></Route>
          <Route path="/Home/:elid" element={<Show />}></Route>
          <Route path="/Home/:elid/Pay" element={<Pay />}></Route>
          <Route path="/Home/signIn/Order/Pay" element={<Pay />}></Route>
        </Routes>
      </div>
    </>
  );
}
export default Router_Pages;
