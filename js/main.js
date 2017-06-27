/*
this is the function called on click of the input box
*/
var age_helper = "Please,Enter Your AGE";
var name_helper = "Enter Your NAME";
var email_helper = "Your EMAIL Address";
function help(id){
	//document.getElementById("helptext").innerHTML=id;
    if(id == "name"){
    	document.getElementById("helptext").innerHTML= name_helper;
        //name_helper variable is passed a closure
    }
    if(id == "email"){
    	document.getElementById("helptext").innerHTML= email_helper;
        //email_helper variable is passed as closure
    }
    if(id == "age"){
        document.getElementById("helptext").innerHTML= age_helper;
        //age_helper variable is passed as closure here
    }
}

/*var bdy=document.querySelector("body");
bdy.addEventListener("click", function(){
    //alert();
    document.getElementById("helptext").innerHTML="Helpful Notes will appear here";
});*/