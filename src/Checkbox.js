import React from 'react';
import PropTypes from 'prop-types';

export default class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { checked: false };
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        this.setState({
            checked: !this.state.checked,
        });
    }
    render() {
        const style = {
            width: '20px',
            height: '20px',
            background: 'lightgrey',
            textAlign: 'center',
            lineHeight: '20px',
            display: 'inline-block',
            color: 'green',
            cursor: 'pointer',
            verticalAlign: 'middle',
        };
        const { checked } = this.state;
        const { label } = this.props;
        return (<div onClick={this.onClick}>
            <div style={style}>
                {checked ? <span>&#x2714;</span> : null}
            </div>
            <span>{label}</span>
        </div>);
    }
}

Checkbox.propTypes = {
    label: PropTypes.string,
};

Checkbox.defaultProps = {
    label: 'Click me!',
};
;