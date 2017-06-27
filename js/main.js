/*
this is the function called on click of the input box
*/
function help(id){
	//document.getElementById("helptext").innerHTML=id;
    if(id == "name"){
    	document.getElementById("helptext").innerHTML="Enter Your NAME";
    }
    if(id == "email"){
    	document.getElementById("helptext").innerHTML="Your EMAIL Address";
    }
    if(id == "age"){
    	document.getElementById("helptext").innerHTML="Please,Enter Your AGE";
    }
}

/*var bdy=document.querySelector("body");
bdy.addEventListener("click", function(){
    //alert();
    document.getElementById("helptext").innerHTML="Helpful Notes will appear here";
});*/