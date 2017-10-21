import React from 'react';
import PropTypes from 'prop-types';

export default function Text(props) {
    const style = props.disabled ?
        {
            color: 'lightgrey',
            textDecoration: 'line-through',
        } : null;
    return <div style={style}>{props.children}</div>;
}

Text.propTypes = {
    disabled: PropTypes.bool,
};