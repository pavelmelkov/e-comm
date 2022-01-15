import React from "react";

import CollectionItem from "../collection-item/collection-item";
import withRouter from "../HOC/wrapRouter";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items, router: {navigate, location} }) => (
    <div className='collection-preview'>
        <h1 
            className='title'
            onClick={() => navigate(`${location.pathname}/${title.toLowerCase()}`)}
        >
            {title.toUpperCase()}
        </h1>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 4)
                .map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
        </div>
    </div>
);

export default withRouter(CollectionPreview);