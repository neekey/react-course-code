import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TextList from '../TextList';

const list = [
    { name: 'Clean House', disabled: false },
    { name: 'Water Flower', disabled: true },
    { name: 'Buy Eggs', disabled: false },
];

storiesOf('TextList', module)
    .add('Text List', () => <TextList list={list} />)
    .add('Text Item Clicked', () =>
        <TextList list={list} onItemClick={action('Text Item Clicked')} />);
