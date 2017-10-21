import React from 'react';
import Text from './Text';
import PropTypes from 'prop-types';

export default function TextList(props) {
    return (
        <ul>
            {props.list.map((item, index) => (
                <li key={index} onClick={() => props.onItemClick(index)}>
                    <Text disabled={item.disabled}>{item.name}</Text>
                </li>
            ))}
        </ul>
    );
}

TextList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        disabled: PropTypes.bool,
    })),
    onItemClick: PropTypes.func,
};

TextList.defaultProps = {
    list: [],
    onItemClick: () => null,
};