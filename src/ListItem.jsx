import React from 'react';
import PropTypes from "prop-types";

const ListItem = (props) => {


    return (
        <div className={props.active === props.id ? 'item active-item' : 'item'}  onClick={() => {
            props.getCard(props);
            props.setActive(props.id)
        }}>
            <p>{props.name}</p>
        </div>
    );
};
ListItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    getCard: PropTypes.func,
    setActive: PropTypes.func,
    active: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}
export default ListItem;