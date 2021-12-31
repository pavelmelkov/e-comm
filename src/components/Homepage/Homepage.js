import React from "react";
import styles from "./Homepage.styles.module.scss";
const Homepage = () => {
    return (
        <div className={styles.homepage}>
            <div className={styles.menu__directory}>
                <div className={styles.menu__item}>
                    <div className={styles.menu__item__content}>
                        <h1 className={styles.title}>HATS</h1>
                        <span className={styles.subtitle}>SHOP NOW</span>
                    </div>
                </div>
                <div className={styles.menu__item}>
                    <div className={styles.menu__item__content}>
                        <h1 className={styles.title}>JACKETS</h1>
                        <span className={styles.subtitle}>SHOP NOW</span>
                    </div>
                </div>
                <div className={styles.menu__item}>
                    <div className={styles.menu__item__content}>
                        <h1 className={styles.title}>SNEAKERS</h1>
                        <span className={styles.subtitle}>SHOP NOW</span>
                    </div>
                </div>
                <div className={styles.menu__item}>
                    <div className={styles.menu__item__content}>
                        <h1 className={styles.title}>WOMENS</h1>
                        <span className={styles.subtitle}>SHOP NOW</span>
                    </div>
                </div>
                <div className={styles.menu__item}>
                    <div className={styles.menu__item__content}>
                        <h1 className={styles.title}>MENS</h1>
                        <span className={styles.subtitle}>SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;

