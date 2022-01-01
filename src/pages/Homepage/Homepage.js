import React from "react";
import styles from "./Homepage.styles.module.scss";
import MenuDirectory from "../../components/menu-directory/menu-directory";
const Homepage = () => {
    return (
        <div className={styles.homepage}>
            <MenuDirectory/>
        </div>
    )
}

export default Homepage;

