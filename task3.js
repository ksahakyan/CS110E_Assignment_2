
let x1=2;
let x2=3;
let y1=1;
let y2=2;
// if statement about negative cordinates;
if ((x1 | x2 | y1| y2)<0){
	console.log("Please input numbers greater or equal to 0")
}
else{
	// formula= (x2-x1)^2 + (y2-y1)^2;

	let length = Math.sqrt(Math.pow((x2-x1), 2 ) + Math.pow((y2-y1), 2));

	console.log(length)
}
