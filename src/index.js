import _ from 'lodash';
import printMe from './print.js';

function component(){
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);


      // Add the image to our existing div.
const myFlyer = new Image();
myFlyer.src = NEWC_Fundraiser_sq;

element.appendChild(myFlyer);


    return element;
}

document.body.appendChild(component());

