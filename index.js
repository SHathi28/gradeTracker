function signinToCreate() {
	document.getElementById("title").innerHTML = "Create Account";
	document.getElementById("sign").setAttribute("hidden", "hidden");
	document.getElementById("create").removeAttribute("hidden");
	
	document.getElementById("signInUsername").setAttribute("placeholder", "Email");
	document.getElementById("signInPassword").setAttribute("placeholder", "Password");
}

function createToSignIn() {
	document.getElementById("title").innerHTML = "Sign-In";
	document.getElementById("create").setAttribute("hidden", "hidden");
	document.getElementById("sign").removeAttribute("hidden");
	document.getElementById("createName").setAttribute("placeholder", "Name");
	document.getElementById("createUsername").setAttribute("placeholder", "Email");
	document.getElementById("createPassword").setAttribute("placeholder", "Password");
}

function signIn() {
	var ret = true;
	var usernameFlag = document.getElementById("signInUsername");
	var passwordFlag = document.getElementById("signInPassword");
	if(usernameFlag.value.length == 0) {
		document.getElementById("signInUsername").setAttribute("placeholder", "Enter Valid Username");
		ret = false;
	}
	
	if(passwordFlag.value.length == 0) {
		document.getElementById("signInPassword").setAttribute("placeholder", "Enter Valid Password");
		ret = false;
	}
	
	if(ret != false) {
		window.location.href="../main.html"
	}
	
}

function createAccount() {
	var ret = true;
	var nameFlage = document.getElementById("createName");
	var usernameFlag = document.getElementById("createUsername");
	var passwordFlag = document.getElementById("createPassword");
	
	if(nameFlage.value.length == 0) {
		document.getElementById("createName").setAttribute("placeholder", "Enter Valid Name");
		ret = false;
	}
	
	if(usernameFlag.value.length == 0) {
		document.getElementById("createUsername").setAttribute("placeholder", "Enter Valid Username");
		ret = false;
	}
	
	if(passwordFlag.value.length == 0) {
		document.getElementById("createPassword").setAttribute("placeholder", "Enter Valid Password");
		ret = false;
	}
	
	if(ret != false) {
		window.location.href="../main.html"
	}
	
}