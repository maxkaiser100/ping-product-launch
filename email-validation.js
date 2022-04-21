var alertText = document.getElementById("alertText");
var emailBox = document.getElementById("emailBox");
var emailBoxBorder = document.getElementById("emailEntry");

function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat)) {
       
        document.form1.text1.focus();
        alertText.style.display = "none";
        emailBoxBorder.style.borderColor = "hsl(223, 100%, 88%)";
        return true;
    } else {
        alertText.style.display = "block";
        emailBoxBorder.style.borderColor = "red";
        
        document.form1.text1.focus();
        return false;
    }
}