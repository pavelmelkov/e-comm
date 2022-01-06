import React  from "react";
import { Routes, Route } from "react-router-dom";

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

import Header from "./components/header/header";
import Homepage from "./pages/Homepage/Homepage";
import ShopPage from "./pages/ShopPage/ShopPage";
import SignInAndSignUpPage from "./pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import "./App.css";
class App extends React.Component {
    // constructor(){
    //     super();

    //     this.state = {
    //         currentUser: null
    //     };
    // }

    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;
        // подписываемся на изменения стейта аутентификации в фаербейс
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                
                userRef.onSnapshot(snapShot => {
                    console.log("userRef.onSnapshot(snapShot => ",snapShot);
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                });
            } 
    
            setCurrentUser(userAuth);
        });
    }
    // когда подписываемся на что-то при монтировании, то должны отписаться при размонтировании компонента
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        console.log("app.js state after mount ", this.state);
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
}


const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});
  
export default connect(
    null, // mapStateToProps = null
    mapDispatchToProps
)(App);


