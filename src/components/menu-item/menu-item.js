import React from "react";
import withRouter from "../HOC/wrapRouter";
import "./menu-item.styles.scss";


const MenuItem = ({ title, imageUrl, size, router, linkUrl }) => {
    return (
        <div className={`${size} menu-item`} onClick={() => {router.navigate(`/${linkUrl}`);}}>
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
};



export default withRouter(MenuItem);


