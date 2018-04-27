var database = firebase.database();
var email = window.localStorage.getItem("login");

//TODO: LOADS THE USER DATA FROM FIREBASE AND DSIPLAYS WHEN THEY LOG IN
function loadData() {
	console.log(email);
	//RETRIEVES THE USER'S PROJECT GRADES
	firebase.database().ref(email + "projects/").once('value').then(function (snapshot) {
		var p1In = snapshot.val().project1Input;
		var p2In = snapshot.val().project2Input;
		var p3In = snapshot.val().project3Input;
		var p4In = snapshot.val().project4Input;
		var p5In = snapshot.val().project5Input;
		var p6In = snapshot.val().project6Input;

		var p1Tot = snapshot.val().project1Total;
		var p2Tot = snapshot.val().project2Total;
		var p3Tot = snapshot.val().project3Total;
		var p4Tot = snapshot.val().project4Total;
		var p5Tot = snapshot.val().project5Total;
		var p6Tot = snapshot.val().project6Total;

		var ovrRec = snapshot.val().projectInput;
		var ovrTot = snapshot.val().projectTotal;

		document.getElementById("project1input").value = p1In;
		document.getElementById("project2input").value = p2In;
		document.getElementById("project3input").value = p3In;
		document.getElementById("project4input").value = p4In;
		document.getElementById("project5input").value = p5In;
		document.getElementById("project6input").value = p6In;

		document.getElementById("project1total").value = p1Tot;
		document.getElementById("project2total").value = p2Tot;
		document.getElementById("project3total").value = p3Tot;
		document.getElementById("project4total").value = p4Tot;
		document.getElementById("project5total").value = p5Tot;
		document.getElementById("project6total").value = p6Tot;

		document.getElementById("projectsinput").value = ovrRec;
		document.getElementById("projecttotal").value = ovrTot;
	});

	//RETRIEVES THE USER'S EXAM GRADES
	firebase.database().ref(email + "exams/").once('value').then(function (snapshot) {
		var midIn = snapshot.val().midtermInput;
		var midTot = snapshot.val().midtermTotal;

		var finIn = snapshot.val().finalInput;
		var finTot = snapshot.val().finalTotal;

		var examIn = snapshot.val().examInput;
		var examTot = snapshot.val().examTotal;

		document.getElementById("midInput").value = midIn;
		document.getElementById("midTotal").value = midTot;
		document.getElementById("finInput").value = finIn;
		document.getElementById("finTotal").value = finTot;
		document.getElementById("examInput").value = examIn;
		document.getElementById("examTotal").value = examTot;
	});

	//RETRIEVES THE USER'S ATTENDANCE GRADES
	firebase.database().ref(email + "attendance/").once('value').then(function (snapshot) {
		var classIn = snapshot.val().classInput;
		var classTot = snapshot.val().classTotal;

		var labIn = snapshot.val().labInput;
		var labTot = snapshot.val().labTotal;

		var attIn = snapshot.val().attInput;
		var attTot = snapshot.val().attTotal;

		document.getElementById("classInput").value = classIn;
		document.getElementById("classTotal").value = classTot;
		document.getElementById("labInput").value = labIn;
		document.getElementById("labTotal").value = labTot;
		document.getElementById("attInput").value = attIn;
		document.getElementById("attTotal").value = attTot;
	});
	
	//RETRIEVES THE USER'S OVERALL GRADES
	firebase.database().ref(email + "overall/").once('value').then(function (snapshot) {
		var projects = snapshot.val().projTotal;
		var midterm = snapshot.val().midTotal;
		var final = snapshot.val().finTotal;
		var attendance = snapshot.val().attTotal;
		var total = snapshot.val().overallTotal;

		document.getElementById("projOverall").value = projects.toFixed(2);
		document.getElementById("midOverall").value = midterm.toFixed(2);
		document.getElementById("finOverall").value = final.toFixed(2);
		document.getElementById("attOverall").value = attendance.toFixed(2);
		document.getElementById("overallTotal").value = total.toFixed(2);
	});
}

//CALCULATES THE USER'S PROJECT GRADES
function calcProjs() {
	//Get Inputs for Projects
	var p1Input = document.getElementById("project1input");
	var p2Input = document.getElementById("project2input");
	var p3Input = document.getElementById("project3input");
	var p4Input = document.getElementById("project4input");
	var p5Input = document.getElementById("project5input");
	var p6Input = document.getElementById("project6input");

	//Get Totals for Projects
	var p1Total = document.getElementById("project1total");
	var p2Total = document.getElementById("project2total");
	var p3Total = document.getElementById("project3total");
	var p4Total = document.getElementById("project4total");
	var p5Total = document.getElementById("project5total");
	var p6Total = document.getElementById("project6total");

	var received = Number(p1Input.value) + Number(p2Input.value) + Number(p3Input.value) + Number(p4Input.value) + Number(p5Input.value) + Number(p6Input.value);
	var total = Number(p1Total.value) + Number(p2Total.value) + Number(p3Total.value) + Number(p4Total.value) + Number(p5Total.value) + Number(p6Total.value);

	document.getElementById("projectsinput").value = received;
	document.getElementById("projecttotal").value = total;

	//LOADS THE USER'S PROJECT VALUES INTO THE FIREBASE DATABASE
	firebase.database().ref(email + "projects/").set({
		project1Input: Number(p1Input.value),
		project1Total: Number(p1Total.value),

		project2Input: Number(p2Input.value),
		project2Total: Number(p2Total.value),

		project3Input: Number(p3Input.value),
		project3Total: Number(p3Total.value),

		project4Input: Number(p4Input.value),
		project4Total: Number(p4Total.value),

		project5Input: Number(p5Input.value),
		project5Total: Number(p5Total.value),

		project6Input: Number(p6Input.value),
		project6Total: Number(p6Total.value),

		projectInput: Number(received),
		projectTotal: Number(total),
	});
}

//CALCULATES THE EXAM GRADES
function calcExams() {
	var midIn = document.getElementById("midInput");
	var finIn = document.getElementById("finInput");

	var midTotal = document.getElementById("midTotal");
	var finTotal = document.getElementById("finTotal");

	var received = Number(midIn.value) + Number(finIn.value);
	var total = Number(midTotal.value) + Number(finTotal.value);

	document.getElementById("examInput").value = received;
	document.getElementById("examTotal").value = total;

	//LOADS THE USER'S EXAM VALUES INTO THE FIREBASE DATABASE
	firebase.database().ref(email + "exams/").set({
		midtermInput: Number(midIn.value),
		midtermTotal: Number(midTotal.value),

		finalInput: Number(finIn.value),
		finalTotal: Number(finTotal.value),

		examInput: Number(received),
		examTotal: Number(total)
	});

}

//CALCULATES THE USER'S ATTENDANCE GRADES
function calcAttendance() {
	var hw1In = document.getElementById("classInput");
	var hw1Tot = document.getElementById("classTotal");;

	var hw2In = document.getElementById("labInput");;
	var hw2Tot = document.getElementById("labTotal");;

	var received = Number(hw1In.value) + Number(hw2In.value);
	var total = Number(hw1Tot.value) + Number(hw2Tot.value);

	document.getElementById("attInput").value = received;
	document.getElementById("attTotal").value = total;

	//LOADS THE USER'S ATTENDANCE SCORES TO THE FIREBASE DATABASE
	firebase.database().ref(email + "attendance/").set({
		classInput: Number(hw1In.value),
		classTotal: Number(hw1Tot.value),

		labInput: Number(hw2In.value),
		labTotal: Number(hw2Tot.value),

		attInput: Number(received),
		attTotal: Number(total),
	});
}

//CALCULATE THE USER'S OVERALL GRADES
function calcOverall() {
	var projRec = document.getElementById("projectsinput");
	var projTot = document.getElementById("projecttotal");

	var midIn = document.getElementById("midInput");
	var midTotal = document.getElementById("midTotal");

	var finIn = document.getElementById("finInput");
	var finTotal = document.getElementById("finTotal");

	var attRec = document.getElementById("attInput");
	var attTot = document.getElementById("attTotal");

	var weightProj = document.getElementById("projWeight");
	var weightMid = document.getElementById("midWeight");
	var weightFin = document.getElementById("finWeight");
	var weightAtt = document.getElementById("attWeight");

	var projWeight = Number(Number(projRec.value) / Number(projTot.value)) * 100 * Number(Number(weightProj.value) / 100);
	var midWeight = Number(Number(midIn.value) / Number(midTotal.value)) * 100 * (Number(weightMid.value) / 100);
	var finWeight = Number(Number(finIn.value) / Number(finTotal.value)) * 100 * (Number(weightFin.value) / 100);
	var attWeight = Number(Number(attRec.value) / Number(attTot.value)) * 100 * (Number(weightAtt.value) / 100);

	document.getElementById("projOverall").value = Number(projWeight.toFixed(2));
	document.getElementById("midOverall").value = Number(midWeight.toFixed(2));
	document.getElementById("finOverall").value = Number(finWeight.toFixed(2));
	document.getElementById("attOverall").value = Number(attWeight.toFixed(2));

	var weightage = Number(weightProj.value) + Number(weightMid.value) + Number(weightFin.value) + Number(weightAtt.value);
	document.getElementById("overallWeight").value = weightage;

	var total = projWeight + midWeight + finWeight + attWeight;
	document.getElementById("overallTotal").value = Number(total.toFixed(2));

	//LOADS THE USER'S OVERALL GRADES INTO THE THE FIREBASE DATABASE
	firebase.database().ref(email + "overall/").set({
		projTotal: Number(projWeight),
		midTotal: Number(midWeight),
		finTotal: Number(finWeight),
		attTotal: Number(attWeight),
		overallTotal: Number(total),
	});
}