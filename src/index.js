import _ from 'lodash'
import './style.css'
import Icon from './icon.png'
import Data from './data.xml'
import printMe from './print.js'


function component(){
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello ', 'webpack'], '');
    element.classList.add('hello');

    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    var btn = document.createElement('button');
    btn.innerHTML = 'Click and check thr console';
    btn.onclick = printMe;
    element.appendChild(btn);

    console.log(Data)

    return element;
}

document.body.append(component());