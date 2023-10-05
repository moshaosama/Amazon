import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Signin from "./Sign ";
import New_Account from "./New_Account";

function Router_Pages() {
    return (
        <>
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Cart" element={<Cart/>}></Route>
                <Route path="/SignIn" element={<Signin/>}></Route>
                <Route path="Cart/SignIn" element={<Signin/>}></Route>
                <Route path="SignIn/NewAccount" element={<New_Account/>}></Route>
                <Route path="Cart/SignIn/NewAccount" element={<New_Account/>}></Route>
            </Routes>
        </div>
        </>
    )
}
export default Router_Pages;