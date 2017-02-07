
//Завдання 2

	var rate=10;
	var a = document.getElementById('kr').value;
	var b = document.getElementById('y').value;


	function kreditFinal(a,b){
		return((a*rate*(b+1))/(24*100))
		};

	function text(){
		alert("Ви переплачуєте " + kreditFinal(a,b) + " гривень");
	};


//Завдання 3

	var x = document.getElementById('first').value;
	var y = document.getElementById('second').value;
	function summa(x,y){
		rezult = x-y>0 ? x-y : y-x,
		alert(rezult)
	};
	function print(){
		alert(summa(x,y))
	};

//Завдання 1

	var f = +document.getElementById('numberOne').value;
	var s = +document.getElementById('numberTwo').value;


var c;
function summanext(p,q) {
  c=+p + +q
 alert(c)
  };

  
 function condition(f,s) {
if(typeof f!=='number'){ 
    summanext()
   } 
else if(typeof s!=='number'){
     summanext()
}

   else {
 summanext(f,s)
}
};
