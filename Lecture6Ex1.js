let x = 4; 
var y = 'trouble';
const PI = 3.1415;

function foo(){
   y = 17;
   var x = 15;

   {
	 var x = 'hello';

	 (x == "hello") ? x="bye" : x="hello";

	 console.log( x + ' ' + PI);
	}

	// PI = 14.2;
	console.log( x + ' ' + y + ' ' + PI);
}

function bar() {

	let y = 'goodbye';

	{
		let y = 13;

		console.log( y + ' ' + x);

	}

	console.log( y + ' ' + x);

}


bar();
foo();
console.log( x + ' ' + y);


// note: window.location.reload() is the method to reset the environment.


