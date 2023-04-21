import { list } from "./list.js";


export let dataList =[];
let x = list.replace(/"(.+?)"/, $1) 
let myList = list.map((elem) =>`{${elem}}` );
console.log(myList);
for(let i = 0; i <= list.length; i++){
	;
	dataList.push(x);
	
	console.log(typeof(x))
	dataList.push(x);
	console.log(x);
}



console.log(dataList);