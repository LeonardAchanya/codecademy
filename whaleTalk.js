let input = "a whale of a deal!";
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for ( let i=0; i < input.length; i++){
  for ( let j = 0; j < vowels.length; j ++){
    // console.log('j is ' + j);
    if(input[i]===vowels[j]){
      // console.log('true ' + input[i])
      resultArray.push(input[i]);
      if( input[i]==='e' || input[i]==='u'){
      resultArray.push(input[i]);
      }
    }
  }
}

console.log(resultArray.join('').toUpperCase());