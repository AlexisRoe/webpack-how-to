import _ from 'lodash';
import './style.css';
import Icon from './dog.jpg';

function component() {
    const element = document.createElement('div');

    // lodash included
    element.innerHTML = _.join(['Hello', 'Guys'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());
