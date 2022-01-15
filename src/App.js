import React  from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

import withRouter from "./components/HOC/wrapRouter";

import Header from "./components/header/header";
import Homepage from "./pages/Homepage/Homepage";
import Checkout from "./pages/Checkout/Checkout";
import SignInAndSignUpPage from "./pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up";
import CollectionsOverview from "./components/collections-overview/collections-overview";
import CollectionPage from "./pages/Collection/Collection";
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
        const { currentUser } = this.props;
        console.log("app.js state after mount ", this.state);
        return ( 
            <div>
                <Header/>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>

                    <Route path="/shop" element={<CollectionsOverview/>} />
                    <Route path="/shop/:collectionId" element={<CollectionPage/>} />
            
                    <Route
                        exact
                        path='/signin'
                        element={
                            currentUser ? (
                                <Navigate to='/' />
                            ) : (
                                <SignInAndSignUpPage />
                            )
                        }
                    />
                    <Route path='/checkout' element={<Checkout/>} />
                </Routes>  
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});
  
export default connect(
    mapStateToProps, // mapStateToProps = null
    mapDispatchToProps
)(withRouter(App));


