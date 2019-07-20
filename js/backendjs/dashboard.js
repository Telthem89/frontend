function displayMenu(){


var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange=function(){
	if(this.readyState==4 && this.status==200){
		alert("its oky ");


	}



};
xhttp.open("POST","https://sbcomunicator02.000webhostapp.com/buse-canteen/canteen/getMenu.php",true);
xhttp.send();

}