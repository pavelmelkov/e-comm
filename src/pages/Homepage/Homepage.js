import React from "react";
import { HomePageContainer } from "./Homepage.styles.js";
import MenuDirectory from "../../components/menu-directory/menu-directory";
const Homepage = () => {
    return (
        <HomePageContainer>
            <MenuDirectory/>
        </HomePageContainer>
    );
};

export default Homepage;

