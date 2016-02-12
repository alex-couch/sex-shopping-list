function validateForm(){
    var name = document.forms['login']['name'].value;
    var pass = document.forms['login']['password'].value;
    var item = document.forms['login']['item'].value;
    if(name == null || name == ""){
        alert("Name must be filled out1");
        return false;
    }else if(pass == null || name == ""){
        alert("Password must be filled out!");
        return false;
    }
}