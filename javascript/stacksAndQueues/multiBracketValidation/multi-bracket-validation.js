'use strict';

const Stack = require('../stack');

module.exports = function isValid(str){
  const stack = new Stack();
  for(let i = 0; i < str.length; i++){
    switch(str[i]){
    case '(':
      stack.push(str[i]);
      break;
    case '{':
      stack.push(str[i]);
      break;
    case '[':
      stack.push(str[i]);
      break;
    case ')':
      try{
        if(stack.peek() !== '(') return false;
        stack.pop();
      } catch(err){
        return false;
      }
      break;
    case '}':
      try{
        if(stack.peek() !== '{') return false;
        stack.pop();
      } catch(err){
        return false;
      }
      break;
    case ']':
      try{
        if(stack.peek() !== '[') return false;
        stack.pop();
      } catch(err){
        return false;
      }
      break;
    }
  }
  if(!stack.isEmpty()){
    return false;
  }
  return true;
};
