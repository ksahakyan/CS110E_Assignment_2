



let a=10;
let b=20;
let c=5;

 let our_equation = "a*(x*x) +b*x +c = 0"

let dis = b*b - 4*a*c;

if (a==0){
	let x = -c/b
	console.log("X=" + x)
}


 if (dis==0 && a!==0){
	let result= -b/2*a
	console.log("X =" + result)
	
 }
 if (dis>0 && a!== 0 ){
	 let x1 = -b + Math.sqrt(dis)/2*a
	 let x2 = -b - Math.sqrt(dis)/2*a

	 console.log("X1 =" + x1)
	
	console.log("X2 =" + x2)
	
 }
 if (dis<0){

	console.log("Unsolvable")
 }
 


