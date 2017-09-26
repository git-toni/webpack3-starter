import _ from 'lodash';
import {say} from './utils'

function component() {
//  var element = document.createElement('div');
//
//  // Lodash, currently included via a script, is required for this line to work
//  element.innerHTML = _.join(['Aloha', 'webpack'], ' ');
//
//  return element;
}
function run(){
  say('Aloha therrrrr!')
}
run()


//
//document.body.appendChild(component());
//console.log('aloooooooo')

if(module.hot){
  module.hot.accept(run)
}
