import React from "react";
import { connect } from "react-redux";
import { selectSections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";
import styles from "./menu-directory.styles.module.scss";
import MenuItem from "../menu-item/menu-item";

const MenuDirectory = ({sections}) => (
    <div className={styles.menu__directory}>
        {sections.map(({ id, ...otherSectionProps}) => (
            <MenuItem key={id} {...otherSectionProps} />
        ))};
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectSections,
});

export default connect(mapStateToProps, null)(MenuDirectory);
