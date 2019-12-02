import React from 'react';
import { render } from 'react-dom';
import { Settings } from 'luxon';

import { App } from './app';

Settings.defaultLocale = 'cs-CZ';

render(<App />, document.getElementById('root') as HTMLElement);
