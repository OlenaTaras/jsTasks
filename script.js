
//Завдання 2


	var a = document.getElementById('kredit').value;
	var b = document.getElementById('year').value;
	var rate = document.getElementById('rates').value;

	function kreditFinal(a,b,rate){
		return((a*rate*(b+1))/(24*100))
		};

	function text(){
		confirm("Ви переплачуєте " + kreditFinal(a,b,rate) + " гривень")
	};


//Завдання 3

	var x = document.getElementById('first').value;
	var y = document.getElementById('second').value;

	function summatask2(x,y){
		rezult = x-y>0 ? x-y : y-x,
		alert(rezult)
	};
	function print(){
		alert(summa(x,y))
	};

//Завдання 1

	var f = +document.getElementById('numberOne').value;
	var s = +document.getElementById('numberTwo').value;




function summatask1(f,s){
if(typeof f!=='number'&&typeof s!=='number'){
	var c=Math.sqrt(-1)
	alert(c)
}else {
	var rezult= +f + +s
	alert(rezult)}
};

