let username = document.getElementById("username");
let password = document.getElementById("password");
let flag = 1;

function validateForm(){
    if(username.value == ""){
        // console.log("UserName is Empty");
        // return false;
        document.getElementById("usererror").innerHTML = "user name is empty";
        document.getElementById("usererror").style.display = "block";
        flag = 0;
    }else if(username.value.length < 3){
        document.getElementById("usererror").innerHTML = "require minimum three charactor";
        document.getElementById("usererror").style.display = "block";
        flag = 0;
    }else{
        document.getElementById("passerror").innerHTML = " ";
        alert("Thank You for Joining Us");
        flag = 1;
    }


    if(password.value == ""){
        document.getElementById("passerror").innerHTML = "Password is empty";
        document.getElementById("passerror").style.display = "block";
        flag = 0;
    }else{
        document.getElementById("passeror").innerHTML = "";
        alert("Thank You for Joining Us");
        flag = 1;
    }
 if(flag){
    return true;
 }else{
    return false;
 }
    
//  let val = validateForm();
//  if(val == true){
//     alert("username is" + username.value + "Password id "+ "Thank You");
//  }
}