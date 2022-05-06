function clickp1(){
	document.getElementById("p1").style.color='red';
	
	alert("1");
}
function clickp2(){
	var date = new Date();
	document.getElementById("tittle").innerHTML=date.getFullYear() +"-"+ (date.getMonth()+1)+"-"+date.getDate();
	alert("2");
}
function clickp3(){
	document.getElementById("p3").classList.add("fn-active");
	console.log(document.getElementById("p3").classList);
	alert("3");
}
function clickp4(){
	var parent=document.getElementById("ul");
	var child=document.getElementById("p8");
	parent.removeChild(child);
	alert("4");

}
function clickp5(){
	window.open('https://www.taobao.com/');
	alert("5");
}
function clickp6(){
	var child=document.createElement("li");
	var text=document.createTextNode("p9");
	child.appendChild(text);
	var ele=document.getElementById("ul");
	ele.appendChild(child);
	alert("6");
}
function clickp7(){
	document.getElementById("first").style.width=screen.availWidth;
	alert("7");
}
function clickp8(){
	alert("8");
}
