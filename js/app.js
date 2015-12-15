
function question(name, start, end, inc){
	var x = parseInt(inc);	
	var st = parseInt(start);
	var en = parseInt(end);
	var text = "";

	//Checks name if it is letters
	if(!isNaN(name)){
		alert("Please write your name");
	}

	//checks if starting and ending numbers are between 5 and 100
	if((st < 5 || st>100)||(en < 5 || en >100)){
		alert("Please choose a number between 5 and 100");
	}

	//checks if end<st
	if(en < st){
		alert("I CAN'T COUNT BACKWARDS");
	}

	//checks if we can increment it
	if((en - st) < x){
		alert("INCREMENT CAN'T BE GREATER THAN THE DIFFERENCE");
	}
	//logic for counting
	else{
		var iter = 1;
		while(st < en){
			text += '<p style="color:red;">iteration # ' + iter + '</p> <p style="color:yellow;">==============================</p><p style="color=red;">' + st + '</p><br>';
			iter++;
			st += x;
		}
	}
	document.getElementById('intro').innerHTML="Hello " + name + ",";
	document.getElementById('append').innerHTML=text;
};