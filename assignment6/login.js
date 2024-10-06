window.onload = loginLoad;
function loginLoad(){
	let forms = document.getElementById("myLogin");
    forms.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	let queryString = window.location.search;
	let urlParams = new URLSearchParams(queryString);
	let username = urlParams.get('username');
	let password = urlParams.get('password');

	let forms = document.forms["myLogin"];
	let inputUser = forms["username"].value;
	let inputPass = forms["password"].value;

	if (inputUser != username )
	{
		alert("Wrong Username.");
		return false;
	}

	if (inputPass != password)
	{
		alert("Wrong password.");
		return false;
	}

	alert("Login successfull.");
	return false;
}

