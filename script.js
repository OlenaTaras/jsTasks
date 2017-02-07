
//Завдання 2

	var rate=10;
	var a = document.getElementById('kr').value; //bad name for id
	var b = document.getElementById('y').value; //bad name for id


	function kreditFinal(a,b){            //Where is third parameter?
		return((a*rate*(b+1))/(24*100))
		};

	function text(){ //no need for this function
		alert("Ви переплачуєте " + kreditFinal(a,b) + " гривень"); //alert is not very good for send msg to user
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

  
 function condition(f,s) { // where is this - Во всех остальных случаях возвращать NaN.
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
