
  //show password function
  function myFunction() {
  var x = document.getElementById("pass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
  var x = document.getElementById("conpass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

//function for displaying alert with a message box that appears for on second 
  function sadza(x,y,z){
    $('#mydivtag').html('<div class="alert" id="a"><span class="closebtn" onclick="this.parentElement.style.display=`none`;" id="c">&times;</span>'+y+'</div>');
    setTimeout(function(){
    document.getElementById("c").click(); 
     },z); 
    document.getElementById("a").style.background= x;
     
  }
  


/*fuction create takes the values from textbox and append the to a form data and post it to a web service via xhttp when button create account is clicked*/
  function create(){



  console.log("the function has been called");
	var id = document.getElementById("id").value;
	var fname=document.getElementById("fname").value;
	var lname=document.getElementById("lname").value;
	var pass=document.getElementById("pass").value;
	var phone=document.getElementById("phone").value;
	var conpass=document.getElementById("conpass").value;

  console.log("variales are: "+id+"  "+fname+"  "+lname+"  "+pass+"  "+phone+"  "+conpass);

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //validation of data here ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (id==""|| fname==""||lname==""||pass==""||phone==""||conpass==""||id.length<4||phone.length<10||pass.length<6||pass!==conpass) {
  //id validation mostly using a javascript library called jquery
  if (id.length<4) {
    //code for alert message box
    $('#mydivtag').html('<div class="alert" id="a"><span class="closebtn" onclick="this.parentElement.style.display=`none`;" id="c">&times;</span>ID length is required greater than 4! </div>')
        $('#id').attr("style","border-color:red;");
      document.getElementById("a").style.background= 'red';
      //putting focus on the intended textbox
      $('#id').focus();
      //fuction to close the message box and change textbox color
      $('#id').on('input',function(){
      document.getElementById("c").click();
      $('#id').attr("style","border-color:lightblue;");

   });
          
  }
else if (fname=="") {
    //code for alert message box
    $('#mydivtag').html('<div class="alert" id="a"><span class="closebtn" onclick="this.parentElement.style.display=`none`;" id="c">&times;</span>Firstname is required! </div>')
        $('#fname').attr("style","border-color:red;");
      document.getElementById("a").style.background= 'red';
      //putting focus on the intended textbox
      $('#fname').focus();
      //fuction to close the message box and change textbox color
      $('#fname').on('input',function(){
      document.getElementById("c").click();
      $('#fname').attr("style","border-color:lightblue;");
   });   
          
  }
  else if (lname=="") {
    //code for alert message box
    $('#mydivtag').html('<div class="alert" id="a"><span class="closebtn" onclick="this.parentElement.style.display=`none`;" id="c">&times;</span>Lastname is required! </div>')
        $('#lname').attr("style","border-color:red;");
      document.getElementById("a").style.background= 'red';
      //putting focus on the intended textbox
      $('#lname').focus();
      //fuction to close the message box and change textbox color
      $('#lname').on('input',function(){
      document.getElementById("c").click();
      $('#lname').attr("style","border-color:lightblue;");
   });   
          
  }
  else if (phone.length<10) {
    //code for alert message box
    $('#mydivtag').html('<div class="alert" id="a"><span class="closebtn" onclick="this.parentElement.style.display=`none`;" id="c">&times;</span>Phone number should not have less than ten digits! </div>')
        $('#phone').attr("style","border-color:red;");
      document.getElementById("a").style.background= 'red';
      //putting focus on the intended textbox
      $('#phone').focus();
      //fuction to close the message box and change textbox color
      $('#phone').on('input',function(){
      document.getElementById("c").click();
      $('#phone').attr("style","border-color:lightblue;");
   });   
          
  }
  else if (pass.length<6) {
    //code for alert message box
    $('#mydivtag').html('<div class="alert" id="a"><span class="closebtn" onclick="this.parentElement.style.display=`none`;" id="c">&times;</span>Minimum password length is 6 characters! </div>')
        $('#pass').attr("style","border-color:red;");
      document.getElementById("a").style.background= 'red';
      //putting focus on the intended textbox
      $('#pass').focus();
      //fuction to close the message box and change textbox color
      $('#pass').on('input',function(){
      document.getElementById("c").click();
      $('#pass').attr("style","border-color:lightblue;");
   });   
          
  }
  else if (pass!==conpass) {
    //code for alert message box
    $('#mydivtag').html('<div class="alert" id="a"><span class="closebtn" onclick="this.parentElement.style.display=`none`;" id="c">&times;</span>Password does not match! </div>');

        $('#conpass').attr("style","border-color:red;");
      document.getElementById("a").style.background= 'red';
      //putting focus on the intended textbox
      $('#conpass').focus();
      //fuction to close the message box and change textbox color
      $('#conpass').on('input',function(){
      document.getElementById("c").click();
      $('#conpass').attr("style","border-color:lightblue;");
   });   
          

  }
  


}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////validation ends here////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
else{


  //appending data to form

      var data= new FormData();
	   data.append("id",id);
     data.append("firstname",fname);
     data.append("lastname",lname);
     data.append("phone",phone);
     
     data.append("password",pass);
     
      
//ajax for send a post form data to webservice

	var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200 ) {

      if(this.responseText=="saved"){
         // calling the success alert function which takes parameters color and string for the message to be displayed 

         


      sadza('green','Your Account has been created sucessfully',2000);
      window.location.href = "index.html";

     }
     
       
      
    }
    else{
      sadza('orange','Failed to create Your account due to connection error!',2000);
    }
};
xhttp.open("POST", "https://sbcomunicator02.000webhostapp.com/buse-canteen/canteen/create.php", true);
xhttp.send(data);
}

}

