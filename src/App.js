import React  from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Homepage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/ShopPage/ShopPage";
import SignInAndSignUpPage from "./pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
class App extends React.Component {
    constructor(){
        super();

        this.state = {
            currentUser: null
        };
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        // подписываемся на изменения стейта аутентификации в фаербейс
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                
                userRef.onSnapshot(snapShot => {
                    console.log("userRef.onSnapshot(snapShot => ",snapShot);
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    });
                });
            } 
    
            this.setState({ currentUser: userAuth });
        });
    }
    // когда подписываемся на что-то, то должны отписаться при размонтировании
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        console.log("app.js state after mount ", this.state);
        return ( 
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path='/shop' element={<ShopPage/>} />
                    <Route path='/signin' element={<SignInAndSignUpPage/>} />
                </Routes>  
            </div>
        );
    }
}


export default App;


