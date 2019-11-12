import { configure } from '@storybook/react';

function loadStories() {
    require('./story/atoms.js');
    require('./story/templates.js');

}

configure(loadStories, module);
