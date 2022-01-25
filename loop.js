const spellingWord = 'hippopotamus';

// Write your code below
for (const word of spellingWord ) {
  console.log(word)
}

const nums = [1, 2, 3];
 
for (let i = nums.length - 1; i >= 0; i--) {
  console.log(nums[i]);
}
 
console.log('Time is up!');

// The continue statement is used to skip one iteration of the loop. For example:

const strangeBirds = ['Shoebill', 'Cockatrice', 'Basan', 'Cow', 'Terrorbird', 'Parotia', 'Kakapo'];
 
for (const bird of strangeBirds) {
  if  (bird === 'Cow'){
    continue;
  }
  console.log(bird);
}

// The break statement can be used to jump out of a loop. For example:

const strangeBirds = ['Shoebill', 'Cockatrice', 'Basan', 'Terrorbird','Parotia','Kakapo'];
 
for (const bird of strangeBirds) {
  if (bird === 'Basan'){ 
    break; 
  }
  console.log(bird);
}


// for loop vs for…of loop
// for loop 
const hobbies = ['singing', 'eating', 'quidditch', 'writing'];
 
for (let i = 0; i < hobbies.length; i++) {
  console.log(`I enjoy ${hobbies[i]}.`);
}
// for…of loop
const hobbies = ['singing', 'eating', 'quidditch', 'writing'];
 
for (const hobby of hobbies) {
  console.log(`I enjoy ${hobby}.`);
}