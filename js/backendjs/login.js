
  //function for displaying alert with a message box that appears for on second 
  function sadza(x,y,z){
    $('#mydivtag').html('<div class="alert" id="a"><span class="closebtn" onclick="this.parentElement.style.display=`none`;" id="c">&times;</span>'+y+'</div>');
    setTimeout(function(){
    document.getElementById("c").click(); 
     },z); 
    document.getElementById("a").style.background= x;
     
  }
//login takes values from text boxes uses xhttp to post to the web servicesfor authentication  
  function Login(){
  var id = document.getElementById("id").value;
  var password=document.getElementById("pass").value;
  ////validation of data starts here///////////////////////////////////////////////////////////////////

  if (id==""|| password=="") {
    //validating ID
    if (id.length<1) {
    //code for alert message box
    $('#mydivtag').html('<div class="alert" id="a"><span class="closebtn" onclick="this.parentElement.style.display=`none`;" id="c">&times;</span>ID is required! </div>')
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
 else if (password<1) {
    //code for alert message box
    $('#mydivtag').html('<div class="alert" id="a"><span class="closebtn" onclick="this.parentElement.style.display=`none`;" id="c">&times;</span>Password is required! </div>')
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
 

  }else{

  //appending data to form to send to webservice
  var data= new FormData();
  data.append("uid",id);
  data.append("password",password);
     
    

  var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
       if(this.responseText=="granted"){
        sadza('green','You have succefully logged in',3000);
       }
       else{ sadza('red','You have failed to log in check your credentials and try again',3000); }
        }
    
};
xhttp.open("POST", "https://sbcomunicator02.000webhostapp.com/buse-canteen/canteen/login.php",true);
xhttp.send(data);

}
}
