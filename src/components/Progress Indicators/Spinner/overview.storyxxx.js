/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Spinner from './spinner';

storiesOf('Components|Progress Indicators/Spinner', module)
  .addParameters({
    options: { showPanel: true },
  }).add('Overview', () => (
    <Spinner />
  ));
