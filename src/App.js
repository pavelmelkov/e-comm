import React  from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Homepage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/ShopPage/ShopPage";
import SignInAndSignUpPage from "./pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up";

function App() {
    return ( 
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path='/shop' element={<ShopPage/>} />
                <Route path='/signin' element={<SignInAndSignUpPage/>} />
            </Routes>  
        </div>
    );
}

export default App;
