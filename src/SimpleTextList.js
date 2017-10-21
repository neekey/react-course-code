import React from 'react';
import TextList from './TextList';

export default class SimpleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        };
        this.onCreateNew = this.onCreateNew.bind(this);
        this.onItemClick = this.onItemClick.bind(this);
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
                <TextList list={this.state.list} onItemClick={this.onItemClick} />
            </div>
        );
    }
}
