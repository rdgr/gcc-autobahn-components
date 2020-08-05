// Import and add decorators for storybook addons that you want to be included in all stories.
import { addDecorator, addParameters } from '@storybook/react';
// import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y);
// addDecorator(DocsPage);
// addDecorator(DocsContainer);
// import { addParameters } from '@storybook/react';
// import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
 
// addParameters({
//   docs: {
//     container: DocsContainer,
//     page: DocsPage,
//   },
// });