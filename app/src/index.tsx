import * as React from 'react';
import { render } from 'react-dom';
import { App } from './App';

const mount = document.createElement('div');
document.body.appendChild(mount);

render(<App />, mount);
