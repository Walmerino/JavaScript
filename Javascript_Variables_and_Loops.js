//Javascript

//Declaring variables:

// In JS we can declare variables in three ways: using let, var and constant.

let x = 1;
let y = 'bees';

var array = [1, 'bees', 'flower'];

constant = 'Can not be changed';

//throughout the JS data types I've shown numbers, strings and arrays.

//There are also the booleans. That are values that compare to true and false.

//The result here shuld be false

boolRes = x == y; 

console.log('boolRes = x == y;', boolRes); 

//lets compare the variable x to the elements of the array

//Loops: The for loop

for(cont=0; cont < array.length; cont ++){

	console.log(array[cont], 'console.log(array[cont])')
	console.log(x, 'x = 1')
	let boolarray = x == array[cont];
	console.log(boolarray, 'let boolarray = x == array[cont];')
};

//We can also use the for loop with in: for x in.

for(i in array){

	console.log('Using for in ',i);
};

//The while and do while loops

//The while loop will count to 3 and quit

cnt = 0;

while(cnt < 3){

	console.log(array[cnt], 'typeof', typeof(array[cnt]));
	cnt++;
};

//The Do While loop will count to 4 before leaving, then the last element will be undefined.

do{

	console.log(array[cnt], 'typeof', typeof(array[cnt]));
	cnt++;

}while(cnt < 3);



//Conditionals:

//IF statement

if(x != y){

	console.log('x', x, 'is different from (!=) y', y);
};

x = 2;
y = 1;
z = 2;

console.log('x = 2, y = 1, z = 2')

if(x === z){

	console.log('x = y')
};


