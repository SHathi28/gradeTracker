//SWITCHES THE SIGN-IN PAGE TO CREATE ACCOUNT PAGE
function signinToCreate() {
	document.getElementById("title").innerHTML = "Create Account";
	document.getElementById("sign").setAttribute("hidden", "hidden");
	document.getElementById("create").removeAttribute("hidden");

	document.getElementById("signInUsername").setAttribute("placeholder", "Email");
	document.getElementById("signInPassword").setAttribute("placeholder", "Password");
}

//SWITCHES THE CREATE ACCOUNT PAGE TO THE SIGN-IN PAGE
function createToSignIn() {
	document.getElementById("title").innerHTML = "Sign-In";
	document.getElementById("create").setAttribute("hidden", "hidden");
	document.getElementById("sign").removeAttribute("hidden");
	document.getElementById("createName").setAttribute("placeholder", "Name");
	document.getElementById("createUsername").setAttribute("placeholder", "Email");
	document.getElementById("createPassword").setAttribute("placeholder", "Password");
}

//CODE FOR SIGNING THE USER INTO THE ACCOUNT
function signIn() {
	var ret = true;
	var usernameFlag = document.getElementById("signInUsername");
	var passwordFlag = document.getElementById("signInPassword");
	if (usernameFlag.value.length == 0) {
		document.getElementById("signInUsername").setAttribute("placeholder", "Enter Valid Username");
		ret = false;
	}

	if (passwordFlag.value.length == 0) {
		document.getElementById("signInPassword").setAttribute("placeholder", "Enter Valid Password");
		ret = false;
	}

	var email = usernameFlag.value;
	var password = passwordFlag.value;
	
	var temp = email.substring(0, email.lastIndexOf("@"));
	console.log("Temp: " + temp);
		
	window.localStorage.setItem("login", temp);

	console.log(email);
	console.log(password);

	//CODE TO CHECK WITH THE FIREBASE DATABASE THAT THE USER HAS AN ACCOUNT
	//IF THE USER HAS AN ACCOUNT THE PAGE SIGN-S IN OTHERWISE DOES NOTHING
	firebase.auth().signInWithEmailAndPassword(email, password).then(function (result) {
		console.log(result);
		window.location.href = 'main.html';
	}).catch(function (error) {
		document.getElementById("title").innerHTML = "Invalid Username/Password";
		var errorCode = error.code;
		var errorMessage = error.message;
		console.log(errorCode);
		console.log(errorMessage);
		console.log("Error");
		return;
	});
}

//CODE FOR ALLOWING THE USER TO CREATE AN ACCOUNT
function createAccount() {
	var ret = true;
	var nameFlage = document.getElementById("createName");
	var usernameFlag = document.getElementById("createUsername");
	var passwordFlag = document.getElementById("createPassword");

	if (nameFlage.value.length == 0) {
		document.getElementById("createName").setAttribute("placeholder", "Enter Valid Name");
		ret = false;
	}

	if (usernameFlag.value.length == 0) {
		document.getElementById("createUsername").setAttribute("placeholder", "Enter Valid Username");
		ret = false;
	}

	if (passwordFlag.value.length == 0) {
		document.getElementById("createPassword").setAttribute("placeholder", "Enter Valid Password");
		ret = false;
	}

	var username = usernameFlag.value;
	var password = passwordFlag.value;
	
	var temp = username.substring(0, username.lastIndexOf("@"));
	console.log("Temp: " + temp);
	
	window.localStorage.setItem("login", temp);

	//CODE TO ALLOW THE USER TO CREATE AN ACCOUNT AND PUT IT INTO THE FIREBASE DATABASE
	firebase.auth().createUserWithEmailAndPassword(username, password).then(function (result) {
		firebase.auth().onAuthStateChanged(function (user) {
			if (user) {
				// User is signed in.
				user = firebase.auth().currentUser;
				var currUser = firebase.auth().currentUser;
				currUser.updateProfile({
					displayName: name
				}).then(function () {
					// Update successful.
					console.log("Update successful");
					window.location.href = 'main.html';
				}).catch(function (error) {
					// An error happened.
					console.log("error occured");
				});
			} else {
				// No user is signed in.
			}
		});
	}).catch(function (error) {
		var errorCode = error.code;
		var errorMessage = error.message;
		console.log(errorCode);
		console.log(errorMessage);
		console.log("Error");
		return;
	});
}