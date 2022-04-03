





function date(){
    alert(new Date())
}

function changeimg(){
	document.getElementById('lin').src = "https://i04piccdn.sogoucdn.com/88b69e4c6b69b2d8"
}



function cont(){
	document.getElementById('n1').innerHTML = 'this is a new content'
}


function func()
{
    document.getElementById("text").style.backgroundColor="red";
    document.getElementById("text").style.fontFamily="Arial";
    document.getElementById("text").style.textAlign= "center";
}

function press(){
	alert('this is an alert')
}









function conv(){
var x = (20-32)*5/9
document.getElementById('ctof').innerHTML = "the resul is "+x+"celsius"
}




function sum(){
var a = parseFloat(prompt('enter the first num'))
var b = parseFloat(prompt('enter the second num'))
alert(a+b)
}



function call(){
	var a = prompt('enter your first name')
	var b = prompt('enter your last name')
	alert('Nice to meet you '+a+' '+b)

}