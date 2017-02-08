import * as React from 'react';
import { render } from 'react-dom';

function App() {
  return <div>hello world!</div>;
}

const mount = document.createElement('div');
document.body.appendChild(mount);

render(<App />, mount);
