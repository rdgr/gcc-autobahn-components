import { addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withThemesProvider } from "storybook-addon-styled-component-theme";

import themeDecorator from './themeDecorator';

import { theme as themeBc } from '../src/themes/bcom';
import { theme as themeAb } from '../src/themes/ab';

const themes = [themeBc, themeAb];

addDecorator(withA11y);
addDecorator(withThemesProvider(themes));
addDecorator(themeDecorator);
