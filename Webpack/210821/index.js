import 'normalize.css';
import './index.css';

function component() {
    const element = document.createElement('div');
    element.innerHTML = 'Hello Webpack';

    return element;
}

document.body.appendChild(component());