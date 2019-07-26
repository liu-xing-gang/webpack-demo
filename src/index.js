// import _ from 'lodash'
import './style.css'
import Icon from './icon.png'
import Data from './data.xml'
import printMe from './print.js'
import { cube } from './math.js'


function component(){
    var element = document.createElement('div');
    // element.innerHTML = _.join(['Hello ', 'webpack'], '');
    element.classList.add('hello');

    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    var btn = document.createElement('button');
    btn.innerHTML = 'Click and check thr console';
    btn.onclick = printMe;

    var el = document.createElement('pre');
    el.innerHTML = ['Hello webpack!', '5 cubed is equal to ' + cube(5)].join('\n\n');

    element.appendChild(btn);

    console.log(Data)

    return el;
}

// document.body.append(component());
// 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
let element = component();
document.body.append(element)

if(module.hot){
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        printMe();
        document.removeChild(element);
        element = component();
        document.body.appendChild(element);
    })
}