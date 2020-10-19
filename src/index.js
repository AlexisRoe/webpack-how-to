import _ from 'lodash';
import './style.css';
import Icon from './dog.jpg';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    element.classList.add('container');

    // lodash included
    element.innerHTML = _.join(['Hello', 'Guys'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    // End insert img

    // Add a button to print
    const btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
    // End insert button

    return element;
}

document.body.appendChild(component());
