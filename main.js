// First, create three new variables, `name` (string), `rank` (string) and `age` (number). These will change later, but for now set them to whatever you like.

// Below that you will need a series of conditionals that console log something different, depending on these three variables.

// If our recruit is less than 18, log, 'You are too young for the military!’.
// If our recruit’s name is ‘Rugen' and has a rank of ‘Count', log, ‘My name is Inigo Montoya, you killed my father, prepare to die’.
// If our recruit has the rank of “Captian”, log, "Aye Aye Captain <NAME>”.
// If our recruit has the rank of “Private” and is over 40, log, "What have you been doing with your life <NAME>?"
// For any other condition, log, 'Hello <RANK> <NAME>, I cannot wait to celebrate your <AGE + 1> th birthday next year!'


var name = 'Pat';
var rank = 'Captain';
var age = 18;

if (age < 18) {
    
console.log('You are too young for the military!');

}

else if (name === 'Rugen' && rank === 'Count') {
    
console.log('My name is Inigo Montoya, you killed my father, prepare to die!');

}

else if (rank === 'Captain') { 
    
console.log( `Aye Aye Captain ${name}!`);

}

else if ( rank === 'Private' && age > 40) {

console.log(`What have you been doing with your life ${name}?`);

}

else {

console.log(`Hello ${rank} ${name}, I cannot wait to celebrate your ${ age + 1}th birthday next year!`)

}
