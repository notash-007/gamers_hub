function validate() {
    var result = "";
    result+= validateName();
    result+= validateEmail();
    result+= validatePassword();

    if (result == "") return true;

    alert ("Validation result:\n\n" + result);
    return false;
 
}


function validateName() {
    var name = document.getElementsByName("name")[0].value:
    if (name.length <= 6)
        return "Username should be at least 6 characters.\n";
    return "";
} 


function validateEmail( ){
    var email = valueOf("email");
    if (email.indexOf('@') == -1)
        return "Enter a valid email address.\n";
    return "";
} 

function validatePassword() {
    var password = valueOf ("password");
    var retype = valueOf ("retypepassword");

    if (password.length <= 6)
        return "Password should be at least 6 characters.\n";

    if (password != retype)
        return "Passwords do not match.\n";

    return "";

}