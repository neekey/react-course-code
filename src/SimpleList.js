import React from 'react';
import Text from './Text';

export default class SimpleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        };
        this.onCreateNew = this.onCreateNew.bind(this);
    }
    onItemClick(index) {
        const list = [...this.state.list];
        const item = list[index];
        if (item) {
            list[index] = {
                ...item,
                disabled: !item.disabled,
            };
            this.setState({
                list,
            });
        }
    }
    onCreateNew() {
        const newItem =
            { name: `Item Number ${this.state.list.length + 1}`, disabled: false };
        const list = [...this.state.list, newItem];
        this.setState({
            list,
        });

    }
    render() {
        return (
            <div onClick={this.onClick}>
                <div><button onClick={this.onCreateNew}>Add New</button></div>
                <ul>
                    {this.state.list.map((item, index) => (
                        <li onClick={() => this.onItemClick(index)}>
                            <Text disabled={item.disabled}>{item.name}</Text>
                        </li>
                    ))}
                </ul>
            </div>);
    }
}
