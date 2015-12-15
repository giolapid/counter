
function question(name, start){
	var x = 3;	
	var text = "";
	if(isNaN(name) == false){
		alert("Please use letters for your name");
		location.reload();
	}
	if(start < 5 || start > 100){
		alert("Please use a number between 5 to 100");
		location.reload();
	}
	else{ 
		for (i = 0; i < start; i++) {
			text += i + '<br>';
		}
	}
	document.getElementById("intro").innerHTML= "Hello " + name;
	document.getElementById("append").innerHTML= text;
};