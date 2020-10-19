import _ from 'lodash';

function component() {
    const element = document.createElement('div');

    // lodash included
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());
