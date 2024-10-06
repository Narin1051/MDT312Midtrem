window.onload = pageLoad;
function pageLoad(){
	let forms = document.getElementById("myRegister");
    forms.onsubmit = validateForm;
    // forms["firstname"].value = "john";
    // forms["lastname"].value = "doe";
    // forms["bday"].value = "2000-07-07";
    // forms["gender"].value = "male";
    // forms["username"].value = "ba";
    // forms["password"][0].value = "password5";
    // forms["password"][1].value = "password5";
    // forms["email"].value = "john@gmail.com";
}

function validateForm() {
    let forms = document.forms["myRegister"];
    let errorMsg = document.getElementById("errormsg");

    if (forms["firstname"].value == "" || 
        forms["lastname"].value == "" ||
        forms["gender"].value == ""  ||
        forms["bday"].value == ""  ||
        forms["email"].value == ""  ||
        forms["username"].value == ""  ||
        forms["password"][0].value == "" ||
        forms["password"][1].value == "")
    {
        errorMsg.innerHTML = "Please fill all forms."
        return false;
    }
    if (forms["password"][0].value != forms["password"][1].value ){
        errorMsg.innerHTML = "Password doesn't match."
        return false;
    }
    
}
