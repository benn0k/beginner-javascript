function disemvowel(str) {
  //Split the string into an Array
 const splitString =  str.split('');
 console.log(splitString);
 // set increment for loop
 let i = 0;
  while (i < splitString.length) {
    
    if (splitString[i] === 'a'  || splitString[i] === 'A'){
      
      splitString.splice(i, 1);
    } else if (splitString[i] === 'e'  || splitString[i] === 'E'){
      
      splitString.splice(i, 1); 
    } else if (splitString[i] === 'i'  || splitString[i] === 'I'){
     
      splitString.splice(i, 1); 
    } else if (splitString[i] === 'o'  || splitString[i] === 'O'){
     
      splitString.splice(i, 1); 
    } else if (splitString[i] === 'u'  || splitString[i] === 'U'){
      
      splitString.splice(i, 1); 
    }
    i++;
  }
  return splitString.join("");
}

