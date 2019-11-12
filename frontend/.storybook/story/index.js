import React from 'react';
import { storiesOf} from '@storybook/react';
import {muiTheme} from 'storybook-addon-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

storiesOf('Material-UI', module)
  .addDecorator(muiTheme())
  .add('RaiseButton', () => (
    <MuiThemeProvider>
      <RaisedButton label="Default" />
    </MuiThemeProvider>
  ));