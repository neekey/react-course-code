import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from '../Text';


storiesOf('Text', module)
  .add('Normal', () => <Text>Hello Text</Text>)
  .add('Disabled', () => <Text disabled>Hello Text</Text>);
