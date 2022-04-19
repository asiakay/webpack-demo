import _ from 'lodash';
import './style.css';
import NEWC_Fundraiser_sq from './NEWC_Fundraiser_sq.png';
import Data from './data.xml';
import Notes from './data.csv';

function component(){
    const element = document.createElement('div');

    // lodash, now importedby this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

      // Add the image to our existing div.
const myFlyer = new Image();
myFlyer.src = NEWC_Fundraiser_sq;

element.appendChild(myFlyer);

console.log(Data);
console.log(Notes);



    return element;
}

document.body.appendChild(component());

