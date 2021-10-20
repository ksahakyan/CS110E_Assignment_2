

let width=1;
let h_tr=2;
let h_rec=1;
let base=1;



let S_tr = (base * h_tr)/2;
let S_rec = width * h_rec;
 
if (S_tr == S_rec){
	console.log("The areas are equal")
}
else if( S_tr > S_rec){
	console.log("The triangle has a bigger area")
}
else {
	console.log("The rectangle has a bigger area")
}

